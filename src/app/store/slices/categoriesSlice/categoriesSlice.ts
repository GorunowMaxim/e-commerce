import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { DataSort } from "shared/interfaces";

const initialState: DataSort = {
    category: 'default',
};

export const productsSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<string>) {
            console.log(action.payload)
            state.category = action.payload;
            console.log(state.category)
        }
    },
});

export const { setCategories } = productsSlice.actions;

export default productsSlice.reducer;