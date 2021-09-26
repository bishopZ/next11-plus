import { AppStateModel } from 'components/database/reducer';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { LayoutComponent, PostModel, PostReturn } from '../../components/database/models';
import { getPost, getPostPaths } from '../../components/database/queries';
import DocumentDisplay from '../../components/documentDisplay';
import Layout from '../../components/sitewide/layout';
import MetaHeader from '../../components/sitewide/meta';
import layoutStyles from '../../styles/modules/Layout.module.scss';

interface Props {
  readonly post: PostModel;
  readonly state: AppStateModel;
}

export const PostPage: LayoutComponent = (props: Props) => {
  const { post, state } = props;
  const { siteInfo } = state;
  const { container, main } = layoutStyles;
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
): Promise<PostReturn | null> => (
  (typeof props.params === 'object')
    ? await getPost(props.params)
    : null
);
export { getStaticProps };
