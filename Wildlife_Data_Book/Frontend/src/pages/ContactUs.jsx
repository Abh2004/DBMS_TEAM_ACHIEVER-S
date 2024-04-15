import React, { useRef } from "react"
import { Box, Container, Grid, TextField, Button } from "@mui/material"
import emailjs from "emailjs-com"

import { PageInfo } from "../components"
import { contactInfo } from "../constants/pagesInfo"

export default function ContactUs() {
  const form = useRef(null)

  function handleContact(event) {
    event.preventDefault()

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    event.target.reset()
  }

  return (
    <Container component="main" maxWidth="md">
      <PageInfo {...contactInfo} />
      <Box component="form" ref={form} onSubmit={handleContact} sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField required fullWidth label="Name" name="user_name" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Email Address"
              name="user_email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              minRows={10}
              name="message"
              label="Message"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
