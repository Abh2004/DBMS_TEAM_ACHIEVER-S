import { combineReducers } from "@reduxjs/toolkit"

import auth from "./auth"
import posts from "./posts"

export default combineReducers({
  auth,
  posts,
})