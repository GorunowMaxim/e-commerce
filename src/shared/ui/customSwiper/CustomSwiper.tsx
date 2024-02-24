import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store/store";
import { useState, useEffect } from "react";
import axios from "axios";

import type { ProductData } from "shared/interfaces";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Product from "entities/product/Product";
import ProductSkeleton from "../skeletons/productSkeleton/ProductSkeleton";
import { getSuccess, hasError } from "app/store/slices/mainSlice/mainSlice";

interface CustomSwiperProps {
    url: string;
    delay: number;
    direction: boolean;
}

const CustomSwiper = ({ url, delay, direction }: CustomSwiperProps) => {
    const { appStatus } = useSelector(
        (state: RootState) => state.app.configState
    );
    const dispatch = useDispatch();
    const [productsData, setProductsData] = useState<ProductData[]>([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                await axios.get(url).then((response) => {
                    setProductsData(response.data);
                    dispatch(getSuccess());
                });
            };
            fetchData();
        } catch (e) {
            console.log(e);
            dispatch(hasError());
        }
    }, []);

    return (
        <div
            className="swiper-container"
            style={{ paddingTop: 50, paddingBottom: 50 }}
        >
            <Swiper
                spaceBetween={75}
                loop={true}
                simulateTouch={true}
                slidesPerView={4}
                speed={1800}
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: direction,
                }}
                modules={[Autoplay]}
                className="swiper-products"
            >
                {appStatus === "success" &&
                    productsData.map((product, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Product product={product} key={index} />
                            </SwiperSlide>
                        );
                    })}
                {appStatus === "loading" ||
                    (appStatus === "error" &&
                        [...new Array(8)].map((_el, index) => (
                            <SwiperSlide key={index}>
                                <ProductSkeleton key={index} />
                            </SwiperSlide>
                        )))}
            </Swiper>
        </div>
    );
};

export default CustomSwiper;
