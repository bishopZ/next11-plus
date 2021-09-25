import type { PeopleResponse, Posts } from './models';
import { groupBy } from 'lodash';
import { getSpeciesNames } from './queries';
import { FILTER_SPECIES } from './actions';

type Callback = (props: Posts) => void;
type ObjectKeys = string | number | symbol;

const idOffset = 2;

/** cache api calls */
const getNewPageMemo: Record<string, Posts> = {};
const getSearchMemo: Record<string, Posts> = {};

/** necissary helper */
export const has = (
  target: Record<ObjectKeys, unknown>, property: ObjectKeys
): boolean => Object.prototype.hasOwnProperty.call(target, property);

/** post process the species names and base sorting */
export const postResponseProcess = async (
  data: PeopleResponse, link: string, memo: Record<string, Posts>
) => {
  const dataWithIds = data.results.map(item => {
    const urlParts = item.url.split('/');
    item.id = urlParts[urlParts.length - idOffset];
    return item;
  });
  const sortedList = groupBy(dataWithIds, FILTER_SPECIES);
  let fullSortedList = await getSpeciesNames(sortedList);
  const returnData = { response: data, sortedList: fullSortedList };
  memo[link] = returnData;
  return returnData;
};

/** get the page, if cached, still refresh the data behind the scenes */
export const getNewPage = (link: string, callback: Callback): void => {
  let isDone = false;
  if (has(getNewPageMemo, link)) {
    callback(getNewPageMemo[link]);
    isDone = true;
  }
  const promise = fetch(link)
    .then(async response => await response.json())
    .then(async (data: PeopleResponse) => await postResponseProcess(data, link, getNewPageMemo));
  if (!isDone) promise.then(callback);
};

/** get the search results, if cached, still refresh the data behind the scenes */
export const getSearchResults = (text: string, callback: (props: Posts) => void): void => {
  let isDone = false;
  if (has(getSearchMemo, text)) {
    callback(getSearchMemo[text]);
    isDone = true;
  }
  const promise = fetch(`https://swapi.dev/api/people/?search=${text}`)
    .then(async response => await response.json())
    .then(async (data: PeopleResponse) => await postResponseProcess(data, text, getSearchMemo));
  if (!isDone) promise.then(callback);
};

