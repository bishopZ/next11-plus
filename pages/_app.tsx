import type { AppProps } from 'next/app';
import { identity } from 'lodash';
import '../styles/globals.scss';

/** Main application component */
const MyApp = ({ Component, pageProps }: Readonly<AppProps>) => {

  // Use the layout defined at the page level, if available
  type LayoutComponent = typeof Component
    & { getLayout?: (child: React.ReactElement) => React.ReactElement };
  const MyComponent = Component as LayoutComponent;
  const getLayout = MyComponent.getLayout ?? identity;

  return getLayout(<MyComponent {...pageProps} />);
};

export default MyApp;
