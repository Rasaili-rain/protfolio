import type { NextConfig } from "next";
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    // Disable type checking during production builds
    ignoreBuildErrors: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withMDX(nextConfig);
