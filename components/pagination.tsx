import { Component } from 'react';
import DispatchContext from './context/dispatchContext';
import { changePage } from './database/actions';
import layoutStyles from '../styles/modules/Layout.module.scss';

/** value could be any user input */
interface Props {
  readonly next: string | null;
  readonly prev: string | null;
  readonly page: number;
  readonly fullCount: number;
}

const offset = 1;
const itemCount = 10;

/** a controlled input */
class Pagination extends Component<Props, JSX.Element> {

  /** for React's Context API */
  static contextType = DispatchContext;

  render() {
    const dispatch = this.context;
    const { next, prev, page, fullCount } = this.props;
    const startIndex = (page * itemCount) + offset;
    let endIndex = itemCount + (page * itemCount);
    if (endIndex > fullCount) endIndex = fullCount;

    return (
      <div className={layoutStyles.pagination}>
        { prev !== null &&
          <a href={prev} onClick={event => {
            event.preventDefault();
            changePage(dispatch, prev);
          }}>&larr; prev</a>
        }
        <p>page {page + offset}, {startIndex} to {endIndex} of {fullCount}</p>
        { next !== null &&
          <a href={next} onClick={event => {
            event.preventDefault();
            changePage(dispatch, next);
          }}>next &rarr;</a>
        }
      </div>
    );
  }
}

export default Pagination;
