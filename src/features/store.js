import { configureStore }from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import AllVideoReducer from "./AllVideo";

export const store=configureStore({
    reducer:{
        video:videoReducer,
        AllVideo:AllVideoReducer
    }
})