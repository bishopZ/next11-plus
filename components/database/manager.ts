import type { ActionModel } from './models';
import * as Actions from './actions';
import { AppStateModel } from './reducer';

const lastChar = -1;
const base = 10;
const offset = 1;
const defaultPage = 0;
const minLength = 1;

// These are the data mutation functions.

/** update the search input field */
export const updateFormField = (action: ActionModel, currentState: AppStateModel) => {
  let loading = true;
  if (typeof action.text === 'string' && action.text.length < minLength) loading = false;
  return {
    ...currentState,
    resultsLoading: loading,
    currentPage: 0,
    searchPhrase: action.text ?? ''
  };
};

/** update the current set of people */
export const setPosts = (action: ActionModel, currentState: AppStateModel): AppStateModel => ({
  ...currentState,
  appState: Actions.COMPLETE,
  sortedList: action.sortedList,
  resultsLoading: false,
  response: action.response
});

/** handle the pagination next and prev links */
export const changePage = (action: ActionModel, currentState: AppStateModel) => {
  const pageString = (typeof action.newPage === 'string')
    ? action.newPage.slice(lastChar)
    : defaultPage.toString();
  const newPage = parseInt(pageString, base) - offset;
  return {
    ...currentState,
    resultsLoading: true,
    currentPage: newPage || defaultPage
  };
};
