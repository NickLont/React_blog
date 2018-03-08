import _ from 'lodash'
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case (DELETE_POST):
      // look at the state object and if it has a key of the post ID just omit it from the object
      // and return a new one without it
      return _.omit(state, action.payload)
    case (FETCH_POSTS):
      console.log('Reducer selected. Action payload is: ', action.payload.data)
      return _.mapKeys(action.payload.data, 'id')
    case (FETCH_POST):
      // ES5
      // const post = action.payload.data
      // const newState = {...state}
      // newState[post.id] = post
      // return {newState}

      // ES6
      return {...state, [action.payload.data.id]: action.payload.data}
    default:
      return state
  }
}
