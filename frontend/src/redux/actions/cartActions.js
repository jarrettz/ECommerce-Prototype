export const addToCart = cart => ({
  type: "APPEND_CART",
  payload: cart,
});

export const deleteItem = (id) => ({
  type: "DELETE_CART",
  payload: id
});