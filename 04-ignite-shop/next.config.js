/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    image: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
