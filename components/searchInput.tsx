import { Dispatch } from './database/models';
import InputText from './atoms/inputText';

/** value could be any user input */
interface Props {
  readonly value: string;
  readonly onChange: (dispatch: Dispatch, value: string) => void;
}

/** a controlled input */
const SearchInput = ({ value, onChange }: Props) => (
  <InputText
    name="search-phrase"
    label="Name Search"
    ariaLabel="Search by name"
    placeholder="Search by name"
    index={0}
    focus={true}
    isSearch={true}
    value={value}
    onChange={onChange}
  />
);

export default SearchInput;
