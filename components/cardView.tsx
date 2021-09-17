import Link from 'next/link';
import { PostModel } from './database/models';
import styles from '../styles/modules/Cards.module.scss';
import H2 from './atoms/h2';
import ArticleDate from './atoms/articleDate';
import ArticleAuthor from './atoms/articleAuthor';

interface Props { readonly card: PostModel }

/** a single card */
const CardView = ({ card }: Props) => (
  <Link href={`/article/${card.id}`} passHref>
    <li className={styles.card}>
      <H2>{card.title}</H2>
      <ArticleDate date={card.publishDate} />
      <ArticleAuthor author={card.author} />
    </li>
  </Link>
);

export default CardView;
