import { Media } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface MediaState {
    media: Media[];
    playing: boolean;
    stop: () => void
}

const initialState: MediaState = {
    media: [],
    playing: false,
    stop: () => {}
};

const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        addMedia: (state, action: PayloadAction<Media>) => {
            state.media.length = 0;
            state.media = [action.payload];
        },
        setStop: (state, action: PayloadAction<() => void>) => {
            state.stop = action.payload
        },
        setPlaying: (state, action: PayloadAction<boolean>) => {
            state.playing = action.payload;
        },
    },
})


export const { addMedia, setPlaying, setStop } = mediaSlice.actions
export default mediaSlice.reducer
