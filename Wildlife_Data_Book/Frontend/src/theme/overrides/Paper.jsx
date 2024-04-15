import { green } from "@mui/material/colors"

export default function Paper(theme) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: theme.palette.mode === "light" ? 0 : 1,
      },
      styleOverrides: {
        root: {
          backgroundColor:
            theme.palette.mode === "light" && theme.palette.primary.lighter,
        },
      },
    },
  }
}
