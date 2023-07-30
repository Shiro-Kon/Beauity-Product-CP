import { createSlice } from "@reduxjs/toolkit"
import { omit } from "lodash"




type SelectedListReducer  = {
    [id: number]: number
}

const initialState : SelectedListReducer={}

export const SelectedListeSlice = createSlice({
    name: 'AddtoFavorite', 
    initialState, 
    reducers: {
        addProductToFavorite: (state, actoin) => ({
            ...state,
            [actoin.payload.id]:
                (state[actoin.payload.id] || 0) + actoin.payload.status,

        }),
        removeProductFromFavorite: (state, action) => omit(state, action.payload.id),   

    },
})


export const {addProductToFavorite, removeProductFromFavorite} = SelectedListeSlice.actions

export default SelectedListeSlice.reducer