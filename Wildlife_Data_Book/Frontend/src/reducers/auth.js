import { actionType } from "../constants"

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      localStorage.setItem("profile", JSON.stringify({ ...action.data.user_details }))
      return { ...state, authData: action.data, loading: false, errors: null }
    case actionType.SIGNUP:
      return { ...state, authData: action.data, loading: false, errors: null }
    case actionType.LOGOUT:
      localStorage.removeItem("profile")
      return { ...state, authData: null, loading: false, errors: null }
    default:
      return state
  }
}