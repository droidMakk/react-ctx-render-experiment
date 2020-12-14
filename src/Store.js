import React from "react";

const handlers = {};
const actions = {
  ADD_TO_CART: "add-to-cart",
  RESET_CART: "reset-cart"
};
const initialState = {
  profile: {
    name: "Mikasa Ackerman"
  },
  cart: []
};

const reducer = (state, { action, payload }) => {
  switch (action) {
    case actions.ADD_TO_CART:
      state.cart.push();
      return state;
    case actions.RESET_CART:
      state.cart = [];
      return state;
    case actions.UPDATE_PROFILE:
      state.profile = payload;
      return state;
    default:
      return state;
  }
};

export const Store = React.createContext({ handlers, state: initialState });

export const StoreProvider = (props) => {
  const [state, setState] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{ state }}>{props.children}</Store.Provider>;
};
