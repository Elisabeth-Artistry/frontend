export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export const addPattern = pattern => dispatch => {
    dispatch({ type: ADD_TO_CART, payload: pattern })
}

export const removePattern = pattern => dispatch => {
    dispatch({ type: REMOVE_FROM_CART, payload: pattern })
}