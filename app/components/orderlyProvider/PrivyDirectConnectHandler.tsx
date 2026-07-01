import { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { getRuntimeConfig } from "@/utils/runtime-config";

type LoginMethod =
  | "email"
  | "sms"
  | "google"
  | "twitter"
  | "discord"
  | "github"
  | "linkedin"
  | "spotify"
  | "instagram"
  | "tiktok"
  | "line"
  | "apple"
  | "farcaster"
  | "telegram"
  | "passkey";

const getDirectLoginMethod = () => {
  const loginMethods = getRuntimeConfig("VITE_PRIVY_LOGIN_METHODS");
  return (
    (loginMethods
      ?.split(",")
      .map((method) => method.trim())
      .filter(Boolean)[0] as LoginMethod | undefined) || "email"
  );
};

export function PrivyDirectConnectHandler() {
  const { authenticated, login, ready } = usePrivy();

  useEffect(() => {
    if (!ready || authenticated) {
      return;
    }

    const handleConnectClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const button = target.closest(".wallet-connect-button");
      if (!button) {
        return;
      }

      if (
        button instanceof HTMLButtonElement &&
        (button.disabled || button.getAttribute("aria-disabled") === "true")
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      login({
        loginMethods: [getDirectLoginMethod()],
      });
    };

    document.addEventListener("click", handleConnectClick, true);

    return () => {
      document.removeEventListener("click", handleConnectClick, true);
    };
  }, [authenticated, login, ready]);

  return null;
}
