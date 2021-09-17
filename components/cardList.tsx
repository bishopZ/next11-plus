import CardView from './cardView';
import { PostModel } from './database/models';
import styles from '../styles/modules/Cards.module.scss';

interface Props { readonly cards: PostModel[]; }

const minLength = 1;

/** a list of cards */
const CardList = ({ cards = [] }: Props) => (
  <ul className={styles.cardList}>
    {cards.length < minLength &&
      <li className={styles.card}>
        <p>No Posts Yet</p>
      </li>
    }
    {cards.length > minLength && cards.map((card: PostModel) =>
      <CardView key={card.id} card={card} />
    )}
  </ul>
);

export default CardList;
