import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    nguoiDung: null,
    khoaHoc: null,
    khoaHocDaDangKy: null
}

let adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers:{
        setData: (state,action) => { 
            state.nguoiDung = action.payload
         },
        setKhoaHoc: (state,action) => { 
            state.khoaHoc = action.payload
         },
        setKhoaHocDaDangKy: (state,action) => { 
            state.khoaHoc = action.payload
        },
    }
})

export let { setData , setKhoaHoc, setKhoaHocDaDangKy } = adminSlice.actions;
export default adminSlice.reducer