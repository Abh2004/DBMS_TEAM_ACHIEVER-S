import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { Box, Container, Grid, Typography, Button } from "@mui/material"
import TravelExploreIcon from "@mui/icons-material/TravelExplore"

import { images } from "../constants"

export default function Home() {
  return (
    <Container component="main" maxWidth="lg">
      <Grid container alignItems="center" spacing={4} sx={{ mt: 4 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography variant="h0" sx={{ lineHeight: 1.2 }}>
            Discover the beauty and diversity of the natural world.
          </Typography>
          <Typography variant="body1" sx={{ mt: { xs: 5, md: 4 } }}>
            Explore our extensive collection of photos, videos, and articles to
            learn about your favorite animals and their habitats.
          </Typography>
          <Button
            sx={{
              mt: { xs: 5, md: 2 },
              px: { xs: 5, md: 10 },
              py: 2,
            }}
            variant="contained"
            size="large"
            startIcon={<TravelExploreIcon />}
            component={RouterLink}
            to="/explore"
          >
            Explore
          </Button>
        </Grid>

        <Grid
          rowSpacing={4}
          item
          md={6}
          xs={12}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Box
            component="img"
            src={images.elephant}
            alt="Elephant"
            width="100%"
          />
        </Grid>
      </Grid>
    </Container>
  )
}
