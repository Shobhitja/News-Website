/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['techcrunch.com'],
    domains: ['static.toiimg.com'],

    domains: ['c.ndtvimg.com', /* other domains */],
  },

}

module.exports = nextConfig
