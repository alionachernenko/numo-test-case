export const selectJoke = state => state.jokes.todayJoke
export const selectJokesHistory = state => state.jokes.jokesHistory
export const selectIsLoading = state => state.jokes.isLoading
export const selectError = state => state.jokes.error