import styles from '../../styles/modules/Typography.module.scss';

interface Props { date: Date | string; }

/** generic display of a publication date */
const ArticleDate = ({ date }: Props) => (
  <p className={styles.date}>
    {(date instanceof Date && !isNaN(date.valueOf()))
      ? date.toDateString()
      : new Date(date).toDateString()
    }
  </p>
);

export default ArticleDate;
