import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value:[]
}

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state,action) => {
      
      state.value =action.payload
    }
  },
})

export const { setProducts } = ProductSlice.actions;

export default ProductSlice.reducer;






