import { ReactNode, useState } from "react";

import { Swiper } from "swiper/react";
import SwiperCore from 'swiper';


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper/modules";

const ProductSwiper = ({ children }: { children: ReactNode }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    return (
        <>
            <Swiper
                className="product-swiper product-swiper_main"
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
            >
                {children}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                className="product-swiper product-swiper_sub"
                spaceBetween={10}
                loop={true}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
            >
                {children}
            </Swiper>
        </>
    );
};

export default ProductSwiper;
