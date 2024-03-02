import SwiperContainer from "shared/ui/customSwiper/swiperContainer/swiperContainer";
import CustomSwiper from "shared/ui/customSwiper/CustomSwiper";
import CategoriesSection from "entities/categories/CategoriesSection";
import SupportCard from "shared/ui/supportCard/SupportCard";

import heroVideo from "/public/video/heroVideo.mp4";
import HelpIcon from "@mui/icons-material/Help";
import SmsIcon from "@mui/icons-material/Sms";
import CheckroomIcon from "@mui/icons-material/Checkroom";

import "./styles.scss";

const Home: React.FC = () => (
    <main className="main">
        <section className="hero">
            <video src={heroVideo} autoPlay loop muted></video>
        </section>
        <SwiperContainer headline={"women sale"}>
            <CustomSwiper
                url={
                    "https://65bbca8152189914b5bd1262.mockapi.io/swiper-items?page=1&limit=8"
                }
                delay={2500}
                direction={true}
            />
            <CustomSwiper
                url={
                    "https://65bbca8152189914b5bd1262.mockapi.io/swiper-items?page=2&limit=8"
                }
                delay={2500}
                direction={false}
            />
        </SwiperContainer>
        <CategoriesSection />
        <SwiperContainer headline={"man sale"}>
            <CustomSwiper
                url={
                    "https://65bbca8152189914b5bd1262.mockapi.io/swiper-items?page=3&limit=8"
                }
                delay={2500}
                direction={true}
            />
            <CustomSwiper
                url={
                    "https://65bbca8152189914b5bd1262.mockapi.io/swiper-items?page=4&limit=8"
                }
                delay={2500}
                direction={false}
            />
        </SwiperContainer>
        <section className="support">
            <div className="container">
                <div className="support-wrapper">
                    <SupportCard
                        icon={<CheckroomIcon />}
                        headline={"How to make an order"}
                        text={"Detailed instructions for new clients"}
                    />
                    <SupportCard
                        icon={<HelpIcon />}
                        headline={"Questions and answers"}
                        text={"All about shipping, returns and duties"}
                    />
                    <SupportCard
                        icon={<SmsIcon />}
                        headline={"Need help?"}
                        text={"Contact our customer service"}
                    />
                </div>
            </div>
        </section>
    </main>
);

export default Home;
