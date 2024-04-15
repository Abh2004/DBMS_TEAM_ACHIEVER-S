import { brown, green } from '@mui/material/colors'

const PRIMARY = {
  lighter: green[50],
  light: green[100],
  main: green[500],
  dark: green[700],
  darker: green[900],
  contrastText: '#fff',
}

const SECONDARY = {
  lighter: brown[50],
  light: brown[100],
  main: brown[500],
  dark: brown[700],
  darker: brown[900],
  contrastText: '#fff',
}

const palette = {
  primary: PRIMARY,
  secondary: SECONDARY,
  // mode: "dark"?
}

export default palette
