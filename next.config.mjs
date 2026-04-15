/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cette partie désactive Turbopack pour éviter ton erreur spécifique
  experimental: {
    turbo: false
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
