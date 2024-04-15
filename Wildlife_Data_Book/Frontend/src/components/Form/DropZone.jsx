import React from "react"
import { useDropzone } from "react-dropzone"
import { styled } from "@mui/system"
import { Box, Typography } from "@mui/material"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"

export const DropZoneBox = styled("div")(({ theme }) => ({
  width: "100%",
  cursor: "pointer",
  border: "1px dashed",
  borderColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}))

export default function DropZone(props) {
  const { acceptType, setFile } = props

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      [acceptType]: [],
    },
    onDrop: (acceptedFiles) => {
      acceptedFiles[0].preview = URL.createObjectURL(acceptedFiles[0])
      setFile(acceptedFiles[0])
    },
  })

  return (
    <DropZoneBox {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <CloudUploadIcon sx={{ fontSize: 50, color: "primary.main" }} />
      <Typography textAlign="center" variant="body1" color="text.secondary">
        Drag and drop some files here, or click to select files
      </Typography>
    </DropZoneBox>
  )
}
