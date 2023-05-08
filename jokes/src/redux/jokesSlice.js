import {createSlice} from '@reduxjs/toolkit';
import {getNewJoke} from './jokesOperations';

const initialState = {
  todayJoke: {
    text: '',
    isFavourite: false,
  },
  jokesHistory: [],
};

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  extraReducers: builder => {
    builder.addCase(getNewJoke.fulfilled, (state, {payload}) => {
      state.todayJoke = payload;
    });
  },
});

export default jokesSlice.reducer;
