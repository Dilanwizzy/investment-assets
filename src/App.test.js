import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App Component unit tests', () => {
  beforeEach(() => {
    window.scrollTo = () => {} // provide an empty implementation for window.scrollTo
  })

  const wrapper = shallow(<App />)

  it('Include styles normalizations', () => {
    expect(wrapper.find('CssBaseline')).toHaveLength(1)
  })

  it('Include Router', () => {
    expect(wrapper.find('Router')).toHaveLength(1)
  })
})
