import DispatchContext from 'components/context/dispatchContext';
import { updateFormField } from 'components/database/actions';
import { Component } from 'react';
import H2 from './h2';

interface Props {
  readonly noResultsMessage: string;
}

/** what to display when the search returns no results */
class NoResults extends Component<Props, JSX.Element> {
  static contextType = DispatchContext;

  render() {
    const dispatch = this.context;
    const { noResultsMessage } = this.props;
    return (
      <>
        <H2>{noResultsMessage}</H2>
        <p>
          <a href="#" onClick={event => {
            event.preventDefault();
            updateFormField(dispatch, '');
          }} >
            Clear the Search
          </a>
        </p>
      </>
    );
  }

}

export default NoResults;
