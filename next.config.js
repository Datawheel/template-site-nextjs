/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This will build the project as a standalone app inside the Docker image
  output: 'standalone',
}

module.exports = nextConfig
