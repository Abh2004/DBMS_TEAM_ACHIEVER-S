import React from "react"
import { Box, Stack, Typography } from "@mui/material"

export default function VideoGallery({ content }) {
  return (
    <Box
      component="ul"
      sx={{
        flexWrap: "wrap",
        listStyle: "none",
        p: 0,
        m: 0,
        columnCount: { xs: 1, sm: 2, md: 3 },
      }}
    >
      {content.map((item) => {
        return (
          <Box component="li" key={item.id}>
            <Stack direction="column">
              <Box sx={{ position: "relative" }}>
                <video controls width="100%">
                  <source
                    src={`data:video/*;base64,${item.file_content}`}
                    type="video/mp4"
                  />
                </video>
              </Box>
              <Box>
                <Typography variant="body1" component="div">
                  {item.caption}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {item.contributor}
                </Typography>
              </Box>
            </Stack>
          </Box>
        )
      })}
    </Box>
  )
}
