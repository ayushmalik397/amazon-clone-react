import Subtotal from "./components/Subtotal";

export const initialState = {
  basket: [],
  user: null,
};

export const getSubtotal = (basket) =>
  basket?.reduce((total, b) => total + b.price, 0).toFixed(2);

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "ADD_TO_BASKET":
      //add logic
      return { ...state, basket: [...state.basket, action.payload] };
      break;
    case "REMOVE_FROM_BASKET":
      //remove logic
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove Product");
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
}

export default reducer;
