
module.exports = {
    siteUrl:process.env.SITE_URL || 'http://localhost:3000',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
        `${siteUrl}/server-sitemap.xml`,
        ],
      },
}