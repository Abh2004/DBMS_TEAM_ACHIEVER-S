import React from "react"
import { Helmet } from "react-helmet-async"
import { appName } from "../constants"
import { styled } from "@mui/material"

const Gap = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(10),

  [theme.breakpoints.down("lg")]: {
    marginTop: theme.spacing(9),
  },
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(8),
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(5),
  },
}))

export default function HelmetWrap({ title, children }) {
  return (
    <>
      <Helmet>
        <title>{`${appName} | ${title}`}</title>
      </Helmet>

      <Gap>{children}</Gap>
    </>
  )
}
