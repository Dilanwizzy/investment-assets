import { combineReducers } from 'redux'

import { serverInfo } from './serverInfoReducer'

const rootReducer = combineReducers({
  serverInfo,
})

export default rootReducer
