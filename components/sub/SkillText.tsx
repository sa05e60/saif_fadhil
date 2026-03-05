"use client";
import React from "react";
import { motion } from "framer-motion";
import {
	slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const SkillText = () => {
    const { lang } = useLanguage();
    const t = translations[lang].skills;
    const isAr = lang === "ar";
    return (
        <div className="w-full h-auto pt-20 flex flex-col items-center justify-center">
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200 z-50"
                            style={isAr ? { fontFamily: "var(--font-cairo)" } : {}}>
                        {t.title}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429]">
                            {t.titleGradient}
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
                        variants={slideInFromLeft(0.5)}
                        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
                            style={isAr ? { fontFamily: "var(--font-cairo)" } : {}}>
                        {t.subtitle}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429]">{t.subtitleGradient}</span>
                    </motion.div>
                )}
            </InView>
        </div>
    );
};

export default SkillText;