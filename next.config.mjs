/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    defaultFont: false,
    optimizeCss: false,
  },
  nextScriptWorkers: false,
  enableUndici: false,
  reactCompiler: true,
};

export default nextConfig;
