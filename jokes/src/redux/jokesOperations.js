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

      if (isDateToday(date)) {
        const joke = await getStorageItem('joke');
        console.log('today');
        return joke;
      } else {
        const joke = await fetchJoke();

        const newJoke = {
          id: nanoid(),
          text: joke,
          isFavourite: false,
        };

        await setStorageItem('joke', newJoke);

        await Promise.all([
          setStorageItem('date', todaysDate),
          getStorageItem('history').then(history => {
            const newHistory = history ? [{...newJoke}, ...history] : [{...newJoke}];
            return setStorageItem('history', newHistory);
          })
        ]);
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
        ...joke,
        isFavourite: !joke.isFavourite,
      };

      const updatedHistory = jokesHistory.map(historyJoke =>
        joke.id === historyJoke.id ? updatedJoke : historyJoke,
      );
      const currentJoke = joke.id === todayJoke.id ? updatedJoke : todayJoke;

      await setStorageItem('history', updatedHistory);
      await setStorageItem('joke', currentJoke);

      return {updatedHistory, currentJoke};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
