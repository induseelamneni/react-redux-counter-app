import { legacy_createStore as createStore} from 'redux'
import { CounterReducer } from './Reducer/CounterReducer'
export const store = createStore(CounterReducer)