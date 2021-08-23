import { SiteInfoModel } from '../database/reducer';
import Header from './header';
import Footer from './footer';
import styles from '../../styles/modules/Layout.module.scss';

interface Props {
  children: JSX.Element;
  siteInfo: SiteInfoModel;
}

/** next layout component */
const Layout = ({ children, siteInfo }: Props) => (
  <>
    <span className={styles.visuallyHidden}>
      <a href="#content-begins">Skip to Content</a>
    </span>
    <Header title={siteInfo.siteName} />
    <main id="content-begins">
      {children}
    </main>
    <Footer message={siteInfo.message} />
  </>
);

export default Layout;
