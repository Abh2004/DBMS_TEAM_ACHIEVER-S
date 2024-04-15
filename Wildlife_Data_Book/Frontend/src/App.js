import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

import { Navbar } from "./components"
import ThemeProvider from "./theme"
import Router from "./routes"

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

  const location = useLocation()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [location])

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Navbar user={user} setUser={setUser} />
        <Router isAuthenticated={Boolean(user)} />
        <div style={{ marginTop: "100px" }} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
