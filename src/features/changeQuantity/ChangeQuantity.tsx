import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    decrementQuantity,
    incrementQuantity,
} from "app/store/slices/cartSlice/cartSlice";
import type { CartProductData } from "shared/interfaces";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./styles.scss";

interface CartProductProps {
    cartProduct: CartProductData;
}

const ChangeQuantity = ({ cartProduct }: CartProductProps) => {
    const [localQuantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    return (
        <div className="quantity-block">
            <button
                onClick={() => {
                    if (localQuantity > 1) {
                        setQuantity(localQuantity - 1);
                        dispatch(decrementQuantity(cartProduct));
                    }
                }}
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
                onClick={() => {
                    setQuantity(localQuantity + 1);
                    dispatch(incrementQuantity(cartProduct));
                }}
                className="quantity-block__button"
            >
                <AddIcon fontSize="small" />
            </button>
        </div>
    );
};

export default ChangeQuantity;
