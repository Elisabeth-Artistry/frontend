import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../actions/cart'

const initialState = {
    items: [],
    subtotal: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            if (state.items.includes(action.payload)){
                return state
            } else {
                return {
                    items: [...state.items, action.payload],
                    subtotal: state.subtotal + action.payload.price
                }
            }
        case REMOVE_FROM_CART:
            return state.filter(pattern => pattern.id !== action.payload.id)
    }
    return state
}
    
export default reducer