import { Dispatch, PostModel } from './models';

/** possible main application states */
export const START = 'START';
export const COMPLETE = 'COMPLETE';
export type AppState = typeof START | typeof COMPLETE;

/** possible publication states */
export const ARCHIVED = 'archived';
export const PUBLISHED = 'published';
export const DRAFT = 'draft';
export type PublicationState = typeof PUBLISHED | typeof DRAFT | typeof ARCHIVED;

/** action to update the search field */
export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const updateFormField = (dispatch: Dispatch, text: string) => {
  dispatch({ type: UPDATE_FORM_FIELD, text });
};

/** move posts data into the frontend reducer */
export const SET_POSTS = 'SET_POSTS';
export const setPosts = (dispatch: Dispatch, posts: readonly PostModel[]) => {
  dispatch({ type: SET_POSTS, posts });
};

/** possible action types */
export type ActionTypeString = typeof UPDATE_FORM_FIELD | typeof SET_POSTS;
