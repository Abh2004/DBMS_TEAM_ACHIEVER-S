import { getPosts } from "../../api"
import { START_LOADING, END_LOADING, RETRIEVE_ALL, RETRIEVE } from "../../constants/actionTypes"

export {
  handleGetArticle,
  handleUploadArticle,
  handleApproveArticle,
  handleRejectArticle,
} from "./articles"

export {
  handleGetImage,
  handleUploadImage,
  handleApproveImage,
  handleRejectImage,
} from "./images"

export {
  handleGetVideo,
  handleUploadVideo,
  handleApproveVideo,
  handleRejectVideo,
} from "./videos"

export const handleGetPosts = (media) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await getPosts(media)
    dispatch({ type: RETRIEVE_ALL, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error.message)
  }
}