import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost', 'nicolas-legay.fr']
        }
    },
};

export default nextConfig;
