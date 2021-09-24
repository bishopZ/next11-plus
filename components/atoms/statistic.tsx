import styles from '../../styles/modules/Stats.module.scss';

interface Props { name: string, value: string }

const Statistic = ({ name, value }: Props) => (
  <p className={styles.stats}><strong>{name}:</strong>{value}</p>
);

export default Statistic;
