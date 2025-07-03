/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.snapshot = {
      managedPaths: [],
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**", // Allows all paths under i.pravatar.cc
      },
    ],
  },
};

export default nextConfig;
