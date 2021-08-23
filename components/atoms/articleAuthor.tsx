import styles from '../../styles/modules/Typography.module.scss';

interface Props { author?: { name?: string; } }

const minLength = 0;

/** generic display of an author's name */
const ArticleAuthor = ({ author }: Props) => (
  <>
    { author && author.name && author.name.length > minLength &&
      <p className={styles.author}>{`by ${author.name}`}</p>
    }
  </>
);

export default ArticleAuthor;
