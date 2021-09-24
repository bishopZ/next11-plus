import type { Dictionary } from 'lodash';
import type { ActionModel, PeopleResponse, PostModel } from './models';
import * as Actions from './actions';
import { changePage, setPosts, updateFormField } from './manager';

/** static site metadata */
const siteInfo = {
  host: '//example.com',
  siteName: 'Example site',
  pageTitle: 'Application Title',
  description: 'an example app',
  siteImage: '//localhost:3000/public/drop.jpg',
  message: 'Thanks for visiting!',
  preloaderText: 'Engaging Hyperdrive',
  noResultsMessage: 'No results.'
} as const;

/** value literals */
export type SiteInfoModel = typeof siteInfo;

interface AppProperties {
  readonly searchPhrase: string;
  readonly currentPage: number;
  readonly sortedList?: Readonly<Dictionary<PostModel[]>>;
  readonly response?: Readonly<PeopleResponse>;
  readonly resultsLoading?: boolean;
  readonly siteInfo: Readonly<SiteInfoModel>;
}

/** application starting state */
interface AppStarting extends AppProperties {
  readonly appState: typeof Actions.START;
}

/** application completion state */
interface AppComplete extends AppProperties {
  readonly appState: typeof Actions.COMPLETE;
}

/** valid application states */
export type AppStateModel = AppStarting | AppComplete;

/** initial state of the reducer */
export const initialState: AppStateModel = {
  appState: Actions.START,
  searchPhrase: '',
  currentPage: 0,
  siteInfo
};

let currentState: AppStateModel = { ...initialState };

/** helper function to seal state update objects */
const newState = () => Object.freeze({ ...currentState });


/** the main application reducer */
export const reducer = (state: AppStateModel, action: ActionModel) => {
  // using console here can reveal a lot of about what the application is doing
  // console.log(action, state);

  switch (action.type) {

    case Actions.UPDATE_FORM_FIELD:
      currentState = updateFormField(action, currentState);
      return newState();

    case Actions.SET_POSTS:
      if (
        typeof action.text === 'string' &&
        action.text !== currentState.searchPhrase
      ) return state;
      currentState = setPosts(action, currentState);
      return newState();

    case Actions.CHANGE_PAGE: {
      currentState = changePage(action, currentState);
      return newState();
    }

    default:
      return state;
  }
};
