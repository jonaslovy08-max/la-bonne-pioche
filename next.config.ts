import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  agentRules: false,
  allowedDevOrigins: ['127.0.0.1'],
  reactStrictMode: true,
  async redirects() {
    const secondaryDomains = [
      'www.labonnepioche.ch',
      'bonnepioche.ch',
      'www.bonnepioche.ch',
      'pioche.ch',
      'www.pioche.ch',
    ]

    return secondaryDomains.map((domain) => ({
      source: '/:path*',
      has: [{ type: 'host' as const, value: domain }],
      destination: 'https://labonnepioche.ch/:path*',
      permanent: true,
    }))
  },
}

export default nextConfig
