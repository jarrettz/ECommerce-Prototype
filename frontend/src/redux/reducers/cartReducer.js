const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case "APPEND_CART": 
      return { 
        ...state,
        cart: [...state.cart, action.payload]
      }
    case "DELETE_CART": 
      return {
        ...state,
        cart: state.cart.filter(cart => cart.title !== action.payload) 
      }
    default: return state;
  }
}

export default cartReducer;
