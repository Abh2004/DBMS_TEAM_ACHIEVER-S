import { getArticle, uploadArticle, approveArticle, rejectArticle } from "../../api"
import {
  START_LOADING, END_LOADING, CREATE, RETRIEVE, APPROVE, REJECT
} from "../../constants/actionTypes"

export const handleGetArticle = (media) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await getArticle(media)
    dispatch({ type: RETRIEVE, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error.message)
  }
}

export const handleUploadArticle = (formData) => async (dispatch) => {
  try {
    const { data } = await uploadArticle(formData)
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const handleApproveArticle = (id) => async (dispatch) => {
  try {
    const { data } = await approveArticle(id)
    dispatch({ type: APPROVE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const handleRejectArticle = (id) => async (dispatch) => {
  try {
    const { data } = await rejectArticle(id)
    dispatch({ type: REJECT, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}