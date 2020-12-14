import React from "react";

const handlers = {};
export const types = {
  ADD_TO_CART: "add-to-cart",
  RESET_CART: "reset-cart",
  REMOVE_ITEM: "remove-item",
  UPDATE_PROFILE: "update-profile",
};
const initialState = {
  profile: {
    name: "Mikasa Ackerman",
    status: "This world is cruel. It is also very beautiful"
  },
  cart: [
    {
      name: 'Hamam',
      id: 22,
      price: 200,
      quantity: 5
    },
    {
      name: 'Vicks',
      id: 12,
      price: 120,
      quantity: 20
    },
  ]
};

const reducer = (state, { type, payload }) => {
  let cart;
  switch (type) {
    case types.ADD_TO_CART:
      cart = state.cart;
      cart.push(payload);
      return { ...state, cart };
    case types.RESET_CART:
      return { ...state, cart: [] };
    case types.REMOVE_ITEM:
      cart = state.cart.filter(x => x.id !== payload)
      return { ...state, cart };
    case types.UPDATE_PROFILE:
      state.profile = payload;
      return state;
    default:
      return state;
  }
};

export const Store = React.createContext({ handlers, state: initialState });

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
};
