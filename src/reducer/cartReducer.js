import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../actions/cart'

const initialState = []

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            if (state.includes(action.payload)){
                return state
            } else {
                return [...state, action.payload]
            }
        case REMOVE_FROM_CART:
            return state.filter(pattern => pattern.id !== action.payload.id)
    }
    return state
}
    
export default reducer