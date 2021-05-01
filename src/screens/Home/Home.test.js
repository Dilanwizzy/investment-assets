import React from 'react'
import { shallow } from 'enzyme'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Home from './Home.component'

const mockProps = {
  data: null,
  error: false,
  isFetching: false,
  onClick: () => null,
  styles: {}
}

describe('Home Component unit tests', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Home {...mockProps} />)
  })

  it('Trigger event on button click', () => {
    const mockCallBack = jest.fn()

    wrapper.setProps({ onClick: mockCallBack })
    wrapper.find(Button).dive('button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it('Render loader when fetching', () => {
    wrapper.setProps({ isFetching: true })
    expect(wrapper.find(CircularProgress)).toHaveLength(1)
  })

  it('Hide loader when not fetching', () => {
    expect(wrapper.find(CircularProgress)).toHaveLength(0)
  })
})
