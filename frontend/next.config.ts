import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 👈 allows all HTTPS domains
      },
      {
        protocol: 'http',
        hostname: '**', // 👈 allows all HTTP domains
      },
    ],
  },
};

export default nextConfig;
