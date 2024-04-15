import React, { useState } from "react"
import { useDispatch } from "react-redux"
import MuiMarkdown from "mui-markdown"
import { Box, Button, Grid, TextField } from "@mui/material"
import { useTheme } from "@emotion/react"

import { handleUploadArticle } from "../../actions/posts"
import { font } from "../../constants"

export default function ArticleForm() {
  const theme = useTheme()
  const dispatch = useDispatch()

  const [initialPostData] = useState({
    title: "",
    content: "",
  })
  const [postData, setPostData] = useState(initialPostData)

  function handleSubmit(e) {
    e.preventDefault()

    // do api call here
    dispatch(handleUploadArticle(postData))

    setPostData(initialPostData)
    e.target.reset()
  }

  function handleChange(e) {
    const { name, value } = e.target
    setPostData({ ...postData, [name]: value })
  }

  return (
    <Box component="form" width="100%" onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            required
            value={postData.title}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Content"
            name="content"
            multiline
            minRows={10}
            required
            value={postData.content}
            onChange={handleChange}
            InputProps={{
              style: {
                fontFamily: font.code,
                fontWeight: 700,
                fontSize: "1.2rem",
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Box>
            <MuiMarkdown blockquoteBorderColor={theme.palette.primary.main}>
              {postData.content}
            </MuiMarkdown>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
