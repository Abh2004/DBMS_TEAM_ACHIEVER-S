import { getVideo, uploadVideo, approveVideo, rejectVideo } from "../../api"
import {
  START_LOADING, END_LOADING, CREATE, RETRIEVE, APPROVE, REJECT
} from "../../constants/actionTypes"

export const handleGetVideo = (media) => async (dispatch) => {
  try {
    console.log("getting videos, media: ", media)
    dispatch({ type: START_LOADING })
    const { data } = await getVideo(media)
    dispatch({ type: RETRIEVE, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error.message)
  }
}

export const handleUploadVideo = (formData) => async (dispatch) => {
  try {
    const { data } = await uploadVideo(formData)
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const handleApproveVideo = (id) => async (dispatch) => {
  try {
    const { data } = await approveVideo(id)
    dispatch({ type: APPROVE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const handleRejectVideo = (id) => async (dispatch) => {
  try {
    const { data } = await rejectVideo(id)
    dispatch({ type: REJECT, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}