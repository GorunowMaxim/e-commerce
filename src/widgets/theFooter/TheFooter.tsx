import FooterSubscribe from "./footerSubscribe/FooterSubscribe";
import FooterNavigation from "./footerNavigation/FooterNavigation";

import "./styles.scss";

const TheFooter = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <FooterSubscribe />
                <FooterNavigation />
            </div>
        </footer>
    );
};

export default TheFooter;
