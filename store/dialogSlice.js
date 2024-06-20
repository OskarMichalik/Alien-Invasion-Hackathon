"use client";
import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "dialog",
  initialState: { dialog: [] },
  reducers: {
    ADD_CITIES_BY_ARRAY(state, action) {
      const array = action.payload;
      state.cities = array;
    },
    ADD_POPULARFLIGHTS_BY_ARRAY(state, action) {
      const array = action.payload;
      state.popularFlights = array;
    },
    ADD_FLIGHTS_BY_ARRAY(state, action) {
      const array = action.payload;
      state.flights = array;
    },
  },
});

export const flightsActions = flightsSlice.actions;
export default flightsSlice.reducer;
