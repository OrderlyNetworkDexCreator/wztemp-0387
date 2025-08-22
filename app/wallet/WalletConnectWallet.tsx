import React, { useState, useCallback } from 'react';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';

const INFURA_ID = 'YOUR_INFURA_ID'; // Replace with your Infura ID or use a public RPC

export default function WalletConnectWallet() {
  const [provider, setProvider] = useState<any>(null);
  const [address, setAddress] = useState<string>('');
  const [connected, setConnected] = useState(false);

  const connectWallet = useCallback(async () => {
    // 1. Create WalletConnect Provider
    const wcProvider = new WalletConnectProvider({
      rpc: {
        1: `https://mainnet.infura.io/v3/${INFURA_ID}`,
        137: 'https://polygon-rpc.com',
        // Add more networks as needed
      },
    });
    // 2. Enable session (triggers QR Code modal)
    await wcProvider.enable();
    setProvider(wcProvider);
    setConnected(true);
    // 3. Create ethers provider and get address
    const ethersProvider = new ethers.BrowserProvider(wcProvider);
    const signer = await ethersProvider.getSigner();
    setAddress(await signer.getAddress());
  }, []);

  const disconnectWallet = useCallback(async () => {
    if (provider && provider.disconnect) {
      await provider.disconnect();
    }
    setProvider(null);
    setAddress('');
    setConnected(false);
  }, [provider]);

  return (
    <div style={{ padding: 24 }}>
      <h2>WalletConnect EVM Wallet</h2>
      {connected ? (
        <>
          <div>Address: {address}</div>
          <button onClick={disconnectWallet}>Disconnect</button>
        </>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}
