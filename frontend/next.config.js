/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
    dest:"public",
    register:true,
    disable:process.env.NODE_ENV!=="production",
    runtimeCaching,
    skipWaiting:true,
    buildExcludes: [/middleware-manifest.json$/],
})
const nextConfig = withPWA({
  reactStrictMode: true,
  
})

module.exports = nextConfig
