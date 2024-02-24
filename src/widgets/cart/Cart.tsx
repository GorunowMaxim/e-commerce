import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";

import CartContainer from "entities/cartContainer/CartContainer";
import cart from "/public/images/cart.svg";
import Overlay from "shared/ui/overlay/Overlay";
import { Badge } from "@mui/material";

import { RootState } from "app/store/store";

import "./styles.scss";



const Cart = () => {
    const [state, setState] = useState(false);
    const { products } = useSelector((state: RootState) => state.cart);
    const [overlayState, setOverlayState] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            <Badge badgeContent={products.length} color="primary">
                <button
                    onClick={() => {
                        dispatch(changeOverlayState())
                        setOverlayState(true);
                        setState(true);
                    }}
                    className="header-icons__button"
                >
                    <img src={cart} alt="" />
                </button>
            </Badge>
            <CartContainer state={state} setState={setState} setOverlayState={setOverlayState}/>
            {overlayState && <Overlay />}
        </>
    );
};

export default Cart;
