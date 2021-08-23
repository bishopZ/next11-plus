import { Dispatch } from './database/models';
import Input from './atoms/inputText';

/** value could be any user input */
interface Props {
  value: string;
  onChange: (dispatch: Dispatch, value: string) => void;
}

/** a controlled input */
const SearchInput = ({ value, onChange }: Props) => (
  <Input
    name="search-phrase"
    label="A Controlled Input"
    ariaLabel="Search through site content"
    placeholder="Search query"
    index={0}
    focus={true}
    isSearch={true}
    value={value}
    onChange={onChange}
  />
);

export default SearchInput;
