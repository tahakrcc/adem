'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    index: number; // Used for alternating direction
}

const ServiceCard = ({ title, description, imageSrc, index }: ServiceCardProps) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }} // Replays animation on scroll up/down
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative group h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl border border-white/10"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="mb-4 w-12 h-1 bg-secondary rounded-full transform origin-left transition-all duration-500 group-hover:w-24" />
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                    {title}
                </h3>
                <p className="text-gray-300 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {description}
                </p>
            </div>

            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-3xl transition-colors duration-300 pointer-events-none z-20" />
        </motion.div>
    );
};

export default ServiceCard;
