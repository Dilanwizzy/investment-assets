import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import fs from 'fs'
import path from 'path'
import minifyCssString from 'minify-css-string'
import App from '../../src/App'
import initStore from '../../src/store'
import theme from '../../src/res/theme'
import { ROOT_DIR } from '../../config'

const rootDir = ROOT_DIR
const template = path.join(rootDir, 'index.html')

export default (req, res) => {
  // Create a sheetsManager instance.
  const sheets = new ServerStyleSheets()

  // Create Redux store
  const store = initStore()

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Render component to string.
  const markup = renderToString(
    sheets.collect(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StaticRouter>
      </Provider>,
    )
  )

  // Grab the CSS from sheets.
  const styles = minifyCssString(sheets.toString())

  // Loads template
  fs.readFile(template, 'utf8', (err, data) => {
    if (err) throw err

    // Inserts the rendered React HTML and styles.
    const document = data
      .replace('<div id="app"></div>', `<div id="app">${markup}</div>`)
      .replace('<style id="ssr-styles"></style>', `<style id="ssr-styles">${styles}</style>`)
      .replace('<script id="ssr-state"></script>',
        `<script id="ssr-state">window.INITIAL_STATE = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}</script>`)

    // Sends html with the rendered React markup and styles.
    return res.send(document)
  })
}
