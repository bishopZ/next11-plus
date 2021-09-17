import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useReducer } from 'react';
import { LayoutComponent, PostModel, PostReturn } from '../../components/database/models';
import { getPost, getPostPaths } from '../../components/database/queries';
import { initialState, reducer } from '../../components/database/reducer';
import DocumentDisplay from '../../components/documentDisplay';
import Layout from '../../components/sitewide/layout';
import MetaHeader from '../../components/sitewide/meta';
import layoutStyles from '../../styles/modules/Layout.module.scss';

interface Props { readonly post: PostModel }

export const PostPage: LayoutComponent = (props: Props) => {

  // reducer for frontend database
  const [state/* ,  dispatch */] = useReducer(reducer, initialState);

  const { post } = props;
  const { siteInfo } = state;
  const { container, main } = layoutStyles;

  /** fallback pages
   * https://nextjs.org/docs/basic-features/data-fetching#fallback-true */
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout siteInfo={siteInfo}>
      <div className={container}>
        <MetaHeader siteInfo={siteInfo} />
        <nav role="navigation"><Link href="/" passHref>&larr; back home</Link></nav>
        <main className={main}>
          <DocumentDisplay post={post} />
        </main>
      </div>
    </Layout>
  );
};

export default PostPage;

/** for any dynamic page */
const getStaticPaths = async (): Promise<GetStaticPathsResult> => await getPostPaths();
export { getStaticPaths };

/** get data from the API */
const getStaticProps = async (
  props: Readonly<GetStaticPropsContext>
): Promise<PostReturn | null> => {
  const { params } = props;
  return (typeof params === 'object')
    ? await getPost(params)
    : null;
};
export { getStaticProps };
