import React from "react"
import { ImageListItem, ImageListItemBar, Box } from "@mui/material"
import Masonry from "@mui/lab/Masonry"

export default function ImageGallery({ content }) {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} sx={{ m: 0 }}>
      {content.map((item) => (
        <ImageListItem key={item.id}>
          <Box
            component="img"
            src={`data:image/*;base64,${item.file_content}`}
            srcSet={`data:image/*;base64,${item.file_content} 2x`}
            alt={item.title}
            loading="lazy"
            sx={{ width: "100%" }}
          />
          <ImageListItemBar
            title={item.caption}
            subtitle={<span>by: {item.contributor}</span>}
          />
        </ImageListItem>
      ))}
    </Masonry>
  )
}
