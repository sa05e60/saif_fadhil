import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 px-4 md:px-10"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#680000] to-[#D90429] py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 justify-center">
                <ProjectCard
                    src="/webrocker.png"
                    title="WebRocker"
                    description="A professional web security analysis platform designed to identify vulnerabilities, analyze web targets, and assist security researchers in their assessments."
                />
            </div>
        </div>
    );
};

export default Projects;