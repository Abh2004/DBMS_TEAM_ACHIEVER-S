import React from "react"
import { PageInfoBox } from "../styles"
import { Typography } from "@mui/material"
import { font } from "../constants"

export default function PageInfo(props) {
  const { title, subtitle, description } = props

  return (
    <PageInfoBox>
      <Typography
        variant="body1"
        component="h1"
        gutterBottom
        color="primary"
        fontFamily={font.secondary}
      >
        {title}
      </Typography>
      <Typography variant="h2" gutterBottom>
        {subtitle}
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {description}
      </Typography>
    </PageInfoBox>
  )
}
