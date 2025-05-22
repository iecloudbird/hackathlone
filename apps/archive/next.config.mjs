/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/2024',
    assetPrefix: '/2024/',
    output: 'export',
    images: {
        unoptimized: true, // disable image optimization for static export
    },
    webpack: (config) => {
        config.snapshot = {
            managedPaths: [],
        };
        return config;
    },
};

export default nextConfig;
