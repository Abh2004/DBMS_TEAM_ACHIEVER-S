import React, { useState, useEffect } from "react"
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"
import { Container, Button, Tab, Tabs, Paper } from "@mui/material"

import { PageInfo, DialogBox } from "../components"
import { contributeInfo, contributeOptions } from "../constants"

export default function Contribute() {
  const { mediaTypeQuery, mediaTypes } = contributeOptions
  const location = useLocation()

  const [uploadType, setUploadType] = useState(mediaTypes[0].to)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [chosenTab, setChosenTab] = useState(uploadType)
  const [isModified, setIsModified] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setUploadType(
      new URLSearchParams(location.search).get(mediaTypeQuery) ||
        mediaTypes[0].to
    )
    setIsModified(false)
  }, [location.search, mediaTypeQuery, mediaTypes])

  function handleRequestTagChange(e, value) {
    if (uploadType !== value) {
      setChosenTab(value)

      if (isModified) {
        setDialogOpen(true)
      } else {
        handleTabSwitch()
        navigate(`?${mediaTypeQuery}=${value}`)
      }
    }
  }

  function handleTabSwitch() {
    setUploadType(chosenTab)
    setDialogOpen(false)
  }

  return (
    <Container component="main" maxWidth="md">
      <PageInfo {...contributeInfo} />
      <Paper sx={{ mb: 2 }}>
        <Tabs
          value={uploadType}
          onChange={handleRequestTagChange}
          variant="scrollable"
          scrollButtons={false}
        >
          {mediaTypes.map((tab) => (
            <Tab key={`tab-${tab.label}`} label={tab.label} value={tab.to} />
          ))}
        </Tabs>

        <DialogBox
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Are you sure?"
          content="Your form may have unsaved changes. Are you sure you want to switch tab?"
          actions={
            <>
              <Button autoFocus onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleTabSwitch}
                component={RouterLink}
                to={`?${mediaTypeQuery}=${chosenTab}`}
              >
                Switch
              </Button>
            </>
          }
        />
      </Paper>

      {mediaTypes.map(
        (mediaType) =>
          mediaType.to === uploadType && (
            <mediaType.component.Component
              key={mediaType.to}
              {...mediaType.component.props}
            />
          )
      )}
    </Container>
  )
}
