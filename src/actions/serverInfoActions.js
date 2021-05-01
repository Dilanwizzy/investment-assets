import {
  SERVER_INFO_ERROR, SERVER_INFO_IS_FETCHING, SERVER_INFO_SET
} from './_types'
import { getServerInfo as getInfo } from '../services'

export const setServerInfo = data => ({ type: SERVER_INFO_SET, data })
export const showError = error => ({ type: SERVER_INFO_ERROR, error })
export const startFetchingInfo = () => ({ type: SERVER_INFO_IS_FETCHING })

// redux-thunk action creator
export const getServerInfo = () => async dispatch => {
  dispatch(startFetchingInfo())

  getInfo().then(data => {
    if (data && data.error) return dispatch(showError(data.error))
    return dispatch(setServerInfo(data))
  })
}
