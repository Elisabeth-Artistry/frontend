import { combineReducers } from 'redux'

import cartReducer from './cartReducer'
import userReducer from './userReducer'
import patternReducer from './patternReducer'

export default combineReducers({
    cartReducer,
    userReducer,
    patternReducer
})