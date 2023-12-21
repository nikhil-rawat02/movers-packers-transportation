import { combineReducers } from 'redux'

import authReducer from './authReducer'

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  authReducer: authReducer,
})

export default reducer
