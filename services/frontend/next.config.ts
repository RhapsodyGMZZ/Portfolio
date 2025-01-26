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
                hostname: 'localhost',
                port: '',
                pathname:"/api/image/*"
            },
        ],
    }
};

export default nextConfig;
