import FooterSubscribe from "./footerSubscribe/FooterSubscribe";
import FooterNavigation from "./footerNavigation/FooterNavigation";

import "./styles.scss";
import FooterAccordion from "./footerAccordion/FooterAccordion";

const TheFooter = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <FooterSubscribe />
                <FooterNavigation />
                <FooterAccordion />
            </div>
        </footer>
    );
};

export default TheFooter;
