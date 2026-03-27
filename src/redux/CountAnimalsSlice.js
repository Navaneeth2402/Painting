import { createSlice } from '@reduxjs/toolkit'

const data=localStorage.getItem("cart")
const saveCart = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const initialState = data ? JSON.parse(data) :{
   cartItems: [],
  totalAmount : 0,
};
if (!initialState.cartItems) {
  initialState.cartItems = [];
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {

    addToCart: (state, action) => {

      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id
      )

      if (exist) {
        exist.qty += 1
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 })
      }
        saveCart(state);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
      saveCart(state);
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      )
      item.qty += 1
      saveCart(state);
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      )
      if (item.qty > 1) {
        item.qty -= 1
        saveCart(state);
      }
    }

  }
  
})

export const {  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty } = counterSlice.actions

export default counterSlice.reducer