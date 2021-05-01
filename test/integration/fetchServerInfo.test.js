import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'
import Button from '@material-ui/core/Button'
import Home from '../../src/screens/Home'
import theme from '../../src/res/theme'
import configureFetch from '../__mocks__/fetch'
import { serverInfo } from '../__mocks__/data'
import store from '../__mocks__/store'
import {
  SERVER_INFO_IS_FETCHING, SERVER_INFO_SET
} from '../../src/actions/_types'

describe('Integration tests on Home Component', () => {
  beforeEach(() => {
    store.clearActions()
  })

  const wrapper = mount(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  )

  it('Fetch server info SUCCESS on button click', () => {
    global.fetch = configureFetch(serverInfo)

    // Simulate button click to fetch server info
    wrapper.find(Button).at(0).simulate('click')

    const expectedActions = [
      { type: SERVER_INFO_IS_FETCHING },
      { data: serverInfo, type: SERVER_INFO_SET }
    ]

    setImmediate(() => {
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith(`${process.env.HOST}api/server/info`)

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
