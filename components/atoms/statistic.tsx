import styles from '../../styles/modules/Stats.module.scss';

interface Props {
  readonly name: string,
  readonly value: string | undefined
}

/** a single statistic, name & value */
const Statistic = ({ name, value }: Props) => (
  (typeof value === 'string' && value.startsWith('http'))
    ? <p className={styles.stats}><strong>{name}</strong><a href={value}>[link &rarr;]</a></p>
    : <p className={styles.stats}><strong>{name}</strong>{value}</p>
);

export default Statistic;
