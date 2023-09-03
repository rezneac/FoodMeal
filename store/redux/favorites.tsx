import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the type for your initial state
interface FavoritesState {
  ids: string[];
}

const initialState: FavoritesState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        ids: [...state.ids, action.payload],
      };
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        ids: state.ids.filter(id => id !== action.payload),
      };
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
