import { useMemo } from "react";

export default function useMobileDetect() {
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    );
  }, []);

  return { isMobile };
}
