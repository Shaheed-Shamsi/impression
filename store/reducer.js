import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import qs from 'qs'

const ADD_ENTRY = 'ADD_ENTRY'

const addEntry = (newEntry) => {
  return {
    type: ADD_ENTRY,
    newEntry
  }
}

export const addEntryThunk = (entry) => {

  return async (dispatch) => {
    try {
      let postData = { text: entry.text }
      console.log('query', qs.stringify(postData))
      const rawResponse = await fetch('https://api.aylien.com/api/v1/sentiment', {
        method: 'POST',
        headers: {
          'this is where the secrets go!!!'
        },
        body: qs.stringify(postData)
      })
      const content = await rawResponse.json()
      console.log('content!!!', content)
      let newObj = {
        date: entry.date,
        text: entry.text,
        polarity: content.polarity
      }
      let badColor = ['#2e16ba', '#9b1f1f', '#127523']
      let goodColor = ['#e4f21d', '#59ff54', '#d891ff']
      if (content.polarity === 'positive') {
        newObj.backGround = goodColor[Math.floor(Math.random() * 3)]
      } else if (content.polarity === 'negative') {
        newObj.backGround = badColor[Math.floor(Math.random() * 3)]
      } else {
        newObj.backGround = '#bed4f7'
      }
      const action = addEntry(newObj)
      dispatch(action)
    } catch(err) {
      console.error('error in thunk', err.stack)
    }
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

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store
