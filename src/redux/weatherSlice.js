import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: 'Istanbul',
  },
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  }
})

export const { changeCity } = weatherSlice.actions;
export const city = (state) => state.weather.city;
export default weatherSlice.reducer;