import styles from '../../styles/modules/Typography.module.scss';

/** generic display of the main page title */
const H1 = (props: Readonly<React.PropsWithChildren<Record<string, unknown>>>) =>
  <h1 className={styles.h1}>{props.children}</h1>;

export default H1;
