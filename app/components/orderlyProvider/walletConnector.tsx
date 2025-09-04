import { PropsWithChildren, useEffect, useState } from "react";
import { WalletConnectorContext, WalletState } from "@orderly.network/hooks";
import { ChainNamespace } from "@orderly.network/types";
import { createWeb3Modal, defaultWagmiConfig, useWeb3Modal } from "@web3modal/wagmi/react";
import { WagmiProvider, useAccount as useWagmiAccount } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";

// 1. Get projectId at https://cloud.reown.com/
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"]
};

const chains = [mainnet, arbitrum] as const;
export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId });

function WalletConnectorProvider({ children }: PropsWithChildren) {
  const [wallet, setWallet] = useState<WalletState>({
    chains: chains.map((chain) => ({
      namespace: ChainNamespace.evm,
      id: chain.id
    })),
    accounts: [],
    icon: "",
    label: "",
    provider: null as any
  });

  const { open } = useWeb3Modal();
  const { address, isConnecting, chain, connector, status } = useWagmiAccount();

  useEffect(() => {
    const run = async () => {
      if (!connector) return;
      const accounts = await connector.getAccounts().then((addresses) =>
        addresses.map((addr) => ({ address: addr }))
      );
      const provider = await connector.getProvider();
      const label = (await connector.getClient?.().then((client) => client.name)) ?? "";
      setWallet((prev) => ({
        ...prev,
        accounts,
        provider: provider as any,
        label
      }));
    };
    run();
  }, [address, connector]);

  return (
    <WalletConnectorContext.Provider
      value={{
        connect: () => open().then(() => []),
        disconnect: async () => {
          if (connector) {
            await connector.disconnect();
          }
          setWallet({
            chains: chains.map((chain) => ({
              namespace: ChainNamespace.evm,
              id: chain.id
            })),
            accounts: [],
            icon: "",
            label: "",
            provider: null as any
          });
          return [];
        },
        setChain: async ({ chainId }) => {
          if (connector && typeof connector.switchChain === "function") {
            try {
              await connector.switchChain({ chainId: Number(chainId) });
              // Optionally, update state or notify success here
            } catch (error) {
              // Optionally, handle or notify error here
              console.error("Failed to switch chain:", error);
              throw error;
            }
          } else {
            throw new Error("Chain switch not supported by connector");
          }
        },
        chains: chains.slice(),
        connectedChain: chain ? { id: chain.id, namespace: ChainNamespace.evm } : null,
        namespace: ChainNamespace.evm,
        connecting: isConnecting,
        settingChain: status === "reconnecting",
        wallet
      }}
    >
      {children}
    </WalletConnectorContext.Provider>
  );
}

export const WalletConnector = ({ children }: PropsWithChildren) => (
  <WagmiProvider config={wagmiConfig}>
    <WalletConnectorProvider>{children}</WalletConnectorProvider>
  </WagmiProvider>
);

export default WalletConnector;