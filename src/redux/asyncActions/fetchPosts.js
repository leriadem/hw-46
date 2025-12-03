import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Fetch failed');
    }
  }
);
