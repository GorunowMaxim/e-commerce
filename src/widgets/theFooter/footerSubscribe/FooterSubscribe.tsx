import { Link } from "react-router-dom";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import SubscribeForm from "features/subscribeForm/SubscribeForm";


const footerLinks: { [index: string]: JSX.Element } = {
    twitter: <TwitterIcon />,
    inst: <InstagramIcon />,
    face: <FacebookIcon />,
};

const FooterSubscribe = () => {
    return (
        <section className="footer-subscribe">
            <div className="container">
                <div className="footer-subscribe__wrapper">
                    <div className="footer-subscribe__info">
                        <h4 className="footer-subscribe__info-headline">
                            SIGN UP TO THE MoonSoon MAILING LIST
                        </h4>
                        <p className="footer-subscribe__info-text">
                            Sign up for exclusive early sale access and
                            <br />
                            tailored new arrivals
                        </p>
                    </div>
                    <div className="footer-subscribe__connect">
                        <SubscribeForm />
                        <div className="footer-subscribe__socials">
                            {Object.keys(footerLinks).map((link, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to="#"
                                        className="footer-subscribe__socials-link"
                                    >
                                        {footerLinks[link]}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterSubscribe;
