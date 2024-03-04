import FooterSubscribe from "./footerSubscribe/FooterSubscribe";
import FooterNavigation from "./footerNavigation/FooterNavigation";
import FooterAccordion from "./footerAccordion/FooterAccordion";

import "./styles.scss";


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
