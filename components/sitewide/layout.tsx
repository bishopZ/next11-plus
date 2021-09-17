import { SiteInfoModel } from '../database/reducer';
import Header from './header';
import Footer from './footer';
import styles from '../../styles/modules/Layout.module.scss';

interface Props {
  readonly children: JSX.Element;
  readonly siteInfo: SiteInfoModel;
}

/** next layout component */
const Layout = (props: Props) => (
  <>
    <span className={styles.visuallyHidden}>
      <a href="#content-begins">Skip to Content</a>
    </span>
    <Header title={props.siteInfo.siteName} />
    <main id="content-begins">
      {props.children}
    </main>
    <Footer message={props.siteInfo.message} />
  </>
);

export default Layout;
