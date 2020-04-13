export const UNDO = 'UNDO'
export const REDO = 'REDO'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export function undo() {
    return {type: UNDO}
}

export function redo() {
    return {type: REDO}
}

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        item
    }
}

export function removeFromCart(index) {
    return {
        type: REMOVE_FROM_CART,
        index
    }
}