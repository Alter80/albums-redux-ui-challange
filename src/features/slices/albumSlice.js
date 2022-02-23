import { createSlice } from "@reduxjs/toolkit";
import albums from '../../assets/albums.json';

// filter 
const local = albums.filter(album => album.source == 'LOCAL')
const qobuz = albums.filter(album => album.source == 'QOBUZ')

// slices and reducers 
const albumSlice = createSlice({
    name: 'songs',
    initialState: {
        allAlbums: albums,
        localAlbums: local,
        qubuzAlbums: qobuz,
        playlist: [],
        status: 'idle'
    },

    reducers: {
        addToPlaylist: (state, { payload }) => {
            state.playList.push(payload)
        },

    },

});


export const { addToPlaylist } = albumSlice.actions;

export default albumSlice.reducer; 