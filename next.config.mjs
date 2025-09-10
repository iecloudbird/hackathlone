/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com"], // Remote images allowed here
  },
  webpack: (config) => {
    config.snapshot = {
      managedPaths: [],
    };
    return config;
  },
};

export default nextConfig;
