import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ['res.cloudinary.com', 'gravatar.com', 'robohash.org'],
  },
};

export default nextConfig;
