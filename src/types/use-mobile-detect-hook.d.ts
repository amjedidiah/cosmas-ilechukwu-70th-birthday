declare module "use-mobile-detect-hook" {
  interface MobileDetectHook {
    isMobile: () => boolean;
  }

  export default function useMobileDetect(): MobileDetectHook;
}
