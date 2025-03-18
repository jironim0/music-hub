import { configureStore } from "@reduxjs/toolkit"
import mediaReducer from "./features/mediaSlice"
import userReducer from "./features/userSlice"
import favoriteReducer from "./features/favoriteSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            items: mediaReducer,
            user: userReducer,
            favorite: favoriteReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
    })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]