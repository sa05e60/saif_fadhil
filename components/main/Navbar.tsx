"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang, toggleLang } = useLanguage();
    const t = translations[lang].navbar;

    return (
        <div className="w-full fixed top-0 shadow-lg shadow-[#680000]/50 bg-[#0A050517] backdrop-blur-md z-50 px-10 m-0 max-w-[1855px] rounded-full">
            <div className="w-full h-[65px] flex flex-row items-center justify-between m-auto px-[0px] md:px-[10px]">
                <a
                    href="#home"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <Image
                        src="/saif.jpg"
                        alt="logo"
                        width={50}
                        height={50}
                        className="cursor-pointer rounded-full w-10 h-10 object-cover"
                    />

                    <span className="font-bold ml-[10px] block text-gray-300 z-50 md:text-lg text-xl">
                        Saif Fadhil
                    </span>
                </a>

                <div className="hidden w-auto lg:w-1/3 h-full md:flex flex-row items-center justify-between md:mx-4 lg:mx-auto lg:pr-12">
                    <div className="flex items-center justify-between gap-4 md:gap-3 lg:gap-6 w-full h-auto border border-[#3D0C1161] bg-[#170A0B5e] mr-[15px] px-[14px] md:px-[16px] lg:px-[20px] py-[10px] rounded-full text-gray-200 text-sm md:text-sm lg:text-base whitespace-nowrap">
                        <a href="#about" className="cursor-pointer">
                            {t.about}
                        </a>
                        <a href="#skills" className="cursor-pointer">
                            {t.skills}
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            {t.projects}
                        </a>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-5 text-white">
                    {Socials.map((social) => (
                        <a
                            href={social.link}
                            key={social.name}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                                className="cursor-pointer hover:animate-spin"
                            />
                        </a>
                    ))}

                    {/* Language toggle */}
                    <button
                        onClick={toggleLang}
                        className="text-sm font-bold px-3 py-1 rounded-full border border-[#3D0C11] text-gray-200 bg-[#170A0B5e] hover:bg-[#3D0C11] transition-colors"
                        style={{ fontFamily: lang === "ar" ? "var(--font-cairo)" : undefined }}
                    >
                        {lang === "en" ? "عربي" : "EN"}
                    </button>

                    {/* Hamburger — mobile only */}
                    <button
                        className="md:hidden flex flex-col gap-[5px] justify-center items-center w-8 h-8"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden w-full bg-[#0A0505ee] backdrop-blur-md border-t border-[#3D0C11] flex flex-col items-center gap-5 py-6 rounded-b-2xl">
                    <a href="#about" className="text-gray-200 text-lg cursor-pointer" onClick={() => setMenuOpen(false)}>{t.about}</a>
                    <a href="#skills" className="text-gray-200 text-lg cursor-pointer" onClick={() => setMenuOpen(false)}>{t.skills}</a>
                    <a href="#projects" className="text-gray-200 text-lg cursor-pointer" onClick={() => setMenuOpen(false)}>{t.projects}</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;