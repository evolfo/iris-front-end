import { combineReducers } from 'redux'
import reducer from './reducers'

const rootReducer = combineReducers({
  mainReducer: reducer
})

export default rootReducer