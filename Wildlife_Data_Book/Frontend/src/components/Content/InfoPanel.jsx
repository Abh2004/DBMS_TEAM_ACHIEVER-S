import React from "react"
import { Box, Paper, Typography } from "@mui/material"

import { InfoCard } from "../../styles"

function PanelCard({ info }) {
  return (
    <InfoCard>
      {info.map((item) => (
        <Typography variant="body1" key={item.title}>
          <strong>{item.title}: </strong>
          {item.value}
        </Typography>
      ))}
    </InfoCard>
  )
}

export default function InfoPanel({ info }) {
  function getPanelInfo(info) {
    if (info === undefined || info === null) return []

    const panelInfo = []
    for (const [key, value] of Object.entries(info)) {
      if (key.slice(-2).toLowerCase() === "id") continue
      if (value === null || value === undefined) continue

      panelInfo.push({
        title: key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase()),
        value: value,
      })
    }
    return panelInfo
  }

  return (
    <Paper>
      {info.animals[0] && <PanelCard info={getPanelInfo(info.animals[0])} />}
      {info.plants[0] && <PanelCard info={getPanelInfo(info.plants[0])} />}
    </Paper>
  )
}
