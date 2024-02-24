import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
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

    const handleChange = (
        _event: React.MouseEvent<HTMLElement>,
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
                        onClick={(e) => {
                            dispatch(
                                setCurrentCartProduct({
                                    id,
                                    name,
                                    image: imageUrl[0],
                                    color,
                                    price,
                                    size: e.currentTarget.id,
                                    quantity: 1,
                                })
                            );
                        }}
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
