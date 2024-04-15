import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material"

import { DropZone } from "."
import { showBytes } from "../../utils"

export default function MediaForm(props) {
  const { acceptType, FileIcon, fileKey, action } = props

  const [file, setFile] = useState(null)

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()

    const postData = new FormData(e.currentTarget)
    postData.append(fileKey, file)

    // do api call here
    dispatch(action(postData))

    e.target.reset()
  }

  return (
    <Box component="form" onSubmit={handleSubmit} width="100%">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <DropZone acceptType={acceptType} setFile={setFile} />
        </Grid>
        <Grid item xs={12}>
          {file && (
            <Stack direction="row" alignItems="center">
              <FileIcon sx={{ color: "primary.main" }} />
              <Typography noWrap>{`${file.name} - ${showBytes(
                file.size
              )}`}</Typography>
            </Stack>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Caption" name="caption" required />
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
