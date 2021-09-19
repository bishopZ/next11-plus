import H1 from '../atoms/h1';
import styles from '../../styles/modules/Layout.module.scss';

interface Props { readonly title: string; }

/** site header */
const Header = (props: React.PropsWithChildren<Props>) => (
  <header className={styles.header} role="banner">
    <H1>{props.title}</H1>
    {props.children}
  </header>
);

export default Header;
