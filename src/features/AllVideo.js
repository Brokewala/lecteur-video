const { createSlice } = require("@reduxjs/toolkit");

const initialState={};

const AllVideoSlice=createSlice({
    name:"AllVideo",
    initialState,
    reducers:{
        addAllUserSlice:(state,action)=>{
            state=action.payload;
            return state;
        }
    }
});

export const getAllUserSlice=state=>state.AllVideo;

export const { addAllUserSlice }=AllVideoSlice.actions

export default AllVideoSlice.reducer;