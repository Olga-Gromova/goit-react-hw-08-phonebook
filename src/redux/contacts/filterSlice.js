// import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = '';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filterInitialState,
//   reducers: {
//     setFilter(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterValue(state, action) {
      return (state = action.payload);
    },
  },
  extraReducers: builder =>
    builder.addCase(logOut.fulfilled, state => (state = '')),
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
