import CardView from './cardView';
import { PostModel } from './database/models';
import styles from '../styles/modules/Cards.module.scss';

interface Props { cards: readonly PostModel[]; }

const minLength = 0;

/** a list of cards */
const CardList = ({ cards = [] }: Props) => (
  <ul className={styles.cardList}>
    {cards.length <= minLength &&
      <li className={styles.card}>
        <p>No Posts Yet</p>
      </li>
    }
    {cards.length > minLength && cards.map(card =>
      <CardView key={card.id} card={card} />
    )}
  </ul>
);

export default CardList;
