import React, { useState } from "react"
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
  FormControlLabel,
  Checkbox,
  Paper,
} from "@mui/material"

import { AuthCard } from "../styles"
import { handleSignUp } from "../actions/auth"

export default function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    dispatch(
      handleSignUp(
        {
          first_name: data.get("firstName"),
          last_name: data.get("lastName"),
          username: data.get("username"),
          email: data.get("email"),
          password: data.get("password"),
        },
        navigate
      )
    )
  }

  return (
    <Container component="main" maxWidth="sm">
      <Paper>
        <AuthCard>
          <Typography variant="h2" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="body2">
            {"Already a member? "}
            <Link component={RouterLink} to="/signin">
              Sign in here
            </Link>
          </Typography>
          {/* {error && (
            <Alert sx={{ mt: 2, width: "100%" }} severity="error">
              {error}
            </Alert>
          )} */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" name="lastName" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  name="username"
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
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to the terms and conditions."
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
              {/* {loading ? "Signing up..." : "Sign Up"} */}
              Sign Up
            </Button>
          </Box>
        </AuthCard>
      </Paper>
    </Container>
  )
}
