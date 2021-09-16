import * as Actions from './actions';
import { ActionModel, PostModel } from './models';

/** static site metadata */
const siteInfo = {
  host: '//example.com',
  siteName: 'Example site',
  pageTitle: 'Application Title',
  description: 'an example app',
  siteImage: '//localhost:3000/public/drop.jpg',
  message: 'Thanks for visiting!'
} as const;

/** value literals */
export type SiteInfoModel = typeof siteInfo;

/** application starting state */
interface AppStarting {
  appState: typeof Actions.START;
  searchPhrase: string;
  siteInfo: SiteInfoModel;
}

/** application completion state */
interface AppComplete {
  appState: typeof Actions.COMPLETE;
  originalList: readonly PostModel[];
  searchPhrase: string;
  siteInfo: SiteInfoModel;
}

/** valid application states */
type AppStateModel = AppStarting | AppComplete;

/** initial state of the reducer */
export const initialState: AppStateModel = {
  appState: Actions.START,
  searchPhrase: '',
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
      currentState.searchPhrase = action.text ?? '';
      return newState();

    case Actions.SET_POSTS:
      if (action.posts) {
        currentState = {
          ...currentState,
          appState: Actions.COMPLETE,
          originalList: action.posts
        };
        return newState();
      }
      return state;

    default:
      return state;
  }
};
