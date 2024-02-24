import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartProductData } from "shared/interfaces";

interface InitialCartState {
    products: CartProductData[];
    currentCartProduct: CartProductData | null;
}

const initialState: InitialCartState = {
    products: [],
    currentCartProduct: null,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCurrentCartProduct(state, action: PayloadAction<CartProductData>) {
            state.currentCartProduct = action.payload;
        },
        addToCart(state) {
            if(state.currentCartProduct) state.products.push(state.currentCartProduct);
        },
        removeItem(state, action: PayloadAction<CartProductData>) {
            state.products = state.products.filter(
                (product) =>
                    product?.size !== action.payload.size ||
                    product?.id !== action.payload.id
            );
        },
        incrementQuantity(state, action: PayloadAction<CartProductData>) {
            state.products.map((el) => {
                if (
                    el.id === action.payload.id &&
                    el.size === action.payload.size
                ) {
                    return (el.quantity += 1);
                }
            });
        },
        decrementQuantity(state, action: PayloadAction<CartProductData>) {
            state.products.map((el) => {
                if (
                    el.id === action.payload.id &&
                    el.size === action.payload.size
                ) {
                    return (el.quantity -= 1);
                }
            });
        },
    },
});

export const { setCurrentCartProduct, addToCart, removeItem, incrementQuantity, decrementQuantity } =
    cartSlice.actions;

export default cartSlice.reducer;
