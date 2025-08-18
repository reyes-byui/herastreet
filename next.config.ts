import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hancraftedhaven.vercel.app',
      },
    ],
  },
};

export default nextConfig;
