const initialState = {
    cart: []
}

const ADD_TO_CART = 'ADD_TO_CART',
      REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCart(obj){
    return {
        type: ADD_TO_CART,
        payload: obj
    }
}

export function removeFromCart(id){
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export default function cartReducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case ADD_TO_CART:
            const cartCopy = state.cart.slice();
            cartCopy.push(payload);
            return {...state, cart: cartCopy};
        case REMOVE_FROM_CART:
            const cartCopyTwo = state.cart.slice();
            const index = cartCopyTwo.findIndex(e => e.id === payload);
            cartCopyTwo.splice(index, 1);
            return {...state, cart: cartCopyTwo};
        default:
            return state;
    }
}