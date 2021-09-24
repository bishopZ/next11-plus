import { ParsedUrlQuery } from 'querystring';
import { Dictionary } from 'lodash';
import { PostsQuery, PeopleResponse, PostModel, PostQuery, PathsQuery, Posts } from './models';
import { postResponseProcess } from './comms';

const endpoint = 'https://swapi.dev/api/people/';

/** Typescript branded numbers example */
type Seconds = number & { _brand: 'seconds' };
const minuteInSeconds = 60;
const hourInMinutes = 60;

/** how long until re-building with new content
 * https://blog.logrocket.com/incremental-static-regeneration-with-next-js/ */
const hourInSeconds = (hourInMinutes * minuteInSeconds) as Seconds;

const toJson = async (response: Response) => await response.json();

/** get the species names for each person */
const getSpeciesNames = async (
  sortedList: Dictionary<PostModel[]>
): Promise<Dictionary<PostModel[]>> => {
  await Promise.all(Object.keys(sortedList).map(async key => {
    const minLength = 1;
    if (key.length > minLength) {
      await fetch(key)
        .then(toJson)
        .then(result => {
          sortedList[result.name] = sortedList[key];
          delete sortedList[key];
        });
    }
  }));
  return sortedList;
};
export { getSpeciesNames };

/** get all published posts */
const getPosts = async (): Promise<PostsQuery> => {
  let response: PeopleResponse = { count: 0, results: [], next: null, previous: null };
  let sortedList: Dictionary<PostModel[]> = {};
  let props: Posts = { response, sortedList };
  await fetch(endpoint)
    .then(toJson)
    .then(async (data: PeopleResponse) => {
      props = await postResponseProcess(data, '', {});
    });
  return { props, revalidate: hourInSeconds };
};
export { getPosts };

/** get a post by id */
const getPost = async (params: Readonly<ParsedUrlQuery>): Promise<PostQuery> => {
  const defaultIndex = '1';
  const id = typeof params.id === 'string'
    ? params.id
    : defaultIndex;
  let thePost = {} as PostModel; // is there a better way?
  await fetch(endpoint + id)
    .then(toJson)
    .then((data: PostModel) => { thePost = data; });
  return { props: { post: thePost }, revalidate: hourInSeconds };
};
export { getPost };

/** get the path of all posts */
const getPostPaths = async (): Promise<PathsQuery> => {

  /** await in anticipation of using an api */
  let thePaths: string[] = [];
  await fetch(endpoint)
    .then(async response => await response.json())
    .then((data: PeopleResponse) => {
      const { count } = data;
      for (let i = 1; i < count; i++) {
        thePaths.push(`/person/${i.toString()}`);
      }
    });
  return { paths: thePaths, fallback: false };
};
export { getPostPaths };
