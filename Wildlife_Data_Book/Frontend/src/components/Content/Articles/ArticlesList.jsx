import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { Box, Grid, Typography, Link } from "@mui/material"

import { font } from "../../../constants"

export default function ArticlesList({ content }) {
  const redirect = `/explore`

  return (
    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {content.map((post) => (
        <Box
          component="li"
          key={post.id}
          sx={{
            py: 4,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="h4" sx={{ mb: 1 }}>
            <Link component={RouterLink} to={`${redirect}/${post.id}`}>
              {post.title}
            </Link>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {post.description}
          </Typography>

          <Grid container alignItems="flex-end" spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm>
              <Typography variant="body1">{post.creator}</Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(post.createdAt).toDateString()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Typography
                variant="body1"
                sx={{
                  fontFamily: font.secondary,
                }}
              >
                <Link component={RouterLink} to={`${redirect}/${post.id}`}>
                  Read more
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  )
}
