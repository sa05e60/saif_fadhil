"use client";

import {
    Backend_skill,
    DevTools,
    Frontend_skill,
	Security_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-fit relative overflow-hidden py-20 px-4 md:px-8"
        >
            <SkillText />

            <div className="flex flex-col items-center justify-center w-[95%] gap-4">
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="w-full lg:w-1/2 h-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="rounded-md text-[white] w-full my-auto py-[8px] px-[10px] border border-[#3D0C11] opacity-[0.9]"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429] text-2xl font-bold">
                                        Frontend{" "}
                                    </span>
                                    <br />
                                    <div className="flex flex-row justify-around flex-wrap my-4 gap-5 items-center">
                                        {Frontend_skill.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                    <div className="w-full lg:w-1/2 h-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.5)}
                                    className="rounded-md text-[white] w-full h-full py-[8px] px-[10px] border border-[#3D0C11] opacity-[0.9]"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429] text-2xl font-bold">
                                        Backend & Languages{" "}
                                    </span>
                                    <br />
                                    <div className="flex flex-row justify-around flex-wrap my-4 gap-5 items-center">
                                        {Backend_skill.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="w-full lg:w-1/2 h-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="rounded-md text-[white] w-full my-auto py-[8px] px-[10px] border border-[#3D0C11] opacity-[0.9]"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429] text-2xl font-bold">
                                        Dev Tools{" "}
                                    </span>
                                    <br />
                                    <div className="flex flex-row justify-around flex-wrap my-4 gap-5 items-center">
                                        {DevTools.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                    <div className="w-full lg:w-1/2 h-full">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.5)}
                                    className="rounded-md text-[white] w-full h-full py-[8px] px-[10px] border border-[#3D0C11] opacity-[0.9]"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429] text-2xl font-bold">
                                        Security{" "}
                                    </span>
                                    <br />
                                    <div className="flex flex-row justify-around flex-wrap my-4 gap-3 items-center">
                                        {Security_skill.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full text-[13px] font-medium border border-[#3D0C11] text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429] bg-[#170A0B5e] whitespace-nowrap"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;
