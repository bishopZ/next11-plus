import styles from '../../styles/modules/Layout.module.scss';

interface Props { readonly message: string; }

/** site footer */
const Footer = ({ message }: Props) => (
  <footer role="banner" className={styles.footer}>
    {message}
  </footer>
);

export default Footer;
