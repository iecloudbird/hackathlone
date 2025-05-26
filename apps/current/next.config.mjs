/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.snapshot = {
      managedPaths: [],
    };
    return config;
  },
};

export default nextConfig;
