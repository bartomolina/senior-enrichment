import { combineReducers } from 'redux'
import campuses from './campuses'

const initialState = {
  campuses: [{ name: 'campus1', id:1 }, { name: 'campus2', id:2 }]
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

const reducer = combineReducers({
  campuses,
  rootReducer
})

export default reducer
