import { ReactNode } from "react";

import './styles.scss'

const ProductsContainer = ({ children }: { children: ReactNode }) => {
    return (
        <main className="products-main">
            <div className="container">
                <section className="products-section">
                    <div className="products-wrapper grid">{children}</div>
                </section>
            </div>
        </main>
    );
};

export default ProductsContainer;
