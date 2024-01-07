import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../ReduxSlices/ProductSlice'
import CategoryReducer from '../ReduxSlices/CategorySlice'



export const store = configureStore({
  reducer: { products : ProductReducer,
    category: CategoryReducer

  },
})