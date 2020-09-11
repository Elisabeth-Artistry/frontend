import { combineReducers } from 'redux'

import cartReducer from './cartReducer'
import userReducer from './userReducer'
import patternReducer from './patternReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    cartReducer,
    userReducer,
    patternReducer,
    orderReducer
})