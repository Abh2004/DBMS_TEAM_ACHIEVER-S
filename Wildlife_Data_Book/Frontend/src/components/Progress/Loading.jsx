import React from "react"
import { CircularProgress } from "@mui/material"

export default function Loading() {
  return (
    <CircularProgress
      sx={{
        display: "block",
        mx: "auto",
      }}
    />
  )
}
