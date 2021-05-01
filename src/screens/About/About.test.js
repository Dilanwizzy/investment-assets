import React from 'react'
import { shallow } from 'enzyme'
import About from './About.component'

describe('About Component unit tests', () => {
  it('Render without errors', () => {
    shallow(<About />)
  })
})
