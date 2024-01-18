import { createSlice } from '@reduxjs/toolkit';

export const CategorySlice = createSlice({
  name: 'category',
  initialState: {
    selectedCategory: 'All',
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});


export const { setCategory } = CategorySlice.actions;

export default CategorySlice.reducer;
