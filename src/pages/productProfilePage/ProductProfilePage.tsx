import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuccess } from "app/store/slices/mainSlice/mainSlice";
import axios from "axios";

import type { ProductData } from "shared/interfaces";
import { RootState } from "app/store/store";

import SwiperContainer from "shared/ui/customSwiper/swiperContainer/swiperContainer";
import CustomSwiper from "shared/ui/customSwiper/CustomSwiper";
import ProductSwiper from "shared/ui/productSwiper/ProductSwiper";
import SingleProductSkeleton from "shared/ui/skeletons/singleProductSkeleton/SingleProductSkeleton";
import ProductTabs from "shared/ui/tabs/productPageTabs/ProductTabs";
import { SwiperSlide } from "swiper/react";
import AddToCart from "features/addToCart/AddToCart";
import ChooseSize from "features/chooseSize/ChooseSize";
import SkeletonProductPageInfo from "shared/ui/skeletons/skeletonProductPageInfo/SkeletonProductPageInfo";

import "./styles.scss";

const ProductProfilePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { appStatus } = useSelector(
        (state: RootState) => state.app.configState
    );
    const [product, setProduct] = useState<ProductData | null>(null);

    useEffect(() => {
        const fetchProductData = async () => {
            await axios
                .get(`https://65c52bc7dae2304e92e4009d.mockapi.io/items/${id}`)
                .then((response) => {
                    setProduct(response.data);
                    dispatch(getSuccess());
                });
        };
        fetchProductData();
    }, [id]);

    return (
        <main className="product-main">
            <div className="container">
                <div className="product-wrapper">
                    <div className="product-box">
                        <section className="product-swiper-wrapper">
                            {appStatus === "success" ? (
                                <ProductSwiper>
                                    {product?.imageUrl.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                className="product-swiper__img"
                                                src={img}
                                                alt=""
                                            />
                                        </SwiperSlide>
                                    ))}
                                </ProductSwiper>
                            ) : (
                                <SingleProductSkeleton />
                            )}
                        </section>
                        <section className="product-properties">
                            {appStatus === "success" && product && id && (
                                <>
                                    <div className="product-properties__block">
                                        <h5 className="product-properties__headline">
                                            {product?.name}
                                        </h5>
                                        <p className="product-properties__color">
                                            {product?.color}
                                        </p>
                                        <p className="product-properties__price">
                                            ${product?.price}
                                        </p>
                                    </div>
                                    <ChooseSize product={product} />
                                    <AddToCart />
                                    <div className="product-properties__data">
                                        <ProductTabs
                                            description={product?.description}
                                        />
                                    </div>
                                </>
                            )}
                            {appStatus === "loading" && (
                                <SkeletonProductPageInfo />
                            )}
                        </section>
                    </div>
                    <SwiperContainer headline={"recently viewed"}>
                        <CustomSwiper
                            url={
                                "https://65bbca8152189914b5bd1262.mockapi.io/swiper-items?page=3&limit=8"
                            }
                            delay={2500}
                            direction={false}
                        />
                    </SwiperContainer>
                </div>
            </div>
        </main>
    );
};

export default ProductProfilePage;
