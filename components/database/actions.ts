import { getNewPage, getSearchResults } from './comms';
import type { Dispatch, Posts } from './models';

// Constants
export const FOUND = 200;
export const NOT_FOUND = 404;
export const FILTER_SPECIES = 'species';
export const START = 'START';
export const COMPLETE = 'COMPLETE';
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const SET_POSTS = 'SET_POSTS';
export const CHANGE_PAGE = 'CHANGE_PAGE';

/** possible main application states */
export type AppState = typeof START | typeof COMPLETE;

/** possible action types */
export type ActionTypeString =
  typeof UPDATE_FORM_FIELD
  | typeof SET_POSTS
  | typeof CHANGE_PAGE;

/** move posts data into the frontend reducer */
export const setPosts = (dispatch: Dispatch, props: Posts) => {
  dispatch({ type: SET_POSTS, ...props });
};

/** action to update pagination */
export const changePage = (dispatch: Dispatch, newPage: string) => {
  dispatch({ type: CHANGE_PAGE, newPage });
  getNewPage(newPage, props => {
    dispatch({ type: SET_POSTS, ...props });
  });
};

/** action to update the search field */
export const updateFormField = (dispatch: Dispatch, text: string) => {
  dispatch({ type: UPDATE_FORM_FIELD, text });
  getSearchResults(text, props => {
    dispatch({ type: SET_POSTS, ...props, text });
  });
};
