"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import CrossIcon from "@/components/cross-icon";

export default function Header() {
  return (
    <>
      <div id="top" />

      <header className="fixed left-0 right-0 top-0 bg-background px-4 lg:px-6 h-14 flex items-center z-[1]">
        <div className="container flex items-center">
          <ScrollLink
            to="top"
            href="#top"
            className="flex items-center justify-center cursor-pointer"
            smooth
          >
            <CrossIcon className="h-6 w-6" />
            <span className="sr-only">Charismatic Renewal Ministries</span>
          </ScrollLink>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <ScrollLink
              to="event-details"
              href="#event-details"
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
              smooth
            >
              Event Details
            </ScrollLink>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Felicitations
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
