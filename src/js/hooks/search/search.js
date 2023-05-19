import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  searchInput: '',
  filteredData: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setSearchInput, setFilteredData } = searchSlice.actions;

export default searchSlice.reducer;
