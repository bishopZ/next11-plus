module.exports = {
  siteUrl: process.env.SITE_URL ?? 'https://example.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/api'],
  // Default transformation function
  transform: async (config, path) => {
    // switch on page name here
    return {
      loc: path, // this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    }
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/admin' },
      { userAgent: '*', allow: '/' },
    ]
  }
};
