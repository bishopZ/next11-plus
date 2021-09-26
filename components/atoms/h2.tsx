import styles from '../../styles/modules/Typography.module.scss';

/** generic display of page subtitles */
const H2 = (props: Readonly<React.PropsWithChildren<Record<string, unknown>>>) =>
  <h2 className={styles.h2}> {props.children} </h2>;

export default H2;
