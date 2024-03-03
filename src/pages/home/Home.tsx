import SwiperContainer from "shared/ui/customSwiper/swiperContainer/swiperContainer";
import CustomSwiper from "shared/ui/customSwiper/CustomSwiper";
import CategoriesSection from "entities/categories/CategoriesSection";
import SupportCard from "shared/ui/supportCard/SupportCard";

import heroVideo from "/public/video/heroVideo.mp4";
import HelpIcon from "@mui/icons-material/Help";
import SmsIcon from "@mui/icons-material/Sms";
import CheckroomIcon from "@mui/icons-material/Checkroom";

import "./styles.scss";

interface SupportData {
    [name: string]: { icon: JSX.Element; headline: string; text: string };
}

const supportData: SupportData = {
    check: {
        icon: <CheckroomIcon />,
        headline: "How to make an order",
        text: "Detailed instructions for new clients",
    },
    help: {
        icon: <HelpIcon />,
        headline: "Questions and answers",
        text: "All about shipping, returns and duties",
    },
    sms: {
        icon: <SmsIcon />,
        headline: "Need help?",
        text: "Contact our customer service",
    },
};

const Home: React.FC = () => (
    <main className="main">
        <section className="hero">
            <video src={heroVideo} autoPlay loop muted></video>
        </section>
        <SwiperContainer headline={"women sale"}>
            {[...Array(2)].map((_swiper, index) => {
                const direction = index % 2 === 0 ? false : true;
                return (
                    <CustomSwiper
                        key={index}
                        url={`https://65c52bc7dae2304e92e4009d.mockapi.io/items?page=${
                            index + 1
                        }&limit=8`}
                        delay={2500}
                        direction={direction}
                    />
                );
            })}
        </SwiperContainer>
        <CategoriesSection />
        <SwiperContainer headline={"man sale"}>
            {[...Array(2)].map((_swiper, index) => {
                const direction = index % 2 === 0 ? false : true;
                return (
                    <CustomSwiper
                        key={index}
                        url={`https://65c52bc7dae2304e92e4009d.mockapi.io/items?page=${
                            index + 3
                        }&limit=8`}
                        delay={2500}
                        direction={direction}
                    />
                );
            })}
        </SwiperContainer>
        <section className="support">
            <div className="container">
                <div className="support-wrapper">
                    {Object.keys(supportData).map((key, index) => {
                        const supportCardData = supportData[key];
                        return (
                            <SupportCard
                                key={index}
                                icon={supportCardData.icon}
                                headline={supportCardData.headline}
                                text={supportCardData.text}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    </main>
);

export default Home;
