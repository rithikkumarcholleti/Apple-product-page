import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  favorites: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({
        ...action.payload,
        image: '/images/iphone15.jpg', // Add image to the product
      });
    },
    addToFavorites: (state, action) => {
      state.favorites.push({
        ...action.payload,
        image: '/images/iphone15.jpg', // Add image to the product
      });
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, addToFavorites, removeFromCart, removeFromFavorites } = productSlice.actions;

export default productSlice.reducer;
