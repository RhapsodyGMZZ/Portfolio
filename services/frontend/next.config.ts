import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost']
        }
    },
    images: {
        domains: ["localhost"],
    }
};

export default nextConfig;
