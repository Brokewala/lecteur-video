import { createSlice } from "@reduxjs/toolkit";

const initialState={};

const videoSlice=createSlice({
    name:"video",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state={...action.payload};
            return state;
        },
        updateVideo:(state,action)=>{
            state={...action.payload};
            return state;
        }
    }
});

export const getVideoAll=state=>state.video;

export const {addUser,updateVideo }=videoSlice.actions

export default videoSlice.reducer;