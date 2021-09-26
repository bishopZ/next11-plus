// import styles from '../../styles/modules/Typography.module.scss';

/** generic display of page subtitles */
const H3 = (props: Readonly<React.PropsWithChildren<Record<string, unknown>>>) =>
  <h3> {props.children} </h3>;

export default H3;
