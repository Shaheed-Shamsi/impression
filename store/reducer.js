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
      const rawResponse = await fetch('https://api.aylien.com/api/v1/sentiment', {
        method: 'POST',
        headers: {
          'X-AYLIEN-TextAPI-Application-ID': '6aca562c',
          'X-AYLIEN-TextAPI-Application-Key': '4cc1a266da1f4cc14396b900072e9a1d',
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: qs.stringify(postData)
      })
      const content = await rawResponse.json()
      let newObj = {
        date: entry.date,
        text: entry.text,
        polarity: content.polarity
      }
      let badColor = ['#2e16ba', '#9b1f1f', '#127523']
      let goodColor = ['#e4f21d', '#59ff54', '#d891ff']
      if (content.polarity === 'positive') {
        newObj.backGround = goodColor[Math.floor(Math.random() * 3)]
        console.log('testing')
      } else if (content.polarity === 'negative') {
        newObj.backGround = badColor[Math.floor(Math.random() * 3)]
      } else {
        newObj.backGround = '#bed4f7'
      }
      if (content.polarity === 'positive') {
        const albumReq = await fetch('http://ws.audioscrobbler.com/2.0/?method=album.search&album=happy&api_key=ec709ce9bd789c9f8d29e8706f3165a8&format=json')
        const albumRes = await albumReq.json()
        newObj.album = albumRes.results.albummatches.album[Math.floor(Math.random() * 50)]
      } else if (content.polarity === 'negative') {
        const albumReq = await fetch('http://ws.audioscrobbler.com/2.0/?method=album.search&album=sad&api_key=ec709ce9bd789c9f8d29e8706f3165a8&format=json')
        const albumRes = await albumReq.json()
        newObj.album = albumRes.results.albummatches.album[Math.floor(Math.random() * 50)]
      } else {
        const albumReq = await fetch('http://ws.audioscrobbler.com/2.0/?method=album.search&album=the&api_key=ec709ce9bd789c9f8d29e8706f3165a8&format=json')
        const albumRes = await albumReq.json()
        newObj.album = albumRes.results.albummatches.album[Math.floor(Math.random() * 50)]
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
