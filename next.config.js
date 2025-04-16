const {i18n} = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    // Define your public environment variables for bespoke here
    bespoke_report_env_vars: {
      API: process.env.NEXT_PUBLIC_API || "N/A",
      OEC_API: process.env.NEXT_PUBLIC_OEC_API || "N/A",
    },
    // Add more variables as needed
  },
  experimental: {
    // Set the concurrency option to limit the number of parallel static pages generated during build to 2
    workerThreads: false,
    cpus: 2,
  },
  // Generation before timing out
  staticPageGenerationTimeout: 300,
  i18n,
}

module.exports = nextConfig
