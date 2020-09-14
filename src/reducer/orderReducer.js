import {
    CHECKOUT_START
} from '../actions/order'

const initialState = {
    cart: [],
    processing: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHECKOUT_START:
            return {
                ...state,
                cart: action.payload,
                checkout: true
            }
    }
    return state
}

export default reducer