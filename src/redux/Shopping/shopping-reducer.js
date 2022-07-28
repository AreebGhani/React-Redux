import Products from "../../api/Products";
import * as actionTypes from "./shopping-types";

var cartInitialState;

if (localStorage.getItem("cart")) {
  cartInitialState = JSON.parse(localStorage.getItem("cart"));
} else {
  cartInitialState = [];
}

const initialState = {
  products: Products,
  cart: cartInitialState,
  currentItem: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((item) => item.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      if (localStorage.getItem("cart")) {
        var cartState = JSON.parse(localStorage.getItem("cart"));
        if (cartState.length === 1) {
          cartState = [];
          localStorage.setItem("cart", JSON.stringify(cartState));
        }
      }
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
