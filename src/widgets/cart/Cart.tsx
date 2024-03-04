import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { changeOverlayState } from "app/store/slices/overlaySlice/overlaySlice";
import { RootState } from "app/store/store";
import CartContainer from "entities/cartContainer/CartContainer";
import cart from "/public/images/cart.svg";
import Overlay from "shared/ui/overlay/Overlay";

import "./styles.scss";

const Cart = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState(false);
    const { products } = useSelector((state: RootState) => state.cart);
    const [overlayState, setOverlayState] = useState(false);

    const handleClickCartButton = () => {
        dispatch(changeOverlayState());
        setOverlayState(true);
        setState(true);
    };

    return (
        <>
            <Badge badgeContent={products.length} color="primary">
                <button
                    onClick={handleClickCartButton}
                    className="header-icons__button"
                >
                    <img src={cart} alt="" />
                </button>
            </Badge>
            <CartContainer
                state={state}
                setState={setState}
                setOverlayState={setOverlayState}
            />
            {overlayState && <Overlay />}
        </>
    );
};

export default Cart;
