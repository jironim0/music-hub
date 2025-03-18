"use client";

import { Media } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  favorite: Media[];
}

const initialState: FavoriteState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Media>) => {
      if (!state.favorite.some((item) => item.id === action.payload.id)) {
        state.favorite.push(action.payload);
        localStorage.setItem("favorite", JSON.stringify(state.favorite));
      }
    },
    setFavorites: (state, action: PayloadAction<Media[]>) => {
      state.favorite = action.payload;
      localStorage.setItem("favorite", JSON.stringify(action.payload));
    },
  },
});

export const { addFavorite, setFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;