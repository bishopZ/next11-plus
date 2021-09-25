import type { LayoutComponent, PostsReturn, Posts } from '../components/database/models';
import { updateFormField } from '../components/database/actions';
import { getPosts } from '../components/database/queries';
import Layout from '../components/sitewide/layout';
import CardList from '../components/cardList';
import SearchInput from '../components/searchInput';
import MetaHeader from '../components/sitewide/meta';
import H2 from 'components/atoms/h2';
import layoutStyles from '../styles/modules/Layout.module.scss';
import { AppStateModel } from 'components/database/reducer';

interface AppProps extends Posts {
  readonly state: AppStateModel;
}

const { container, main } = layoutStyles;

/** homepage component */
const Home: LayoutComponent = (props: AppProps) => {

  const { state } = props;
  const { response, sortedList = {}, searchPhrase, siteInfo, currentPage, resultsLoading } = state;

  return (
    <Layout siteInfo={siteInfo}>
      <div className={container}>
        <MetaHeader siteInfo={siteInfo} />
        <main className={main}>
          <SearchInput value={searchPhrase} onChange={updateFormField} />
          <br />
          { resultsLoading === true &&
            <H2>{siteInfo.preloaderText}</H2>
          }
          { resultsLoading === false &&
            <CardList
              cards={sortedList}
              response={response}
              currentPage={currentPage}
              noResultsMessage={siteInfo.noResultsMessage}/>
          }
        </main>
      </div>
    </Layout>
  );
};

export default Home;

/** get data from API */
const getStaticProps = async (): Promise<PostsReturn> => await getPosts();
export { getStaticProps };
