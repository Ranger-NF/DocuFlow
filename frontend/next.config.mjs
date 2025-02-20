/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true
    },
    basePath: '/DocuFlow', 
    assetPrefix: '/DocuFlow/',
  }
  
export default nextConfig;