import { getImage, uploadImage, approveImage, rejectImage } from "../../api"
import {
  START_LOADING, END_LOADING, CREATE, RETRIEVE, APPROVE, REJECT
} from "../../constants/actionTypes"

export const handleGetImage = (media) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await getImage(media)
    dispatch({ type: RETRIEVE, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error.message)
  }
}

export const handleUploadImage = (formData) => async (dispatch) => {
  try {
    const { data } = await uploadImage(formData)
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const handleApproveImage = (id) => async (dispatch) => {
  try {
    const { data } = await approveImage(id)
    dispatch({ type: APPROVE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const handleRejectImage = (id) => async (dispatch) => {
  try {
    const { data } = await rejectImage(id)
    dispatch({ type: REJECT, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}