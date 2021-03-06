import _ from 'lodash';
import { useReducer } from 'react';
import CardList from '../components/cardList';
import DispatchContext from '../components/context/dispatchContext';
import Counter from '../components/counter';
import { START, updateFormField, setPosts } from '../components/database/actions';
import type { LayoutComponent, PostModel, PostsReturn } from '../components/database/models';
import { getPosts } from '../components/database/queries';
import { initialState, reducer } from '../components/database/reducer';
import SearchInput from '../components/searchInput';
import Layout from '../components/sitewide/layout';
import MetaHeader from '../components/sitewide/meta';
import layoutStyles from '../styles/modules/Layout.module.scss';
import cardStyles from '../styles/modules/Cards.module.scss';


interface Props { readonly posts: PostModel[] }

/** homepage component */
const Home: LayoutComponent = (props: Props) => {

  const { posts } = props;

  /** setup a reducer for frontend database */
  const [state, dispatch] = useReducer(reducer, initialState);

  // save the backend data in the frontend database
  if (state.appState === START && _.isArray(posts)) setPosts(dispatch, posts);

  const { searchPhrase, siteInfo } = state;
  const { container, main } = layoutStyles;

  return (
    <Layout siteInfo={siteInfo}>
      <div className={container}>
        <MetaHeader siteInfo={siteInfo} />
        <div className={main}>
          <form className={cardStyles.card}>
            <DispatchContext.Provider value={dispatch}>
              <SearchInput
                value={searchPhrase}
                onChange={updateFormField}
              ></SearchInput>
            </DispatchContext.Provider>
          </form>
          <br />
          <Counter />
          <CardList cards={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

/** get data from API */
const getStaticProps = async (): Promise<PostsReturn> => await getPosts();
export { getStaticProps };
