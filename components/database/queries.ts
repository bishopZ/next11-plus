import { ParsedUrlQuery } from 'querystring';
import { posts, getPostById, paths } from './mochData';
import { PostModel, PostQuery, PostsQuery, PathsQuery } from './models';

/** Typescript branded numbers example */
type Seconds = number & { _brand: 'seconds' };
const minuteInSeconds = 60;
const hourInMinutes = 60;

/** how long until re-building with new content
 * https://blog.logrocket.com/incremental-static-regeneration-with-next-js/ */
const hourSeconds = (hourInMinutes * minuteInSeconds) as Seconds;

/** get all published posts */
const getPosts = async (): Promise<PostsQuery> => {

  /** await in anticipation of using an api */
  const allPosts: readonly PostModel[] = await posts;
  return { props: { posts: allPosts }, revalidate: hourSeconds };
};
export { getPosts }; // necissary to have both async and arrow function

/** get a post by id */
const getPost = async (params: Readonly<ParsedUrlQuery>): Promise<PostQuery> => {
  const defaultIndex = 0;
  const id = typeof params.id === 'string'
    ? params.id
    : posts[defaultIndex].id;

  /** await in anticipation of using an api */
  const thePost = await getPostById(id);
  return { props: { post: thePost }, revalidate: hourSeconds };
};
export { getPost };

/** get the path of all posts */
const getPostPaths = async (): Promise<PathsQuery> => {

  /** await in anticipation of using an api */
  const thePaths = await paths;
  return { paths: thePaths, fallback: false };
};
export { getPostPaths };
