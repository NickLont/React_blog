import axios from 'axios'

const ROOT_URL = `http://reduxblog.herokuapp.com/api`
const API_KEY = '?key=nicknicknick'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost (values, callback) {
  // The second argument is the data we send with the POST request
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback())
    // Whenever request is successful, call the call-back function
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost (id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback())

  return {
    type: DELETE_POST,
    payload: id
  }
}
