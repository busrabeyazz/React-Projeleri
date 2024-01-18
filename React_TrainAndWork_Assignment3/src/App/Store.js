import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../Control/ProductSlice'
import CategoryReducer from '../Control/CategorySlice'
import BrandsReducer from '../Control/BrandsSlice'
import BlogReducer from '../Control/BlogSlice'
import CartReducer from '../Control/CartSlice'
import UserReducer from '../Control/UserSlice';

export const store = configureStore({
  reducer: {
    products : ProductReducer,
    category: CategoryReducer,
    brands: BrandsReducer,
    blogs: BlogReducer,
    users:UserReducer,
    cart: CartReducer,

  },
})