import {createAsyncThunk} from '@reduxjs/toolkit';
import {isDateToday} from '../utils/date';
import {setTodaysJoke} from './jokesSlice';
import {getItem, setItem} from '../storage/utils';
import {fetchJoke} from '../api/jokesApi';

const todaysDate = new Date();

export const getNewJoke = createAsyncThunk('jokes/getNew', async () => {
  const date = await getItem('date');
  console.log('today', isDateToday(date));

  if (isDateToday(date)) {
    return await getItem('joke');
  } else {
    const joke = await fetchJoke();
    console.log('new', joke);
    const newJoke = {
      text: joke,
      isFavourite: false,
    };
    setItem('joke', newJoke);
    setItem('date', todaysDate);
    return newJoke;
  }
});
