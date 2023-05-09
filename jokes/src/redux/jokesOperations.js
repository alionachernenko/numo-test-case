import {createAsyncThunk, nanoid} from '@reduxjs/toolkit';
import {isDateToday} from '../utils/date';
import {getItem, setItem} from '../storage/utils';
import {fetchJoke} from '../api/jokesApi';

const todaysDate = new Date();

export const getNewJoke = createAsyncThunk(
  'jokes/getNew',
  async (_, thunkAPI) => {
    try {
      const date = await getItem('date');

      if (isDateToday(date)) {
        const joke = await getItem('joke');
        return joke;
      } else {
        const joke = await fetchJoke();

        const newJoke = {
          id: nanoid(),
          text: joke,
          isFavourite: false,
        };

        const history = await getItem('history');

        if (!history || history.length === 0) {
          await setItem('history', newJoke);
        } else {
          const newHistory = [newJoke, ...history];
          await setItem('history', newHistory);
        }
        await setItem('date', todaysDate);

        return newJoke;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getHistory = createAsyncThunk(
  'jokes/getHistory',
  async (_, thunkAPI) => {
    try {
      return await getItem('history');
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

      await setItem('history', updatedHistory);
      if (joke.text === todayJoke.text) await setItem('joke', updatedJoke);

      return {updatedHistory, updatedJoke};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
