/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        serverActions: {
            allowedOrigins: ['https://nicolas-legay.tech:3000']
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nicolas-legay.tech',
                port: "",
            },
        ],

    },
    output:'standalone',
};

export default nextConfig;
