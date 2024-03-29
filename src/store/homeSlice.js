import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {},
    genres: {}
  },
  reducers: {
    getApiConfiguration: (state,actions) => {
     state.url = actions.payload;
    },
    getGenres: (state,actions) => {
      state.genres = actions.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration,getGenres } = homeSlice.actions

export default homeSlice.reducer