import { createSlice } from "@reduxjs/toolkit"



type FavoriteState = {
    [id: number]: boolean
}

const initialState: FavoriteState = {}

export const FavoriteSlice = createSlice({
    name: 'FAVORITE',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => ({
            ...state,
            [action.payload]: ! state[action.payload],
        }),
    },
})

export const {toggleFavorite} = FavoriteSlice.actions

export default FavoriteSlice.reducer