import { PropsWithChildren, useState, useEffect } from "react";
import { WalletConnectorContext } from "@orderly.network/hooks";
import { ChainNamespace } from "@orderly.network/types";
import { WalletConnectModal } from "@walletconnect/modal";
import { EthereumProvider } from "@walletconnect/ethereum-provider";

const projectId = "6f801203e687cd27a89d00b68e0213cf";
const chains = [1, 137];

export const WalletConnector = ({ children }: PropsWithChildren) => {
  const [connecting, setConnecting] = useState(false);
  const [wallet, setWallet] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);
  const [connectedChain, setConnectedChain] = useState<any>(null);
  const [settingChain, setSettingChain] = useState(false);

  const connect = async () => {
    setConnecting(true);
    const ethProvider = await EthereumProvider.init({
      projectId,
      chains,
      optionalChains: chains as [number, ...number[]],
      showQrModal: false,
      rpcMap: {
        1: 'https://cloudflare-eth.com',
        137: 'https://polygon-rpc.com',
      },
    });
    const modal = new WalletConnectModal({ projectId });
    await modal.openModal({ provider: ethProvider });
    await ethProvider.enable();
    setProvider(ethProvider);
    setWallet({ provider: ethProvider });
    setConnectedChain({ id: ethProvider.chainId, namespace: ChainNamespace.evm });
    setConnecting(false);
    return [];
  };

  const disconnect = async () => {
    if (provider && provider.disconnect) {
      await provider.disconnect();
    }
    setProvider(null);
    setWallet(null);
    setConnectedChain(null);
    return [];
  };

  const setChain = async ({ chainId }: { chainId: string | number }) => {
    setSettingChain(true);
    const hexChainId = typeof chainId === 'number' ? '0x' + chainId.toString(16) : chainId;
    if (provider && provider.request) {
      await provider.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: hexChainId }] });
      setConnectedChain({ id: chainId, namespace: ChainNamespace.evm });
    }
    setSettingChain(false);
    return null;
  };

  const switchChain = async ({ chainId }: { chainId: string }) => {
    return setChain({ chainId });
  };

  return (
    <WalletConnectorContext.Provider
      value={{
        connect,
        disconnect,
        connecting,
        setChain,
        chains,
        wallet,
        connectedChain,
        settingChain,
        namespace: ChainNamespace.evm,
      }}
    >
      {children}
    </WalletConnectorContext.Provider>
  );
};

export default WalletConnector;