import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // This pattern will match all images with a specific host
        // and path
        hostname: "randomuser.me",
        protocol: "https"
      },
      {
        // This pattern will match all images with a specific host
        // and path
        hostname: "pokeapi.co",
        protocol: "https"
      },
      {
        hostname: "raw.githubusercontent.com",
        protocol: "https"
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
