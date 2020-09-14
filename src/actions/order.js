export const CHECKOUT_START = "CHECKOUT_START"

export const startCheckout = items => dispatch => {
    dispatch({ type: CHECKOUT_START, payload: items })
}