import Script from 'next/script';

/** next/script example */
const ExternalScripts = () => (
  <>
    <Script
      strategy="afterInteractive"
      src="//www.google-analytics.com/analytics.js"
    />
  </>
);

export default ExternalScripts;
