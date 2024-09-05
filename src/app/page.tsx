import { Landing } from "@/components/landing";
import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

const description =
  "Join us for a series of events celebrating the 70th birthday of Dr. Cosmas Ilechukwu.";

const graph: OpenGraph = {
  images: ["https://i.ibb.co/58XH3TP/Screenshot-2024-09-05-at-14-52-46.png"],
  description,
  siteName: "Dr. Cosmas Ilechukwu 70th birthday",
  url: "https://dr-cosmas-at-70.vercel.app",
};

export const metadata: Metadata = {
  title: "Dr. Cosmas Ilechukwu 70th birthday",
  description,
  openGraph: graph,
  twitter: graph,
  metadataBase: new URL("https://dr-cosmas-at-70.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <Landing />;
}
