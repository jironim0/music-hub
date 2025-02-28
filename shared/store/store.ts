import { configureStore } from "@reduxjs/toolkit"
import mediaReducer from "./features/mediaSlice"


export const makeStore = () => {
    return configureStore({
        reducer: {
            items: mediaReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
    })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]