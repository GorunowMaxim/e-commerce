import type { RenderProductProps } from "shared/interfaces";

import CommonProductsPage from "../commonProductsPage/CommonProductsPage";
import Product from "entities/product/Product";
import ProductSkeleton from "shared/ui/skeletons/productSkeleton/ProductSkeleton";

import "../styles.scss";


const url = "https://65ad2e2cadbd5aa31be04ace.mockapi.io/items-female";

function renderProduct({ appStatus, source }: RenderProductProps) {
    switch (appStatus) {
        case "loading":
            return [...new Array(16)].map((_, index) => (
                <ProductSkeleton key={index} />
            ));
        case "success":
            return source && source.map((product, index) => (
                <Product key={index} product={product} />
            ));
        case "error":
            return (
                <h3 className="error-title">
                    Ooops..., we have some problem, <br />
                    reload page or try later
                </h3>
            );
        default:
            return <></>;
    }
}

const Men = () => {
    return(
        <CommonProductsPage func={renderProduct} url={url} />
    )
};

export default Men;
