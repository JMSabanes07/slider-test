import { useState, createContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'styles/theme'

export const Context = createContext()

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    const isSistemDark = window.matchMedia('(prefers-color-scheme: dark)')

    const localTheme = localStorage.getItem('theme')

    if (localTheme) {
      setTheme(localTheme)
      setIsloading(false)
      return
    }
    const event = (event) => {
      setTheme(event.matches ? 'dark' : 'light')
    }

    isSistemDark.addListener(event)
    setIsloading(false)
    return () => removeEventListener(event)
  }, [])

  const toggle = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }
  if (isLoading) return <></>
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Context.Provider
        value={{
          theme,
          toggle,
        }}
      >
        {children}
      </Context.Provider>
    </ThemeProvider>
  )
}
