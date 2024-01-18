import { createSlice } from '@reduxjs/toolkit';

export const BrandsSlice = createSlice({
  name: 'brands',
  initialState: {
    list: [
      { id: 1, name: 'The Retro', image: 'assets/imgs/banner/brand-1.png' },
      { id: 2, name: 'A Design Hub', image: 'assets/imgs/banner/brand-2.png' },
      { id: 3, name: 'Travel', image: 'assets/imgs/banner/brand-3.png' },
      { id: 4, name: 'Mockup', image: 'assets/imgs/banner/brand-4.png' },
      { id: 5, name: 'The Backyard', image: 'assets/imgs/banner/brand-5.png' },
      { id: 6, name: 'Shutter', image: 'assets/imgs/banner/brand-6.png' },
    ],
  },
  reducers: {
  },
});


export const selectBrands = (state) => state.brands.list;

export default BrandsSlice.reducer;




