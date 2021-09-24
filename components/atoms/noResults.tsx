import type { Dispatch } from 'components/database/models';
import H2 from './h2';

interface Props {
  dispatch: Dispatch;
  updateFormField: (dispatch: Dispatch, text: string) => void;
  noResultsMessage: string;
}
const NoResults = ({ dispatch, updateFormField, noResultsMessage }: Props) => (
  <>
    <H2>{noResultsMessage}</H2>
    <p><a href="#" onClick={event => {
      event.preventDefault();
      updateFormField(dispatch, '');
    }} >Clear the Search</a></p>
  </>
);

export default NoResults;
