'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Contact = () => {
    // New Contact Info
    const contactInfo = [
        {
            icon: Phone,
            title: "KEREM AKARSLAN",
            details: ["+90 543 336 39 44"],
            color: "text-secondary",
        },
        {
            icon: MapPin,
            title: "MERKEZ",
            details: ["Yeşiltepe Yolu No: 28", "Yeşilyurt / MALATYA", "(Çavuşoğlu Mh.)"],
            color: "text-primary",
        },
        {
            icon: Mail,
            title: "E-POSTA",
            details: ["keremakarslan4@gmail.com"],
            color: "text-white",
        },
        {
            icon: Clock,
            title: "ACİL SERVİS",
            details: ["7/24 Kesintisiz Hizmet"],
            color: "text-red-500",
        },
    ];

    return (
        <section id="contact" className="py-24 bg-[#0f172a] relative">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8"
                >
                    <div>
                        <span className="text-secondary tracking-[0.3em] font-medium text-sm">İLETİŞİM</span>
                        <h2 className="text-4xl md:text-6xl font-black mt-2 text-white">Bize Ulaşın</h2>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-sm text-right mt-6 md:mt-0">
                        Profesyonel çözümler için bir telefon uzağınızdayız.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cards */}
                    <div className="lg:col-span-1 grid grid-cols-1 gap-4">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10 }}
                                className="bg-white/5 p-6 border-l-2 border-white/10 hover:border-secondary hover:bg-white/10 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`mt-1 ${item.color}`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-1">{item.title}</h3>
                                        {item.details.map((detail, idx) => (
                                            <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-2 min-h-[400px] bg-white/5 relative group overflow-hidden">
                        <iframe
                            // Approximate location for Yeşiltepe Yolu No: 28, Malatya - placeholder coords
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.6672346789!2d38.29!3d38.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDIxJzAwLjAiTiAzOMKwMTcnMjQuMCJF!5e0!3m2!1sen!2str!4v1600000000000!5m2!1sen!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 absolute inset-0"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none border border-white/10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
