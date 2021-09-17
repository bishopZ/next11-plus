import styles from '../../styles/modules/Typography.module.scss';

interface Props {
  readonly author?: {
    readonly name?: string;
  }
}

const minLength = 1;

/** generic display of an author's name */
const ArticleAuthor = ({ author }: Props) => (
  <>
    { typeof author?.name?.length === 'number' && author.name.length >= minLength &&
      <p className={styles.author}>{`by ${author.name}`}</p>
    }
  </>
);

export default ArticleAuthor;
