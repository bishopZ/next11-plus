module.exports = {
  reactStrictMode: true,
  env: {},
  sassOptions: {},
  images: {
    domains: ['karshhagan-website.s3.amazonaws.com']
  },
  async redirects() {
    return [
      // {
      //   source: '/about',
      //   destination: '/',
      //   permanent: true
      // }
    ]
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
}
