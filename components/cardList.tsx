import type { PeopleResponse, PostModel } from './database/models';
import type { Dictionary } from 'lodash';
import { Fragment } from 'react';
import H2 from '../components/atoms/h2';
import CardView from './cardView';
import Pagination from '../components/pagination';
import NoResults from 'components/atoms/noResults';
import styles from '../styles/modules/Cards.module.scss';

interface Props {
  readonly cards: Readonly<Dictionary<PostModel[]>>;
  readonly response?: PeopleResponse;
  readonly currentPage: number;
  readonly noResultsMessage: string;
}

const defaultSpecies = 'unknown species';
const firstIndex = 0, spliceLength = 1, defaultCount = 0, minLength = 0;

/** a list of cards */
const CardList = ({ cards, response, currentPage, noResultsMessage }: Props) => {
  const next = (response) ? response.next : null;
  const previous = (response) ? response.previous : null;
  const fullCount = (response) ? response.count : defaultCount;

  // sort alphabetically-ish
  const sortedKeys = Object.keys(cards).sort();
  // move unknown to the bottom
  const first = sortedKeys.splice(firstIndex, spliceLength);
  sortedKeys.push(first[firstIndex]);
  return (
    <>
      <Pagination next={next} prev={previous} page={currentPage} fullCount={fullCount} />
      { (!response || response.results.length <= minLength) &&
        <NoResults
          noResultsMessage={noResultsMessage} />
      }
      { response && response.results.length > minLength &&
        <ul className={styles.cardList}>
          { sortedKeys.map(name => {
            const list = cards[name];
            return (
              <Fragment key={name}>
                <H2>{name || defaultSpecies}</H2>
                { list.map(card =>
                  <CardView key={card.id} card={card} />
                )}
              </Fragment>
            );
          })}
        </ul>
      }
    </>
  );
};

export default CardList;
