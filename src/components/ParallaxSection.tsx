'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
    children: React.ReactNode;
    bgImage?: string; // Optional background image URL
    overlayColor?: string; // Optional overlay color logic
    className?: string;
}

const ParallaxSection = ({ children, bgImage, overlayColor = "bg-black/60", className = "" }: ParallaxSectionProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={ref}
            className={`relative min-h-screen flex flex-col justify-center snap-center ${className}`} // Removed overflow-hidden
        >
            {/* Parallax Background */}
            {bgImage ? (
                <div
                    className="absolute inset-0 z-0 bg-scroll md:bg-fixed bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className={`absolute inset-0 ${overlayColor}`} />
                </div>
            ) : (
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 to-black" />
            )}

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 container mx-auto px-4 py-32" // Increased padding
            >
                {children}
            </motion.div>
        </section>
    );
};

export default ParallaxSection;
