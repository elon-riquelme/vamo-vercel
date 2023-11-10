/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'export',
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
