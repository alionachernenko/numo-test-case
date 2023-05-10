import {createAsyncThunk, nanoid} from '@reduxjs/toolkit';
import {isDateToday} from '../utils/date';
import {getStorageItem, setStorageItem} from '../storage/utils';
import {fetchJoke} from '../api/jokesApi';

const todaysDate = new Date();

export const getNewJoke = createAsyncThunk(
  'jokes/getNew',
  async (_, thunkAPI) => {
    try {
      const date = await getStorageItem('date');

      if (isDateToday(10)) {
        const joke = await getStorageItem('joke');
        return joke;
      } else {
        const joke = await fetchJoke();

        const newJoke = {
          id: nanoid(),
          text: joke,
          isFavourite: false,
        };

        await setStorageItem('joke', newJoke);

        const history = await getStorageItem('history');

        if (!history || history.length === 0) {
          await setStorageItem('history', [newJoke]);
        } else if (history) {
          const newHistory = [newJoke, ...history];
          await setStorageItem('history', newHistory);
        }
        await setStorageItem('date', todaysDate);
        return newJoke;
      }
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getHistory = createAsyncThunk(
  'jokes/getHistory',
  async (_, thunkAPI) => {
    try {
      return await getStorageItem('history');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const toggleLike = createAsyncThunk(
  'jokes/toggleLike',
  async (joke, thunkAPI) => {
    try {
      const {todayJoke, jokesHistory} = thunkAPI.getState().jokes;

      const updatedJoke = {
        text: joke.text,
        isFavourite: !joke.isFavourite,
      };

      const updatedHistory = jokesHistory.map(historyJoke =>
        joke.id === historyJoke.id ? updatedJoke : historyJoke,
      );

      await setStorageItem('history', updatedHistory);
      if (joke.text === todayJoke.text) await setStorageItem('joke', updatedJoke);

      return {updatedHistory, updatedJoke};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
