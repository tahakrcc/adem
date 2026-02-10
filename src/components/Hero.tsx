'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

const heroImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920", // Tech/Blue
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1920", // Industrial
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?auto=format&fit=crop&q=80&w=1920", // Water/Blue
    "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=1920", // Pump Detail
];

const Hero = () => {
    const ref = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Slideshow Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={ref} className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0f172a]">
            {/* Animated Background Slideshow - Seamless Crossfade */}
            {heroImages.map((src, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                        opacity: index === currentImageIndex ? 0.4 : 0,
                        scale: index === currentImageIndex ? 1 : 1.1,
                        zIndex: index === currentImageIndex ? 1 : 0
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={src}
                        alt={`Hero Background ${index + 1}`}
                        fill
                        unoptimized
                        className="object-cover"
                        priority={index === 0}
                    />
                </motion.div>
            ))}

            {/* Overlays */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-black/60" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80" />

            {/* Content */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-32 md:py-0"
            >
                {/* Text Content */}
                <div className="text-white space-y-6 md:space-y-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center md:justify-start gap-3"
                    >
                        <div className="h-[2px] w-8 md:w-12 bg-secondary shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                        <span className="text-secondary font-bold tracking-[0.2em] text-xs md:text-sm uppercase drop-shadow-md">
                            M. Kerem Akarslan
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter"
                    >
                        AK <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-lg">
                            DALGIÇ
                        </span> <br />
                        <span className="text-shine drop-shadow-lg">
                            POMPA
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-2xl text-gray-300 font-light max-w-lg mx-auto md:mx-0 leading-relaxed"
                    >
                        Malatya ve çevresinde <span className="text-white font-semibold">7/24</span> profesyonel hidrofor ve pompa çözümleri.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 justify-center md:justify-start"
                    >
                        <Link href="tel:05433363944" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative overflow-hidden group bg-secondary text-white px-8 py-4 font-bold text-lg tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] w-full sm:w-auto"
                            >
                                <span className="relative z-10">HEMEN ARA</span>
                                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:animate-shine" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Wave Divider (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-[#0f172a]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="opacity-40"></path>
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="opacity-100"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
