const GROCERY_ITEMS = [
  { name: "Sliced bacon", price: 5.79 },
  { name: "Pasta", price: 1.28 },
  { name: "Dried beans", price: 1.36 },
  { name: "Ground beef", price: 4.12 },
  { name: "All-purpose flour", price: 0.52 },
  { name: "Creamy peanut butter", price: 2.56 },
  { name: "Top round steak", price: 5.78 },
  { name: "Potatoes", price: 0.72 },
  { name: "Frozen turkey", price: 1.59 },
  { name: "Sirloin steak", price: 8.07 },
  { name: "White rice", price: 0.72 },
  { name: "Chocolate chip cookies", price: 3.47 },
  { name: "Seedless grapes", price: 2.67 },
  { name: "Sugar", price: 0.65 },
  { name: "Ice cream", price: 4.7 },
];

import { UNDO, REDO, ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const cartReducer = (state, action) => {
  if (state === undefined) {
    return {
      forSale: GROCERY_ITEMS,
      cart: [],
      history: [[]],
      historyIndex: 0,
    };
  }

  switch (action.type) {
    case UNDO: {
      let historyIndex = state.historyIndex - 1;
      historyIndex = Math.max(historyIndex, 0);

      return {
        ...state,
        cart: state.history[historyIndex],
        historyIndex,
      };
    }
    case REDO: {
      let historyIndex = state.historyIndex + 1;
      historyIndex = Math.min(historyIndex, state.history.length - 1);

      return {
        ...state,
        cart: state.history[historyIndex],
        historyIndex,
      };
    }
    case ADD_TO_CART: {
      const cart = [...state.cart, action.item];

      // copy all of the history
      const history = [...state.history];
      // chop off all recorded future history that happened after this
      // point in time. Performing actions in the past destroys all of
      // the previous future. You can't go Back to the Future.
      history.splice(state.historyIndex + 1, state.history.length);

      // add the current cart state to the end of the history array
      history.push(cart);
      // mark our historyIndex as being the last thing in the array
      const historyIndex = history.length - 1;

      console.log(historyIndex, history);
      return {
        ...state,
        cart,
        history,
        historyIndex,
      };
    }
    case REMOVE_FROM_CART: {
      const cart = [...state.cart];
      cart.splice(action.index, 1);

      // copy all of the history
      const history = [...state.history];
      // chop off all recorded future history that happened after this
      // point in time. Performing actions in the past destroys all of
      // the previous future. You can't go Back to the Future.
      history.splice(state.historyIndex + 1, state.history.length);

      // add the current cart state to the end of the history array
      history.push(cart);
      // mark our historyIndex as being the last thing in the array
      const historyIndex = history.length - 1;

      console.log(historyIndex, history);
      return {
        ...state,
        cart,
        history,
        historyIndex,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
