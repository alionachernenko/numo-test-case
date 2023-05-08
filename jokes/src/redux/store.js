import { configureStore } from '@reduxjs/toolkit';
import jokesSlice from './jokesSlice';

export const store = configureStore({
    reducer: {
        jokes: jokesSlice
    }
});

