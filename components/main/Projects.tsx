"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const Projects = () => {
    const { lang } = useLanguage();
    const t = translations[lang].projects;
    const isAr = lang === "ar";
    return (
        <div
            className="flex flex-col items-center justify-center py-20 px-4 md:px-10"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429] py-20" style={isAr ? { fontFamily: "var(--font-cairo)" } : {}}>
                {t.title}
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 justify-center">
                <ProjectCard
                    src="/webrocker.png"
                    title="WebRocker"
                    description={t.webrockerDesc}
                    link="https://webrocker.onrender.com/"
                />
            </div>
        </div>
    );
};

export default Projects;