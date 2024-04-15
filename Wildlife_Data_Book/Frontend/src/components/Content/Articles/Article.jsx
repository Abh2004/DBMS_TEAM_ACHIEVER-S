import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import MuiMarkdown from "mui-markdown"
import { Box, Container, Typography } from "@mui/material"

import { handleGetArticle } from "../../../actions/posts"
import { LoadingCenter } from "../../Progress"

export default function Article() {
  const { id } = useParams()
  const { post, isLoading } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!id) return

    dispatch(handleGetArticle({ id: id }))
  }, [id, dispatch])

  return (
    <>
      {isLoading ? (
        <LoadingCenter />
      ) : (
        post && (
          <Container component="main" maxWidth="md">
            <Box sx={{ mt: 2 }}>
              <Typography variant="h1" sx={{ mb: 1 }}>
                {post.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {new Date(post.createdAt).toDateString()}
              </Typography>
              <Box sx={{ mt: 5 }}>
                <MuiMarkdown>{post.content}</MuiMarkdown>
              </Box>
            </Box>
          </Container>
        )
      )}
    </>
  )
}
