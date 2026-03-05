"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col relative items-center justify-center min-h-screen w-full h-full"
        >
            <div className="md:absolute w-auto h-auto md:top-[80px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200 z-50"
                        >
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429]">
                                {" "}
                                Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="flex flex-col items-center justify-start relative mt-4 md:mt-16 lg:mt-12 z-[20] w-auto h-auto">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="flex flex-col items-center w-auto h-auto rounded-full overflow-hidden border-[6px] border-[#3D0C11] bg-gradient-to-r from-[#680000] to-[#D90429]"
                        >
                            <img src="/saif.jpg" alt="profile" width={250} />
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="Welcome-box px-[15px] py-[8px] z-[20] brder my-[20px] border-[#3D0C11] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[20px] font-bold">
                                Saif Fadhil
                            </h1>
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="Welcome-box px-[15px] w-[90%] md:w-3/4 py-[8px] z-[20] brder mb-[20px] border-[#3D0C11] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[19px] w-full text-center" style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "0.01em", lineHeight: "1.75" }}>
                                Cybersecurity student & web security researcher specializing in offensive testing,
                                and a frontend developer who builds clean, responsive web applications.
                                Active CTF player and security researcher passionate about discovering
                                vulnerabilities and bridging the gap between development and security.
                            </h1>
                        </motion.div>
                    )}
                </InView>
            </div>
            <div className="relative z-[20] mt-6 md:mt-0 md:absolute md:bottom-[10px] px-[5px] pb-8 md:pb-0">
                <div className="cursive text-[20px] font-medium text-center text-gray-300">
                    Securing the Web, One Line at a Time
                </div>
            </div>

            <div className="w-full hidden md:flex items-start justify-center absolute top-[1px]">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="h-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]"
                    style={{ filter: "hue-rotate(120deg) saturate(1.5) brightness(0.85)" }}
                    src="/encryption.webm/"
                />
            </div>
        </section>
    );
};

export default About;