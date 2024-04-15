import React, { useMemo, useEffect } from "react"

import { CssBaseline } from "@mui/material"
import { ThemeProvider as MuiThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles"

import palette from "./palette"
import typography from "./typography"
import GlobalStyles from "./globalStyles.jsx"

import componentOverrides from "./overrides"

export default function ThemeProvider({ children }) {
  const theme = useMemo(
    () =>
      createTheme({
        palette,
        shape: { borderRadius: 6 },
        typography,
      }),
    []
  )

  theme.components = componentOverrides(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  )
}