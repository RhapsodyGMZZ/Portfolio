import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost', 'nicolas-legay.tech']
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nicolas-legay.fr',
            },
            {
                protocol: 'http',
                hostname: 'caddy',
            },
        ],
    }
};

export default nextConfig;
