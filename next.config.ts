/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.dummyjson.com"], // Allow external images from this domain
    },
    eslint: {
        ignoreDuringBuilds: true, // Ignore ESLint errors during the build
    },
};

module.exports = nextConfig;
