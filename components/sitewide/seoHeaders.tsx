import { SiteInfoModel } from '../database/reducer';

interface Props { siteInfo: SiteInfoModel }

/** headers related to search engine ranking */
const SeoHeaders = ({ siteInfo }: Props) => (
  <>
    <link rel="canonical" href={siteInfo.host} />
    <link rel="alternate" hrefLang="x-default" href={siteInfo.host} />
    <meta property="og:url" content={siteInfo.host} />

    <meta name="application-name" content={siteInfo.siteName} />
    <meta property="og:site_name" content={siteInfo.siteName} />
    <meta name="author" content={siteInfo.siteName} />

    <title>{siteInfo.pageTitle}</title>
    <meta property="og:title" content={siteInfo.pageTitle} />
    <meta name="twitter:title" content={siteInfo.pageTitle} />

    <meta name="description" content={siteInfo.description} />
    <meta property="og:description" content={siteInfo.description} />
    <meta name="twitter:description" content={siteInfo.description} />

    <meta property="og:image" content={siteInfo.siteImage} />
    <meta name="twitter:image" content={siteInfo.siteImage} />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default SeoHeaders;
