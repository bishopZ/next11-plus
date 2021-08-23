import { Component, ChangeEvent } from 'react';
import { Dispatch } from '../database/models';
import DispatchContext from '../context/dispatchContext';

/** properties for a controlled text input */
interface Props {
  value: string;
  onChange: (dispatch: Dispatch, value: string) => void;
  name: string;
  label: string;
  ariaLabel: string;
  index: number;
  placeholder: string;
  focus: boolean;
  isSearch: boolean;
}

type OptionalElement = HTMLInputElement | null;

/** generic display of a controlled text input.
 * also, an example of a React component for the componentDidMount 
 * lifecycle method and for Context API */
class InputText extends Component<Props, never> {

  formField: OptionalElement = null;

  /** for React's Context API */
  static contextType = DispatchContext;

  render () {
    const {
      value, onChange,
      name, label, ariaLabel, placeholder,
      index, isSearch
    } = this.props;
    const dispatch = this.context;
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          id={name} name={name}
          role={ isSearch ? 'search' : ''}
          aria-label={ariaLabel}
          aria-disabled="false"
          tabIndex={index}
          value={value}
          placeholder={placeholder}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChange(dispatch, event.currentTarget.value);
          }}
          ref={element => {
            this.formField = element;
          }}
        />
      </>
    );
  }

  /** an example of the use of DOM actions like focus() */
  componentDidMount () {
    if (this.formField && this.props.focus) this.formField.focus();
  }
}

export default InputText;
