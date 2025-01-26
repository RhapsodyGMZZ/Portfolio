import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost']
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'caddy',
                port: "8000",
            },
        ],
    }
};

export default nextConfig;
