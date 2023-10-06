import {configureStore} from "@reduxjs/toolkit"
import articlesSlice from "./articlesSlice.tsx";

const store = configureStore({
    reducer:{
       articles:articlesSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store