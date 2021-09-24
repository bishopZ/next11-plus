import Link from 'next/link';
import { PostModel } from './database/models';
import styles from '../styles/modules/Cards.module.scss';
import H3 from './atoms/h3';

interface Props { readonly card: PostModel }

/** a single card */
const CardView = ({ card }: Props) => (
  <Link href={`/person/${card.id}`} passHref>
    <a className={styles.card}>
      <li>
        <H3>{card.name}</H3>
      </li>
    </a>
  </Link>
);

export default CardView;
