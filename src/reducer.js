export const initialState = {
  basket: [],
  user: {}
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id)
      };

    case "LOG_IN":
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default reducer;
