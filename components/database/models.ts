import * as Actions from './actions';
import { InferGetStaticPropsType } from 'next';

/** type of actions sent to dispatch */
export interface ActionModel {
  type: Actions.ActionTypeString;
  text?: string;
  posts?: readonly PostModel[];
}

/** for the dispatch context file */
export type Dispatch = (object: ActionModel) => void;

/** single post return object */
export type PostReturn = { props: { post: PostModel } };

/** multiple post return object */
export type PostsReturn = { props: { posts: readonly PostModel[] } };

/** generic form of getStaticProps */
type GenericQuery = {

  /** how long until checking for changes to cached file */
  revalidate: number;
};

/** single post getStaticProps return object */
export type PostQuery = PostReturn & GenericQuery;

/** multi post getStaticProps return object */
export type PostsQuery = PostsReturn & GenericQuery;

/** getStaticPaths return object */
export type PathsQuery = {
  paths: string[];

  /**
   * true creates fallback pages with empty props if page is un-rendered
   * https://nextjs.org/docs/basic-features/data-fetching#fallback-true
   * */
  fallback: boolean;
};

/** for Components that implement next/layout */
export type LayoutComponent = {
  (props: InferGetStaticPropsType<Promise<PostsReturn>>): JSX.Element;

  /** pages implement their own page layout */
  getLayout?: (page: Record<string, unknown>) => JSX.Element;
}

/** model of a single post */
export interface PostModel {
  id: string;
  title: string;
  publishDate: Date | string;
  author?: { name: string; };
  // TODO: not implemented
  content?: { document: [] };
  state?: Actions.PublicationState
}
