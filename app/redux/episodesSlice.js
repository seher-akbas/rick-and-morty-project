import { createSlice } from '@reduxjs/toolkit';

const episodesSlice = createSlice({
    name: 'episodes',
    initialState: {
        episodes: [],
        status: 'idle',
    },
    reducers: {
        setEpisodes: (state, action) => {
            state.episodes = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

export const { setEpisodes, setStatus } = episodesSlice.actions;
export default episodesSlice.reducer;
