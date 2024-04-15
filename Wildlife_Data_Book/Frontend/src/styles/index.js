import { styled } from "@mui/system"

export const AuthCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: theme.spacing(8, 4, 8, 4)
}))

export const InfoCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: theme.spacing(4, 2, 4, 2),
  "& p": {
    lineHeight: 2
  }
}))

export const PageInfoBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  maxWidth: theme.breakpoints.values.md,
  margin: theme.spacing(0, "auto", 4, "auto"),
  width: "100%",
}))

export const FlexRC = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}))