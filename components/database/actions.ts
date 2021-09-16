import { Dispatch, PostModel } from './models';

// http status codes
export const FOUND = 200;
export const NOT_FOUND = 404;

export const START = 'START';
export const COMPLETE = 'COMPLETE';

/** possible main application states */
export type AppState = typeof START | typeof COMPLETE;

export const ARCHIVED = 'archived';
export const PUBLISHED = 'published';
export const DRAFT = 'draft';

/** possible publication states */
export type PublicationState = typeof PUBLISHED | typeof DRAFT | typeof ARCHIVED;

export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';

/** action to update the search field */
export const updateFormField = (dispatch: Dispatch, text: string) => {
  dispatch({ type: UPDATE_FORM_FIELD, text });
};

export const SET_POSTS = 'SET_POSTS';

/** move posts data into the frontend reducer */
export const setPosts = (dispatch: Dispatch, posts: readonly PostModel[]) => {
  dispatch({ type: SET_POSTS, posts });
};

/** possible action types */
export type ActionTypeString = typeof UPDATE_FORM_FIELD | typeof SET_POSTS;
