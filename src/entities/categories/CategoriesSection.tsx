import CustomLink from "shared/ui/customLink/CustomLink";
import backVideo from "/public/video/backVideo.mp4";
import { motion } from "framer-motion";

import "./styles.scss";


const CategoriesSection = () => {
    return (
        <motion.section viewport={{ once: true }} className="categories">
            <div className="container">
                <div className="categories-wrapper">
                    <div className="grid-container">
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ x: -250, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 0.6 }}
                            className="grid-item"
                        >
                            <video
                                className="grid-item__video"
                                src={backVideo}
                                autoPlay
                                muted
                                loop
                            ></video>
                            <div className="grid-item__info-block">
                                <h4 className="grid-item__head">
                                    New men collection
                                </h4>
                                <CustomLink text={"shop now"} />
                            </div>
                        </motion.div>
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ x: 250, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                ease: "easeOut",
                                duration: 0.3,
                                delay: 0.3,
                            }}
                            className="grid-item"
                        >
                            <div className="grid-item__info-block grid-item__info-block_down">
                                <h4 className="grid-item__head ">
                                    explore the best <br /> of furniture
                                </h4>
                                <CustomLink text={"shop now"} />
                            </div>
                        </motion.div>
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ y: 250, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                ease: "easeOut",
                                duration: 0.35,
                                delay: 0.55,
                            }}
                            className="grid-item"
                        >
                            <div className="grid-item__info-block grid-item__info-block_right-end">
                                <h4 className="grid-item__head grid-item__head_black">
                                    Try our looks
                                </h4>
                                <CustomLink text={"shop now"} />
                            </div>
                        </motion.div>
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ x: -250, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                ease: "easeOut",
                                duration: 0.35,
                                delay: 0.35,
                            }}
                            className="grid-item"
                        >
                            <div className="grid-item__info-block">
                                <h4 className="grid-item__head">
                                    New women collection
                                </h4>
                                <CustomLink text={"shop now"} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default CategoriesSection;
