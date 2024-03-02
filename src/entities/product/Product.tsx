import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { startLoading } from "app/store/slices/mainSlice/mainSlice";

import type { ProductData } from "shared/interfaces";

import "./style.scss";

interface ProductDataProps {
    product: ProductData;
    path?: string;
}

const Product = ({ product }: ProductDataProps) => {
    const { id, imageUrl, color, name, price } = product;
    const dispatch = useDispatch();
    return (
        <Link
            onClick={() => dispatch(startLoading())}
            to={`/product/${id}`}
            className="product"
        >
            <div className="product-wrapper">
                <div className="product-image-block">
                    {imageUrl.slice(0, 2).map((img, index) => (
                        <img key={index} className="product-image" src={img} />
                    ))}
                </div>
                <div className="product-info">
                    <p className="product-name">{name}</p>
                    <p className="product-color text">{color}</p>
                    <p className="product-price text">${price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Product;
