import { ParsedUrlQuery } from 'querystring';
import { Dictionary } from 'lodash';
import { PostsQuery, PeopleResponse, PostModel, PostQuery, PathsQuery, Posts } from './models';
import { has, postResponseProcess } from './comms';

type SortedList = Dictionary<PostModel[]>;

const endpoint = 'https://swapi.dev/api/people/';

/** Typescript branded numbers example */
type Seconds = number & { _brand: 'seconds' };
const minuteInSeconds = 60;
const hourInMinutes = 60;

/** how long until re-building with new content
 * https://blog.logrocket.com/incremental-static-regeneration-with-next-js/ */
const hourInSeconds = (hourInMinutes * minuteInSeconds) as Seconds;

const toJson = async (response: Response) => await response.json();
const speciesMemo: Record<string, string> = {};
const minLength = 1;
const defaultIndex = '1';

/** get the species names for each person */
const getSpeciesNames = async (
  sortedList: SortedList
): Promise<SortedList> => {
  await Promise.all(Object.keys(sortedList).map(async key => {
    if (key.length > minLength) {
      if (has(speciesMemo, key)) {
        sortedList[speciesMemo[key]] = sortedList[key];
        delete sortedList[key];
      } else {
        await fetch(key)
          .then(toJson)
          .then(result => {
            speciesMemo[key] = result.name;
            sortedList[result.name] = sortedList[key];
            delete sortedList[key];
          });
      }
    }
  }));
  return sortedList;
};
export { getSpeciesNames };

/** get all published posts */
const getPosts = async (): Promise<PostsQuery> => {
  const deadMemo = {};
  const deadKey = '';
  let response: PeopleResponse = { count: 0, results: [], next: null, previous: null };
  let sortedList: SortedList = {};
  let props: Posts = { response, sortedList };
  await fetch(endpoint)
    .then(toJson)
    .then(async (data: PeopleResponse) => {
      props = await postResponseProcess(data, deadKey, deadMemo);
    });
  return { props, revalidate: hourInSeconds };
};
export { getPosts };

/** get a post by id */
const getPost = async (params: Readonly<ParsedUrlQuery>): Promise<PostQuery> => {
  let thePost = {} as PostModel; // is there a better way?
  const id = typeof params.id === 'string'
    ? params.id
    : defaultIndex;
  await fetch(endpoint + id)
    .then(toJson)
    .then((data: PostModel) => { thePost = data; });
  return { props: { post: thePost }, revalidate: hourInSeconds };
};
export { getPost };

/** get the path of all posts */
const getPostPaths = async (): Promise<PathsQuery> => {
  let thePaths: string[] = [];
  await fetch(endpoint)
    .then(toJson)
    .then((data: PeopleResponse) => {
      const { count } = data;
      for (let i = 1; i <= count; i++) {
        thePaths.push(`/person/${i.toString()}`);
      }
    });
  return { paths: thePaths, fallback: false };
};
export { getPostPaths };
