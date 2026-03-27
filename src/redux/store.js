import { configureStore } from '@reduxjs/toolkit'
import AnimalReducer from "./CountAnimalsSlice"

export const Zoo = configureStore({
  reducer: {
     cart: AnimalReducer

  },
});