import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden" id="home">
            <video
                autoPlay
                muted
                loop
                className="rotate-100 absolute top-[-100px] sm:top-[-180px] md:top-[-240px] lg:top-[-335px] left-0 z-[0] w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
                style={{ filter: "hue-rotate(90deg) saturate(1.4)" }}
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(104,0,0,0.45) 0%, rgba(155,17,30,0.15) 40%, transparent 70%)" }} />
            <HeroContent />
        </div>
    );
};

export default Hero;
