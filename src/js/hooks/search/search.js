import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  searchInput: '',
  filteredData: [],
  filters: {
    wifi: false,
    breakfast: false,
    parking: false,
    pets: false,
    country: '',
    continent: '',
    guests: 0,
  },
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
      },
  },
});

export const { setSearchInput, setFilters } = searchSlice.actions;

export default searchSlice.reducer;