'use client';

import { motion } from 'framer-motion';
import { Droplets, Zap, ShieldCheck, Activity, Award } from 'lucide-react';

const brands = [
    { name: "ETNA", color: "text-red-500", icon: ShieldCheck, font: "font-black tracking-tighter" },
    { name: "ÜSTÜNEL", color: "text-blue-500", icon: Award, font: "font-serif tracking-widest" },
    { name: "ALARKO", color: "text-cyan-400", icon: Droplets, font: "font-sans font-bold tracking-normal" },
    { name: "YILDIZSU", color: "text-yellow-400", icon: Activity, font: "font-mono font-bold" },
    { name: "PEDROLLO", color: "text-green-500", icon: Zap, font: "italic font-black" },
];

const Brands = () => {
    return (
        <div className="bg-[#0f172a] py-16 border-y border-white/5 overflow-hidden relative">
            <div className="container mx-auto px-4 mb-8 text-center">
                <span className="text-sm font-semibold tracking-[0.3em] text-muted-foreground uppercase opacity-70">
                    Çözüm Ortaklarımız
                </span>
            </div>

            <div className="flex w-[200%] md:w-[150%] lg:w-full lg:grid lg:grid-cols-5 gap-8 items-center justify-center">
                {/* Mobile Marquee / Desktop Grid */}
                <div className="lg:hidden flex w-full animate-marquee items-center gap-12">
                    {[...brands, ...brands, ...brands].map((brand, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 group min-w-[150px]">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-white/20 transition-all backdrop-blur-sm">
                                <div className={`text-3xl ${brand.font} ${brand.color} drop-shadow-md flex items-center gap-2`}>
                                    {/* <brand.icon size={24} className="opacity-50 group-hover:opacity-100 transition-opacity" /> */}
                                    {brand.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Static Grid */}
                <div className="hidden lg:contents">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="flex flex-col items-center gap-2 cursor-default group"
                        >
                            <div className="h-24 w-full bg-white/5 rounded-2xl border border-white/5 group-hover:border-secondary/50 group-hover:bg-white/10 transition-all flex items-center justify-center p-4 shadow-lg group-hover:shadow-secondary/20">
                                <div className={`text-3xl xl:text-4xl ${brand.font} ${brand.color} drop-shadow-lg flex items-center gap-3 transition-transform duration-300`}>
                                    <brand.icon size={28} className="opacity-70 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                                    {brand.name}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile Gradient Overlay */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f172a] to-transparent lg:hidden pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f172a] to-transparent lg:hidden pointer-events-none" />
        </div>
    );
};

export default Brands;
