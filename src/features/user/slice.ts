import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { RequestState } from 'src/common/types';
import { User } from './types';

interface UsersState {
  entities: User[];
  loading: RequestState;
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return (await response.json()) as User[];
});

const initialState = {
  entities: [],
  loading: 'idle',
} as UsersState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = 'pending';
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.loading = 'succeeded';
      state.entities = payload;
    });
  },
});

/* Selectors */
export const selectUsers = (state: RootState) => state.user.entities;
export const selectIsFetchingUser = (state: RootState) => state.user.loading === 'pending';

export default userSlice.reducer;
