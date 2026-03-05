"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const HeroContent = () => {
    const { lang } = useLanguage();
    const t = translations[lang].hero;
    const isAr = lang === "ar";
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="relative flex md:flex-row flex-col-reverse items-center justify-center gap-6 md:gap-4 md:px-8 lg:px-20 px-5 mt-24 md:mt-32 lg:mt-40 w-full z-20"
                >
                    <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">
                        <div className="hidden md:flex flex-row flex-wrap items-center md:gap-2 lg:gap-5 gap-1">
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[7px] border border-[#3D0C11] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#D90429] mr-[10px] h-5 w-5" />
                                        <h1 className="Welcome-text text-[13px]" style={isAr ? { fontFamily: "var(--font-cairo)" } : {}}>
                                            {t.badge1}
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
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[7px] border border-[#3D0C11] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#D90429] mr-[10px] h-5 w-5" />
                                        <h1 className="Welcome-text text-[13px]" style={isAr ? { fontFamily: "var(--font-cairo)" } : {}}>
                                            {t.badge2}
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
                                        variants={slideInFromTop}
                                        className="Welcome-box py-[8px] px-[7px] border border-[#3D0C11] opacity-[0.9]"
                                    >
                                        <BsStars className="text-[#D90429] mr-[10px] h-5 w-5" />
                                        <h1 className="Welcome-text text-[13px]" style={isAr ? { fontFamily: "var(--font-cairo)" } : {}}>
                                            {t.badge3}
                                        </h1>
                                    </motion.div>
                                )}
                            </InView>
                        </div>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white max-w-[600px] w-auto h-auto z-20"
                                    style={isAr ? { fontFamily: "var(--font-cairo)" } : {}}
                                >
                                    <span>
                                        {t.headline1}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429]">
                                            {" "}
                                            {t.craft}{" "}
                                        </span>
                                        {t.headline2}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429]">
                                            {" "}
                                            {t.curiosity}{" "}
                                        </span>
                                    </span>
                                </motion.div>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.8)}
                                    className="text-sm md:text-md text-gray-400 my-5 max-w-[650px] z-30"
                                    style={isAr ? { fontFamily: "var(--font-cairo)" } : {}}
                                >
                                    <li>{t.achievement1}</li>
                                    <li>{t.achievement2}</li>
                                    <li>{t.achievement3}</li>
                                    <li>{t.achievement4}</li>
                                </motion.div>
                            )}
                        </InView>
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.a
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    href="#about"
                                    variants={slideInFromLeft(1)}
                                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
                                    style={isAr ? { fontFamily: "var(--font-cairo)" } : {}}
                                >
                                    {t.cta}
                                </motion.a>
                            )}
                        </InView>
                    </div>

                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                    className="w-full md:w-2/5 lg:w-3/6 h-full flex justify-center items-center z-40"
                            >
                                <Image
                                    src="/mainIconsdark.svg"
                                    alt="work icons"
                                    height={650}
                                    width={650}
                                    className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[360px] lg:max-w-[650px] h-auto"
                                />
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;