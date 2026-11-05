// A static export: next build writes every page to out/ as plain HTML
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
