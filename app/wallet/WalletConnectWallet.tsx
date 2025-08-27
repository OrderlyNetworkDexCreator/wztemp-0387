
import React, { useState, useCallback } from 'react';
import { EthereumProvider } from '@walletconnect/ethereum-provider';
import { WalletConnectModal } from '@walletconnect/modal';
import { ethers } from 'ethers';

const projectId = '6f801203e687cd27a89d00b68e0213cf';

export default function WalletConnectWallet() {
  const [provider, setProvider] = useState<any>(null);
  const [address, setAddress] = useState<string>('');
  const [connected, setConnected] = useState(false);

  const connectWallet = useCallback(async () => {
    // 1. Create WalletConnect EthereumProvider
    const ethProvider = await EthereumProvider.init({
      projectId,
      chains: [1, 137], // Ethereum Mainnet, Polygon
      showQrModal: false, // We'll use the Modal below
      methods: [
        'eth_sendTransaction',
        'personal_sign',
        'eth_signTypedData',
        'eth_sign',
        'eth_signTransaction',
      ],
      rpcMap: {
        1: 'https://cloudflare-eth.com', // Public Ethereum Mainnet RPC
        137: 'https://polygon-rpc.com',   // Public Polygon RPC
      },
    });

    // 2. Show WalletConnect Modal (handles mobile deep linking)
    const modal = new WalletConnectModal({
      projectId,
    });
    await modal.openModal({ provider: ethProvider });

    // 3. Wait for connection
    await ethProvider.enable();
    setProvider(ethProvider);
    setConnected(true);

    // 4. Get address
    const ethersProvider = new ethers.BrowserProvider(ethProvider);
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
