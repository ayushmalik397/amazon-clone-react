export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //add logic
      return { ...state, basket: [...state.basket, action.payload] };
      break;
    case "REMOVE_FROM_BASKET":
      //remove logic
      return { state };
      break;
    default:
      return state;
  }
}

export default reducer;
