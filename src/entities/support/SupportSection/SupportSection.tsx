import { ReactNode } from "react";

import './styles.scss'

interface SupportSection {
    children: ReactNode;
}

const SupportSection = ({ children }: SupportSection) => {
    return (
        <section className="support">
            <div className="container">
                <div className="support-wrapper">{children}</div>
            </div>
        </section>
    );
};

export default SupportSection;
