'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show banner after a short delay for better UX
            setTimeout(() => setShowBanner(true), 1500);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
        // Here you can enable analytics/tracking
        console.log('✅ Cookies accepted');
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setShowBanner(false);
        // Disable non-essential cookies
        console.log('🚫 Cookies rejected');
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
                        onClick={() => setShowDetails(false)}
                    />

                    {/* Cookie Banner */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 z-[101] p-4 md:p-6"
                    >
                        <div className="container mx-auto max-w-6xl">
                            <div className="glass-card relative overflow-hidden border border-white/20 rounded-2xl">
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-95" />

                                {/* Content */}
                                <div className="relative z-10 p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                        {/* Icon & Text */}
                                        <div className="flex items-start gap-4 flex-1">
                                            <div className="mt-1 p-3 bg-secondary/20 rounded-xl">
                                                <Cookie className="text-secondary" size={28} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                                    Çerez Kullanımı
                                                </h3>
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                    Daha iyi bir deneyim için çerezler kullanıyoruz.
                                                    Sitemizi kullanarak çerez politikamızı kabul etmiş olursunuz.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                            {/* Reject Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={handleReject}
                                                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20 text-sm md:text-base"
                                            >
                                                REDDET
                                            </motion.button>

                                            {/* Details Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setShowDetails(!showDetails)}
                                                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg transition-all border border-primary/50 hover:border-primary text-sm md:text-base"
                                            >
                                                DETAYLAR
                                            </motion.button>

                                            {/* Accept Button */}
                                            <motion.button
                                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245, 158, 11, 0.5)' }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={handleAccept}
                                                className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-secondary/30 text-sm md:text-base"
                                            >
                                                KABUL ET
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Details Panel */}
                                    <AnimatePresence>
                                        {showDetails && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden mt-6 pt-6 border-t border-white/10"
                                            >
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="text-white font-bold mb-2">📊 Zorunlu Çerezler</h4>
                                                        <p className="text-gray-400 text-sm">
                                                            Web sitesinin çalışması için gerekli olan temel çerezler. Devre dışı bırakılamaz.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold mb-2">📈 Analitik Çerezler</h4>
                                                        <p className="text-gray-400 text-sm">
                                                            Ziyaretçi davranışlarını anlamamıza yardımcı olur. Siteyi geliştirmek için kullanılır.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold mb-2">🎯 Pazarlama Çerezleri</h4>
                                                        <p className="text-gray-400 text-sm">
                                                            Kişiselleştirilmiş reklamlar göstermek için kullanılır.
                                                        </p>
                                                    </div>
                                                    <div className="pt-4">
                                                        <a
                                                            href="/cerez-politikasi"
                                                            className="text-primary hover:text-secondary underline text-sm font-medium"
                                                        >
                                                            Detaylı Çerez Politikamızı Okuyun →
                                                        </a>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
