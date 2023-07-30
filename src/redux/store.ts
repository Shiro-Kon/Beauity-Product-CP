import { configureStore } from "@reduxjs/toolkit"
import FavoriteReducer from "./FavoriteReducer"
import SelectedListReducer from "./SelectedListReducer"
import FavoriteCounterReducer from "./FavoriteCounterReducer"





export const store = configureStore({
    reducer: {
        productsFavoriteState: FavoriteReducer,
        productsInFavorite : SelectedListReducer,
        FavoriteCounter : FavoriteCounterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
