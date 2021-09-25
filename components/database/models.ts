import type { Dictionary } from 'lodash';
import type { InferGetStaticPropsType } from 'next';
import * as Actions from './actions';

/** for the dispatch context file */
export type Dispatch = (object: ActionModel) => void;

/** for Components that implement next/layout */
export type LayoutComponent = {
  // should be converted to use NextPage type
  // it might break when updating next.js versions
  (props: InferGetStaticPropsType<Promise<PostsReturn>>): JSX.Element;

  /** pages implement their own page layout */
  getLayout?: (page: Readonly<Record<string, unknown>>) => JSX.Element;
}

/** common response shape */
export interface Posts {
  readonly response: PeopleResponse;
  readonly sortedList: Dictionary<PostModel[]>;
}

/** type of actions sent to dispatch */
export interface ActionModel extends Partial<Posts> {
  readonly type: Actions.ActionTypeString;
  readonly text?: string;
  readonly newPage?: string;
}

/** single post return object */
export type PostReturn = { props: { post: PostModel } };

/** multiple post return object */
export type PostsReturn = { props: Posts };

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

/** model of a single post */
export interface PostModel {
  readonly name: string;
  readonly height: string;
  readonly mass: string;
  readonly hair_color: string;
  readonly skin_color: string;
  readonly eye_color: string;
  readonly birth_year: string;
  readonly gender: string;
  readonly homeworld: string;
  readonly films?: string[],
  readonly species?: string[],
  readonly vehicles?: string[],
  readonly starships?: string[],
  readonly created: string;
  readonly edited: string;
  readonly url: string;
  id?: string;
}

/** People API response shape */
export interface PeopleResponse {
  readonly count: number;
  readonly next: null | string;
  readonly previous: null | string;
  readonly results: PostModel[];
}
