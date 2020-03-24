import { createStore, combineReducers } from 'redux'
import reducer from './people/reducer'

const rootReducer = combineReducers({
  people: reducer
})

export default createStore(rootReducer)