import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    nguoiDung: null
}

let adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers:{
        setData: (state,action) => { 
            state.nguoiDung = action.payload
         },
    }
})

export let { setData } = adminSlice.actions;
export default adminSlice.reducer