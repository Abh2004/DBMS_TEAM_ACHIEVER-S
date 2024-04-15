import React from "react"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  Button,
  TextField,
  Link,
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Alert,
} from "@mui/material"
import { AuthCard } from "../styles"

import { handleSignIn } from "../actions/auth"

export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const formData = {
      username: data.get("username"),
      password: data.get("password"),
    }
    dispatch(handleSignIn(formData, navigate))
  }

  return (
    <Container component="main" maxWidth="sm">
      <Paper>
        <AuthCard>
          <Typography variant="h2" gutterBottom>
            Sign in
          </Typography>
          <Typography variant="body2">
            {"Not a member yet? "}
            <Link component={RouterLink} to="/signup">
              Sign up here
            </Link>
          </Typography>
          {/* {error && (
            <Alert sx={{ mt: 2, width: "100%" }} severity="error">
              {error}
            </Alert>
          )} */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  name="username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
              // disabled={loading}
            >
              {/* {loading ? "Signing in..." : "Sign In"} */}
              Sign In
            </Button>
          </Box>
        </AuthCard>
      </Paper>
    </Container>
  )
}
