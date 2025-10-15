export const initialState = {
  items: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      const newItems = [...state.items, action.product];
      return {
        items: newItems,
      };
    default:
      return state;
  }
};
