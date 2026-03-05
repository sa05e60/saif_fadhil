"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const Contact = () => {
    const { lang } = useLanguage();
    const t = translations[lang].contact;
    const isAr = lang === "ar";
    const arFont = isAr ? { fontFamily: "var(--font-cairo)" } : {};

    return (
        <section id="contact" className="flex flex-col items-center justify-center py-20 px-4 w-full">
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.h2
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-[40px] font-semibold text-center text-gray-200 mb-4"
                        style={arFont}
                    >
                        {t.title}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429]">
                            {t.titleGradient}
                        </span>
                    </motion.h2>
                )}
            </InView>

            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.p
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-gray-400 text-center mb-12 max-w-[500px]"
                        style={arFont}
                    >
                        {t.subtitle}
                    </motion.p>
                )}
            </InView>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-[700px]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.a
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.3)}
                            href={`tel:${t.phone.replace(/\s/g, "")}`}
                            className="flex items-center gap-4 w-full sm:w-auto px-8 py-5 rounded-2xl border border-[#3D0C11] bg-[#170A0B5e] hover:border-[#D90429] hover:bg-[#3D0C1133] transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#680000] to-[#D90429] flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1" style={arFont}>{t.phoneLabel}</p>
                                <p className="text-white font-medium text-lg tracking-wide group-hover:text-[#D90429] transition-colors" dir="ltr">{t.phone}</p>
                            </div>
                        </motion.a>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.a
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.3)}
                            href={`mailto:${t.email}`}
                            className="flex items-center gap-4 w-full sm:w-auto px-8 py-5 rounded-2xl border border-[#3D0C11] bg-[#170A0B5e] hover:border-[#D90429] hover:bg-[#3D0C1133] transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#680000] to-[#D90429] flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1" style={arFont}>{t.emailLabel}</p>
                                <p className="text-white font-medium text-lg group-hover:text-[#D90429] transition-colors" dir="ltr">{t.email}</p>
                            </div>
                        </motion.a>
                    )}
                </InView>
            </div>

            <div className="mt-16 w-full max-w-[700px] h-px bg-gradient-to-r from-transparent via-[#3D0C11] to-transparent" />
            <p className="mt-6 text-gray-600 text-sm" style={arFont}>© 2026 Saif Fadhil</p>
        </section>
    );
};

export default Contact;
