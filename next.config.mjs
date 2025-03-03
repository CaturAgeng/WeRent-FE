/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'werent-app-bucket.s3.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    reactStrictMode: true,
};

export default nextConfig;
