import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: '',
  blogs: [],
};

const BlogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setCategory:(state,action)=>{
      state.selectedCategory=action.payload;
    }
  },
});

export const { setBlogs,setCategory } =BlogSlice.actions;
export default BlogSlice.reducer;
