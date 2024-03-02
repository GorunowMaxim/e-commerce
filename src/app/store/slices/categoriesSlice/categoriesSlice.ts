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
            state.category = action.payload;
        }
    },
});

export const { setCategories } = productsSlice.actions;

export default productsSlice.reducer;