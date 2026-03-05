import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    link?: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
    return (
        <div className="rounded-lg shadow-lg border border-[#3D0C11] overflow-hidden">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            />

            <div className="p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-[#D90429] underline underline-offset-4 hover:text-[#ff4d6d] text-sm font-medium transition-colors"
                    >
                        Visit Project →
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;