import { createStore } from 'redux'

const ADD_ENTRY = 'ADD_ENTRY'

export const addEntry = (newEntry) => {
  return {
    type: ADD_ENTRY,
    newEntry
  }
}

const initialState = {
  allEntry: [],
  newEntry: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return {...state, allEntry: [...state.allEntry, action.newEntry], newEntry: {}}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
