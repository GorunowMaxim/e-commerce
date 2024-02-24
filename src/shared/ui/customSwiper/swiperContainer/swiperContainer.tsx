import { ReactNode } from 'react';
interface SwiperContainer {
    headline: string;
    children: ReactNode;
}

const SwiperContainer = ({ headline, children }: SwiperContainer) => {
    return (
        <section className="swiper-section" style={{ paddingTop: 50, paddingBottom: 50 }}>
            <div className="container">
                <h3 className="swiper-section__head" style={{textAlign: "center"}}>{headline}</h3>
                {children}
            </div>
        </section>
    );
};

export default SwiperContainer;


