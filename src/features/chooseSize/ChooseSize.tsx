import { useDispatch } from "react-redux";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import { MouseEvent, useState } from "react";

import { setCurrentCartProduct } from "app/store/slices/cartSlice/cartSlice";
import { ProductData } from "shared/interfaces";

import "./styles.scss";

interface ChooseSizeProps {
    product: ProductData;
}

const ChooseSize = ({ product }: ChooseSizeProps) => {
    const dispatch = useDispatch();
    const [alignment, setAlignment] = useState("");
    const { id, imageUrl, name, color, price, sizes } = product;
    const productConf = {
        id,
        name,
        image: imageUrl[0],
        color,
        price,
        quantity: 1,
    };

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        dispatch(
            setCurrentCartProduct({
                ...productConf,
                size: e.currentTarget.id,
            })
        );
    };

    const handleChange = (
        _event: MouseEvent<HTMLElement>,
        newAlignment: string
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            className="sizes-block"
            sx={{
                gridTemplateColumns: `repeat(${
                    sizes.length > 4 ? 4 : sizes?.length
                }, 1fr)`,
            }}
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            {sizes?.map((size, index) => {
                return (
                    <ToggleButton
                        onClick={handleClick}
                        className="sizes-button"
                        key={index}
                        value={size}
                        id={size}
                    >
                        {size}
                    </ToggleButton>
                );
            })}
        </ToggleButtonGroup>
    );
};

export default ChooseSize;
