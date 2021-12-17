import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: 'izmir',
    currentDescription: '',
    currentIcon: '',
    currentTemperature: '',
    currentWind: '',
    currentHumidity: '',
    currentPressure: '',
  },
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeCurrentDescription: (state, action) => {
      state.currentDescription = action.payload; 
    },
    changeCurrentIcon: (state, action) => {
      state.currentIcon = action.payload;
    },
    changeCurrentTemperature: (state, action) => {
      state.currentTemperature = action.payload;
    },
    changeCurrentWind: (state, action) => {
      state.currentWind = action.payload;
    },
    changeCurrentHumidity: (state, action) => {
      state.currentHumidity = action.payload;
    },
    changeCurrentPressure: (state, action) => {
      state.currentPressure = action.payload;
    },
  }
})

export const { 
  changeCity,
  changeCurrentDescription,
  changeCurrentIcon,
  changeCurrentTemperature,
  changeCurrentWind,
  changeCurrentHumidity,
  changeCurrentPressure,
} = weatherSlice.actions;

export const city = (state) => state.weather.city;
export const currentDescription = (state) => state.weather.currentDescription;
export const currentIcon = (state) => state.weather.currentIcon;
export const currentTemperature = (state) => state.weather.currentTemperature;
export const currentWind = (state) => state.weather.currentWind;
export const currentHumidity = (state) => state.weather.currentHumidity;
export const currentPressure = (state) => state.weather.currentPressure;

export default weatherSlice.reducer;