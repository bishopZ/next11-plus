import Head from 'next/head';
import { SiteInfoModel } from '../database/reducer';
import Favicon from './favicon';
import ExternalScripts from './externalScripts';
import PreConnect from './preConnect';
import SeoHeaders from './seoHeaders';

interface Props { siteInfo: SiteInfoModel; }

/** meta headers for the site */
const MetaHeaders = ({ siteInfo }: Props) => (
  <>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <PreConnect />
      <SeoHeaders siteInfo={siteInfo} />
      <Favicon />
    </Head>
    <ExternalScripts />
  </>
);

export default MetaHeaders;
