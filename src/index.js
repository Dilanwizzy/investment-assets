import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'whatwg-fetch'

import React, { useEffect } from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import App from './App'
import theme from './res/theme'
import configureStore from './store'

const { BASE_NAME } = process.env

// Grab the initial state from SSR generated global variable
const preloadedState = window.INITIAL_STATE

// Create Redux store with initial state
const store = configureStore(preloadedState)

const Main = () => {
  useEffect(() => {
    const jssStyles = document.getElementById('ssr-styles')
    const initialState = document.getElementById('ssr-state')

    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
    if (initialState) initialState.parentNode.removeChild(initialState)
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter basename={BASE_NAME}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

hydrate(<Main />, document.getElementById('app'))

// https://webpack.js.org/api/hot-module-replacement/
if (module.hot) module.hot.accept()
