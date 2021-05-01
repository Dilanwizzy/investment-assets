import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import {
  getServerInfo, setServerInfo, showError, startFetchingInfo
} from '../../src/actions/serverInfoActions'

const middlewares = [thunkMiddleware]
const mockStore = configureStore(middlewares)

const initialState = {
  serverInfo: {
    data: null,
    error: '',
    isFetching: false,
  }
}

// Import actions from existing actions
const actions = [
  getServerInfo,
  setServerInfo,
  showError,
  startFetchingInfo,
]

const store = mockStore(initialState, actions)

export default store
