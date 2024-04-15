import React from "react"
import { Home, SignIn, SignUp, Explore, Contribute, ContactUs } from "../pages"
import { Article } from "../components/Content/Articles"

export const pages = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "Explore", path: "/explore", element: <Explore /> },
  { name: "Article", path: "/explore/:id", element: <Article /> },
  { name: "Sign In", path: "/signin", element: <SignIn />, publicOnly: true },
  { name: "Sign Up", path: "/signup", element: <SignUp />, publicOnly: true },
  { name: "Contribute", path: "/contribute", element: <Contribute />, privateOnly: true },
  { name: "Contact Us", path: "/contact", element: <ContactUs /> },
]

export const userLinks = [
  { name: "Contribute", path: "/contribute", userType: 1 },
  { name: "Review", path: "/review", userType: 2 },
]

export const navLinks = [
  { name: "Explore", path: "/explore" },
  // { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
]