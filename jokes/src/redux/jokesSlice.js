import {createSlice} from '@reduxjs/toolkit';
import {getHistory, getNewJoke} from './jokesOperations';

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
      console.log('pay');
      state.todayJoke = payload;
    });
    builder.addCase(getHistory.fulfilled, (state, {payload}) => {
      state.jokesHistory = payload;
    });
  },
});

export default jokesSlice.reducer;
