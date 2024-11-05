"use client";

import useMobileDetect from "use-mobile-detect-hook";

export default function Footer() {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  return (
    <footer className="py-6 px-4 md:px-6 border-t">
      <div className="container flex flex-col gap-2 sm:flex-row shrink-0 items-center">
        <p className="text-muted-foreground max-sm:text-center">
          &copy; 2024{" "}
          <a
            href="https://crm-world.org.ng/"
            target="_blank"
            rel="noopener"
            className="underline"
          >
            Charismatic Renewal Ministries
          </a>
          . All rights reserved.
        </p>
        <p className="sm:ml-auto">
          Designed by{" "}
          <a
            href={
              isMobile ? "tel:+2348165972229" : "mailto:imunacode@gmail.com"
            }
            target="_blank"
            rel="noopener"
            className="underline"
          >
            Jedidiah Amaraegbu
          </a>
        </p>
      </div>
    </footer>
  );
}
