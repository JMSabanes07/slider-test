import { GlobalStyles } from 'styles/globals'
import { ThemeContext } from 'contexts/themeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeContext>
  )
}

export default MyApp
