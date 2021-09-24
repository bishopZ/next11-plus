import type { PostModel } from './database/models';
import type { Dictionary } from 'lodash';
import { Fragment } from 'react';
import H2 from '../components/atoms/h2';
import CardView from './cardView';
import styles from '../styles/modules/Cards.module.scss';

interface Props {
  readonly cards: Readonly<Dictionary<PostModel[]>>;
}

const defaultSpecies = 'unknown species';
const firstIndex = 0;
const spliceLength = 1;

/** a list of cards */
const CardList = ({ cards }: Props) => {
  const sortedKeys = Object.keys(cards).sort();
  const first = sortedKeys.splice(firstIndex, spliceLength);
  sortedKeys.push(first[firstIndex]);
  return (
    <ul className={styles.cardList}>
      { sortedKeys.map(name => {
        const list = cards[name];
        return (
          <Fragment key={name}>
            <H2>{name || defaultSpecies}</H2>
            { list.map(card =>
              <CardView key={card.name} card={card} />
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default CardList;
