import type { NextPage } from 'next';
import type { PeopleResponse, PostModel, Posts } from 'components/database/models';
import { Dictionary, identity } from 'lodash';
import { useReducer, ReactElement } from 'react';
import { AppStateModel, initialState, reducer } from 'components/database/reducer';
import DispatchContext from 'components/context/dispatchContext';
import { START, COMPLETE, setPosts } from 'components/database/actions';
import H1 from 'components/atoms/h1';
import '../styles/globals.scss';

interface Props {
  readonly Component: NextPage;
  readonly pageProps: Posts;
}

interface ComponentProps {
  readonly state: AppStateModel;
  readonly response: PeopleResponse;
  readonly sortedList: Dictionary<PostModel[]>;
}

/** Main application component */
const MyApp = ({ Component, pageProps }: Props) => {

  /** a reducer for the frontend database */
  const [state, dispatch] = useReducer(reducer, initialState);
  const { siteInfo: { preloaderText } } = state;

  // save the backend data in the frontend database
  if (state.appState === START) setPosts(dispatch, pageProps);
  if (state.appState !== COMPLETE) return (<H1>{preloaderText}</H1>);

  // Use the layout defined at the page level, if available
  type LayoutComponent = typeof Component & {
    (props: ComponentProps): ReactElement;
    getLayout?: (child: ReactElement) => ReactElement;
  };
  const MyComponent = Component as LayoutComponent;
  const getLayout = MyComponent.getLayout ?? identity;

  return getLayout(
    <DispatchContext.Provider value={dispatch}>
      <MyComponent {...pageProps} state={state} />
    </DispatchContext.Provider>
  );
};

export default MyApp;
