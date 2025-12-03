import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../asyncActions/fetchPosts';

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  // они не нужны в данном случае вроде как все правильно 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  }
});

export default postsSlice.reducer;
