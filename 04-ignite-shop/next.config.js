/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["files.stripe.com"],
  },
  experimental: {
    image: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
