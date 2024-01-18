// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // store items with id as key for easy access
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (state.items[item.id]) {
        // Eğer item zaten varsa, miktarını artır
        state.items[item.id].quantity += 1;
      } else {
        // Eğer item henüz yoksa, oluştur ve miktarını 1 olarak ayarla
        state.items[item.id] = {
          ...item,
          quantity: 1,
        };
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      if (state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
      } else {
        delete state.items[id];
      }
    },
    
    clearCart:(state,action)=>{
      state.items={};
    },
    loadCart: (state, action) => {
      state.items = action.payload;
    },
    saveCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    
  },
});

export const { addItem, removeItem,clearCart, loadCart, saveCart } = cartSlice.actions;
export default cartSlice.reducer;
