import React from "react"
import { images } from "../constants"
import { styled } from "@mui/material/styles"
import { Typography, Container, Box } from "@mui/material"

const StyledContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}))

export default function NotFound() {
  return (
    <Container component="main" maxWidth="sm">
      <StyledContent>
        <Typography variant="h2" paragraph>
          Sorry, page not found.
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Sorry, we couldn't find the page you're looking for. Perhaps you've
          mistyped the URL or not authorized? Be sure to check your spelling.
        </Typography>
        <Box
          component="img"
          src={images.confusedDog}
          alt="Confused Dog"
          sx={{ width: "100%", maxWidth: 400, my: 5 }}
        />
      </StyledContent>
    </Container>
  )
}
