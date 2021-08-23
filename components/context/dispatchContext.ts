import { createContext } from 'react';
import { Dispatch } from '../database/models';

const defaultValue: Dispatch = () => {};

/** default context export for the reducer's dispatch function */
const DispatchContext = createContext(defaultValue);
export default DispatchContext;
