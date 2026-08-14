import type { NextConfig } from 'next';

/**
 * Baseline security headers applied to every response.
 * A strict Content-Security-Policy is intentionally omitted here because it
 * requires per-deployment tuning (nonces for Next's inline runtime). See the
 * README "Security" section for guidance on adding one.
 */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Don't advertise the framework/version in responses.
  poweredByHeader: false,
  // Produce a self-contained server bundle for small, fast Docker images.
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
