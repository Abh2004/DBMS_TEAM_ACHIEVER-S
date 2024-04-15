import React from "react"
import { useRoutes } from "react-router-dom"
import { NotFound } from "./pages"
import { HelmetWrap } from "./wrappers"
import { pages } from "./constants"

export default function Router({ isAuthenticated }) {
  return useRoutes([
    ...pages.map(({ name, path, element, publicOnly, privateOnly }) => {
      if ((publicOnly && isAuthenticated) || (privateOnly && !isAuthenticated)) {
        return {
          path: path, element: <HelmetWrap title="404"><NotFound /></HelmetWrap>
        }
      }

      return {
        path: path, element: <HelmetWrap title={name}>{element}</HelmetWrap>
      }
    }),

    {
      path: "*",
      element: <HelmetWrap title="404">
        <NotFound />
      </HelmetWrap>,
    }
  ])
}