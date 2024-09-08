import { configureStore } from "@reduxjs/toolkit";
import { APIService } from "./services/APIService";

export const setupStore = () => {
    return configureStore({
        reducer:{
            [APIService.reducerPath]:APIService.reducer
        },
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(APIService.middleware)
    })
}