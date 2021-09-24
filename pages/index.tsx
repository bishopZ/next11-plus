import type { LayoutComponent, PostsReturn, Posts } from '../components/database/models';
import { useReducer } from 'react';
import DispatchContext from '../components/context/dispatchContext';
import { COMPLETE, setPosts, START, updateFormField } from '../components/database/actions';
import { getPosts } from '../components/database/queries';
import { initialState, reducer } from '../components/database/reducer';
import Layout from '../components/sitewide/layout';
import CardList from '../components/cardList';
import Pagination from '../components/pagination';
import SearchInput from '../components/searchInput';
import MetaHeader from '../components/sitewide/meta';
import H2 from 'components/atoms/h2';
import NoResults from 'components/atoms/noResults';
import cardStyles from '../styles/modules/Cards.module.scss';
import layoutStyles from '../styles/modules/Layout.module.scss';

const defaultCount = 0;
const minLength = 1;
const { container, main } = layoutStyles;

/** homepage component */
const Home: LayoutComponent = (props: Posts) => {

  /** setup a reducer for the frontend database */
  const [state, dispatch] = useReducer(reducer, initialState);

  const { response, sortedList = {}, searchPhrase, siteInfo, currentPage, resultsLoading } = state;
  const next = (response) ? response.next : null;
  const previous = (response) ? response.previous : null;
  const fullCount = (response) ? response.count : defaultCount;

  // save the backend data in the frontend database
  if (state.appState === START) setPosts(dispatch, props);
  if (state.appState !== COMPLETE) return (<p>{siteInfo.preloaderText}</p>);

  return (
    <Layout siteInfo={siteInfo}>
      <div className={container}>
        <MetaHeader siteInfo={siteInfo} />
        <DispatchContext.Provider value={dispatch}>
          <main className={main}>
            <form className={cardStyles.card}>
              <SearchInput value={searchPhrase} onChange={updateFormField} />
            </form>
            <br />
            { resultsLoading === true &&
              <H2>{siteInfo.preloaderText}</H2>
            }
            { resultsLoading === false &&
              Object.keys(sortedList).length <= minLength &&
              <NoResults
                dispatch={dispatch}
                updateFormField={updateFormField}
                noResultsMessage={siteInfo.noResultsMessage} />
            }
            { resultsLoading === false &&
              Object.keys(sortedList).length > minLength &&
              <>
                <Pagination next={next} prev={previous} page={currentPage} fullCount={fullCount} />
                <CardList cards={sortedList} />
              </>
            }
          </main>
        </DispatchContext.Provider>
      </div>
    </Layout>
  );
};

export default Home;

/** get data from API */
const getStaticProps = async (): Promise<PostsReturn> => await getPosts();
// oddly, async arrow functions require a seperate export statement
export { getStaticProps };
