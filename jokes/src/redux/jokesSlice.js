import {createSlice} from '@reduxjs/toolkit';
import {
  getHistory,
  getNewJoke,
  toggleLike,
} from './jokesOperations';

const initialState = {
  todayJoke: {
    id: null,
    text: '',
    isFavourite: false,
  },
  jokesHistory: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getNewJoke.pending, handlePending)
      .addCase(getNewJoke.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.todayJoke = payload;
      })
      .addCase(getNewJoke.rejected, handleRejected)

      .addCase(getHistory.pending, handlePending)
      .addCase(getHistory.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.jokesHistory = payload;
      })
      .addCase(getHistory.rejected, handleRejected)

      .addCase(toggleLike.pending, handleRejected)
      .addCase(toggleLike.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;
        state.jokesHistory = payload.updatedHistory;
        state.todayJoke = payload.currentJoke;
      })
      .addCase(toggleLike.rejected, handleRejected)
  },
});

export default jokesSlice.reducer;
