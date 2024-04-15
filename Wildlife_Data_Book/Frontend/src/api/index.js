import axios from "axios"

const API = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
})

export const signUp = payload => API.post(`/register`, payload)
export const signIn = payload => API.post(`/login`, payload)
export const logOut = () => API.post(`/logout`)

export const getPosts = payload => API.post(`/search`, payload)

export const uploadImage = payload => API.post(`/uploadImage`, payload)
export const getImage = payload => API.post(`/getImage`, payload)

export const uploadVideo = payload => API.post(`/uploadVideo`, payload)
export const getVideo = payload => API.post(`/getVideo`, payload)

export const uploadArticle = payload => API.post(`/uploadArticle`, payload)
export const getArticle = payload => API.post(`/getArticle`, payload)

export const approveArticle = payload => API.post(`/approveArticle`, payload)
export const rejectArticle = payload => API.post(`/rejectArticle`, payload)

export const approveImage = payload => API.post(`/approveImage`, payload)
export const rejectImage = payload => API.post(`/rejectImage`, payload)

export const approveVideo = payload => API.post(`/approveVideo`, payload)
export const rejectVideo = payload => API.post(`/rejectVideo`, payload)