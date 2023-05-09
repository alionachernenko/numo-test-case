import {createAsyncThunk} from '@reduxjs/toolkit';
import {isDateToday} from '../utils/date';
import {getItem, setItem} from '../storage/utils';
import {fetchJoke} from '../api/jokesApi';

const todaysDate = new Date();

export const getNewJoke = createAsyncThunk('jokes/getNew', async () => {
  const date = await getItem('date');
  console.log('today', isDateToday(9));

  if (isDateToday(date)) {
    const joke = await getItem('joke');
    return joke;
  } else {
    const joke = await fetchJoke();
    console.log('no');
    console.log(joke);

    const newJoke = {
      text: joke,
      isFavourite: false,
    };

    await setItem('joke', newJoke);
    console.log(newJoke);

    const history = await getItem('history');
    if (history === null) {
      setItem('history', [newJoke]);
    } else {
      const newHistory = [newJoke, ...history];
      setItem('history', newHistory);
    }
    await setItem('date', todaysDate);

    return newJoke;
  }
});

// export const getNewJoke = createAsyncThunk('jokes/getNew', async () => {
//   const date = await getItem('date');
//   console.log('today', isDateToday(9));

//   if (isDateToday(10)) {
//     return await getItem('joke');
//   } else {
//     const joke = await fetchJoke();
//     console.log('new', joke);
//     const newJoke = {
//       text: joke,
//       isFavourite: false,
//     };
//     setItem('joke', newJoke);
//     setItem('date', todaysDate);
//     return newJoke;
//   }
// });

export const getHistory = createAsyncThunk('jokes/getHistory', async () => {
  console.log('hey');
  return await getItem('history');
});
