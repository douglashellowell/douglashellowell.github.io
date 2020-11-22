import React, { useState, useEffect } from "react"

import { ThemeProvider as StyledThemeProvider } from "styled-components"

import {
  maxWidths,
  spacing,
  typeface,
  font,
  lightMode,
  darkMode,
} from "../themes"

const defaultState = {
  darkMode: false,
  toggleDarkMode: () => {},
}

export const ThemeContext = React.createContext(defaultState)

const prefersDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode))
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const localStorageDarkMode = JSON.parse(localStorage.getItem("darkMode"))
    if (localStorageDarkMode) {
      setIsDarkMode(localStorageDarkMode)
    } else if (prefersDarkMode()) {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.color = darkMode.foreground
      document.body.style.backgroundColor = darkMode.background
    } else {
      document.body.style.color = lightMode.foreground
      document.body.style.backgroundColor = lightMode.background
    }
  }, [isDarkMode])

  const theme = {
    colours: isDarkMode ? darkMode : lightMode,
    maxWidths,
    spacing,
    typeface,
    font,
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
