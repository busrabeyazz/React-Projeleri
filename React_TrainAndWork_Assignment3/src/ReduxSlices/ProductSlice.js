import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const selectFilteredProducts = (state) => {
  const selectedCategory = state.category.selectedCategory;
  if (selectedCategory === 'All') {
    return state.products.products;
  } else {
    return state.products.products.filter(
      (product) => product.category === selectedCategory
    );
  }
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('http://localhost:3000/products');
  const data = await response.json();
  return data;
});

const initialState = {
  products: [],
  status: 'idle', 
  error: null,
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



// Rastgele ürünleri seçmek için bu action export edilir.
export const { randomizeProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
