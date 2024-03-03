import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useState } from "react";

import {
    decrementQuantity,
    incrementQuantity,
} from "app/store/slices/cartSlice/cartSlice";
import type { CartProductData } from "shared/interfaces";

import "./styles.scss";

interface CartProductProps {
    cartProduct: CartProductData;
}

const ChangeQuantity = ({ cartProduct }: CartProductProps) => {
    const [localQuantity, setQuantity] = useState(1);

    const handleDecrementQuantity = () => {
        if (localQuantity > 1) {
            setQuantity(localQuantity - 1);
            dispatch(decrementQuantity(cartProduct));
        }
    };

    const handleIncrementQuantity = () => {
        setQuantity(localQuantity + 1);
        dispatch(incrementQuantity(cartProduct));
    };

    const dispatch = useDispatch();
    return (
        <div className="quantity-block">
            <button
                onClick={handleDecrementQuantity}
                className="quantity-block__button"
            >
                <RemoveIcon fontSize="small" />
            </button>
            <input
                type="text"
                className="quantity-block__input"
                readOnly
                value={localQuantity}
            />
            <button
                onClick={handleIncrementQuantity}
                className="quantity-block__button"
            >
                <AddIcon fontSize="small" />
            </button>
        </div>
    );
};

export default ChangeQuantity;
