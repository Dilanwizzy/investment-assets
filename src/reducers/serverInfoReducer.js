import {
  SERVER_INFO_ERROR, SERVER_INFO_IS_FETCHING, SERVER_INFO_SET
} from '../actions/_types'

const initialState = {
  data: null,
  error: '',
  isFetching: false,
}

export const serverInfo = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_INFO_ERROR:
      return {
        data: null,
        error: action.error,
        isFetching: false,
      }
    case SERVER_INFO_IS_FETCHING:
      return {
        data: null,
        error: '',
        isFetching: true
      }
    case SERVER_INFO_SET:
      return {
        data: action.data,
        error: '',
        isFetching: false,
      }
    default:
      return state
  }
}
