import React from "react"
import { Grid } from "@mui/material"

import { ArticlesList } from "./Articles"
import { InfoPanel } from "."

export default function ArticlesPage({ content }) {
  return (
    <Grid
      container
      spacing={3}
      flexDirection={{ xs: "column-reverse", md: "row" }}
    >
      <Grid item xs={12} md={6} lg={7}>
        <ArticlesList content={content.articles} />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <InfoPanel info={content.info} />
      </Grid>
    </Grid>
  )
}
