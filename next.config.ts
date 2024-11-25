import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com','pbs.twimg.com','assets.aceternity.com','aceternity.com','api.microlink.io'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/src/**', // Match all paths under /my-bucket/
      },
    ],
  },
};

export default nextConfig;
