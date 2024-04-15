import React, { useState, useEffect } from "react"
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {
  IconButton,
  Container,
  Select,
  MenuItem,
  Grid,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import { PageInfo } from "../components"
import { exploreInfo, exploreOptions } from "../constants"
import { handleGetPosts } from "../actions/posts"
import { Loading } from "../components/Progress"

export default function Explore() {
  const { mediaTypeQuery, mediaTypes } = exploreOptions
  const defaultMedia = Object.keys(mediaTypes)[0]

  const [media, setMedia] = useState({
    mediaType: defaultMedia,
    searchQuery: "",
    MediaComponent: mediaTypes[defaultMedia].Component,
  })

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { posts, isLoading } = useSelector((state) => state.posts)

  useEffect(() => {
    setMedia({
      mediaType:
        new URLSearchParams(location.search).get(mediaTypeQuery) ||
        defaultMedia,
      searchQuery: new URLSearchParams(location.search).get("search") || "",
      MediaComponent: mediaTypes[media.mediaType].Component,
    })

    if (!media.searchQuery) return

    dispatch(
      handleGetPosts({
        query: media.searchQuery,
        type: mediaTypes[media.mediaType].type,
      })
    )
  }, [location.search, mediaTypeQuery, mediaTypes, media.mediaType, dispatch])

  function handleSearch(event) {
    event.preventDefault()
    navigate(
      `?${mediaTypeQuery}=${media.mediaType}&search=${media.searchQuery}`
    )
  }

  function handleChange(e) {
    const { name, value } = e.target
    setMedia((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <Container component="main" maxWidth="lg">
      <PageInfo {...exploreInfo} />
      <Grid container spacing={2} alignItems="center" sx={{ mb: 5 }}>
        <Grid item xs={12} sm>
          <Box
            component="form"
            width="100%"
            maxWidth={{ xs: "100%", sm: "480px" }}
            onSubmit={handleSearch}
          >
            <TextField
              fullWidth
              variant="outlined"
              name="searchQuery"
              value={media.searchQuery}
              onChange={handleChange}
              placeholder="Search for a species"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton type="submit">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm="auto" justifyContent="flex-end">
          <FormControl sx={{ minWidth: { xs: "100%", sm: "200px" } }}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              value={media.mediaType}
              name="mediaType"
              label="Category"
              onChange={handleChange}
            >
              {Object.keys(mediaTypes).map((key) => (
                <MenuItem
                  key={key}
                  value={key}
                  component={RouterLink}
                  to={`?${mediaTypeQuery}=${key}&search=${media.searchQuery}`}
                >
                  {mediaTypes[key].label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {posts.status ? (
            <media.MediaComponent content={posts.status} />
          ) : (
            <Typography variant="h5" color="text.secondary">
              No results found
            </Typography>
          )}
        </>
      )}
    </Container>
  )
}
