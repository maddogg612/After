/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const plan = createSlice({
  name: 'plan',
  initialState: {
    rite: '',
    funeralHome: '',
    funeralBeforeRites: false,
    funeralLocation: '',
    graveSideService: false,
    graveSideLocation: '',
    memorialService: false,
    memorialLocation: '',
    planComplete: false,
  },
  reducers: {
    chooseRitesReducer: (state, action) => {
      console.log('action.payload in Rites reducer', action.payload);
      state.rite = action.payload;
    },
    funeralHomeReducer: (state, action) => {
      console.log('action.payload in funeralHomeReducer', action.payload);
      state.funeralHome = action.payload;
    },
    funeralLocationReducer: (state, action) => {
      console.log('action.payload in funeralLocationReducer', action.payload);
      state.funeralBeforeRites = true;
      state.funeralLocation = action.payload;
    },
    graveSideServiceReducer: (state, action) => {
      console.log('action.payload in graveSideServiceReducer', action.payload);
    },
    graveSideLocationReducer: (state, action) => {
      console.log('action.payload in graveSideLocationReducer', action.payload);
      state.graveSideService = true;
      state.graveSideLocation = action.payload;
    },
    memorialServiceReducer: (state, action) => {
      console.log('action.payload in memorialServiceReducer', action.payload);
    },
    memorialLocationReducer: (state, action) => {
      console.log('action.payload in memorialLocationReducer', action.payload);
      state.memorialService = true;
      state.memorialLocation = action.payload;
    },
    updateRitesPlanSummaryReducer: (state, action) => {
      state.rite = action.payload.rite;
      state.funeralHome = action.payload.funeralHome;
      state.funeralBeforeRites = action.payload.funeralBeforeRites;
      state.funeralLocation = action.payload.funeralLocation;
      state.graveSideService = action.payload.graveSideService;
      state.graveSideLocation = action.payload.graveSideLocation;
      state.memorialService = action.payload.memorialService;
      state.memorialLocation = action.payload.memorialLocation;
    },
    planCompleteReducer: (state, action) => {
      state.planComplete = true;
    },
  },
});

export const {
  chooseRitesReducer,
  funeralHomeReducer,
  funeralLocationReducer,
  graveSideServiceReducer,
  graveSideLocationReducer,
  memorialServiceReducer,
  memorialLocationReducer,
  updateRitesPlanSummaryReducer,
  planCompleteReducer,
} = plan.actions;

export default plan.reducer;

export const planState = (state) => state;
