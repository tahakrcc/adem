'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const mapsLink = "https://maps.app.goo.gl/9rUuDM28tETWo1468";

    // New Contact Info
    const contactInfo = [
        {
            icon: Phone,
            title: "KEREM AKARSLAN",
            details: ["+90 543 336 39 44"],
            color: "text-secondary",
            link: "tel:05433363944"
        },
        {
            icon: MapPin,
            title: "MERKEZ",
            details: ["Yeşiltepe Yolu No: 28", "Yeşilyurt / MALATYA", "(Çavuşoğlu Mh.)"],
            color: "text-primary",
            link: mapsLink,
            target: "_blank"
        },
        {
            icon: Mail,
            title: "E-POSTA",
            details: ["keremakarslan4@gmail.com"],
            color: "text-white",
            link: "mailto:keremakarslan4@gmail.com"
        },
        {
            icon: Clock,
            title: "ACİL SERVİS",
            details: ["7/24 Kesintisiz Hizmet"],
            color: "text-red-500",
            link: "tel:05433363944"
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
                            <motion.a
                                key={index}
                                href={item.link}
                                target={item.target}
                                rel={item.target ? "noopener noreferrer" : undefined}
                                whileHover={{ x: 10 }}
                                className="block bg-white/5 p-6 border-l-2 border-white/10 hover:border-secondary hover:bg-white/10 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`mt-1 ${item.color}`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-1">{item.title}</h3>
                                        {item.details.map((detail, idx) => (
                                            <p key={idx} className="text-muted-foreground text-sm group-hover:text-white transition-colors">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-2 min-h-[400px] bg-white/5 relative group overflow-hidden rounded-2xl border border-white/10">
                        {/* Clickable Overlay */}
                        <a
                            href={mapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <div className="bg-secondary text-white px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                                <MapPin size={20} />
                                Haritada Görüntüle
                            </div>
                        </a>

                        <iframe
                            src="https://maps.google.com/maps?q=Yesiltepe+Yolu+No:28,Yesilyurt,Malatya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 absolute inset-0 pointer-events-none"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
