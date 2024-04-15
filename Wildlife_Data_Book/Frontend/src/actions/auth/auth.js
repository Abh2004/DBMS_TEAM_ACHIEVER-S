import { LOGIN, SIGNUP, LOGOUT } from "../../constants/actionTypes"
import { signIn, signUp, logOut } from "../../api"

export const handleSignIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await signIn(formData)

    dispatch({ type: LOGIN, data })

    navigate("/")
  } catch (error) {
    console.log(error)
  }
}

export const handleSignUp = (formData, navigate) => async (dispatch) => {
  try {
    console.log(formData)
    const { data } = await signUp(formData)

    dispatch({ type: SIGNUP, data })

    navigate("/signin")
  } catch (error) {
    console.log(error)
  }
}

export const handleLogout = (navigate) => async (dispatch) => {
  try {
    await logOut()

    dispatch({ type: LOGOUT, data: null })

    navigate("/")
  } catch (error) {
    console.log(error)
  }
}