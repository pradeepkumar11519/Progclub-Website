const siteUrl = "http://localhost:3000"
module.exports = {
    siteUrl:siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
        `${siteUrl}/server-sitemap-index.xml`,
        ],
      },
}