import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';
 
const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
        ...defaultConfig,
        images: {
          unoptimized: true,
        },
    }
  }
 
  /** @type {import('next').NextConfig} */
  return {
    ...defaultConfig,
    output: 'export',
    distDir: 'build',
    images: {
      unoptimized: true,
    },
  }
}

export default nextConfig;
