/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/webp'],
    domains: [
      'via.placeholder.com',
      'placehold.jp',
      'cdn.sanity.io',
      's3.us-west-2.amazonaws.com',
    ],
  },
};
