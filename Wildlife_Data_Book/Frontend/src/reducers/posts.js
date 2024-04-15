import { CREATE, RETRIEVE, RETRIEVE_ALL, START_LOADING, END_LOADING, APPROVE, REJECT } from "../constants/actionTypes"

export default (state = { isLoading: true, posts: [], post: null }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true }
    case END_LOADING:
      return { ...state, isLoading: false }
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] }
    case RETRIEVE_ALL:
      return { ...state, posts: action.payload, post: null }
    case RETRIEVE:
      return { ...state, post: action.payload }
    case APPROVE, REJECT:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) }
    default:
      return state
  }
}