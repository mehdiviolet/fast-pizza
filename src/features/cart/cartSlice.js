import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload:pizza
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload:id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload:id
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      // .reduce((acc, cur) => acc + cur.quantity, 0);
      if (!pizza) return;
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
      //   console.log(pizza);

      //   state.cart = [...state.cart, pizza];
    },
    decreaseItemQuantity(state, action) {
      //payload:id
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      // .reduce((acc, cur) => acc + cur.quantity, 0);
      if (!pizza) return;
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
      if (pizza.quantity === 0)
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== pizza.pizzaId
        );
      console.log(pizza);
    },
    clearCart(state) {
      state.cart = initialState.cart;
    },
  },
});

export const getCart = (state) => state.cart.cart;
export const totalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);
export const prices = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);
export const getCurQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
