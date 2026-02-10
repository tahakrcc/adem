'use client';

import { Settings, Droplets, Gauge, Wrench, Activity, Anchor, Home as HomeIcon, MapPin, ShieldCheck, Truck, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import ParallaxSection from '@/components/ParallaxSection';
import ServiceCard from '@/components/ServiceCard'; // Updated Import
import { motion } from 'framer-motion';

export default function Home() {
  // Unsplash placeholders for realistic industrial look
  const hidroforImages = [
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800", // Industrial pipes
    "https://images.unsplash.com/photo-1535315802100-3b036ca6d5f7?auto=format&fit=crop&q=80&w=800", // Machinery (New)
    "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&q=80&w=800", // Gauge (Replaced - just to be safe)
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800", // Tools/Mechanic (New)
    "https://images.unsplash.com/photo-1631553835694-82559eb56860?auto=format&fit=crop&q=80&w=800", // Electrical Panel/Board (New - for Pano Tamiri)
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800", // Worker/Maintenance (New - for Periyodik Bakım)
  ];

  const pumpImages = [
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800", // Drilling/Ground
    "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800", // Water/Pump
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", // Coil/Motor
    "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800", // Cables/Wires (New)
  ];


  const hidroforServices = [
    { title: 'HİDROFOR KURULUMU', description: 'Yüksek verimli sistemlerle kesintisiz su basıncı garantisi.', imageSrc: hidroforImages[0] },
    { title: 'GENLEŞME TANKI', description: 'Patlak membran değişimi ve optimum basınç ayarları.', imageSrc: hidroforImages[1] },
    { title: 'BASINÇ AYARI', description: 'Enerji tasarrufu sağlayan hassas kalibrasyon hizmeti.', imageSrc: hidroforImages[2] },
    { title: 'MEKANİK KEÇE', description: 'Su kaçaklarına karşı %100 sızdırmazlık çözümleri.', imageSrc: hidroforImages[3] }, // Assuming tool/worker image fit better conceptually or placeholder
    { title: 'PANO TAMİRİ', description: 'Otomasyon arızalarının yerinde ve hızlı onarımı.', imageSrc: hidroforImages[4] },
    { title: 'PERİYODİK BAKIM', description: 'Sistemin ömrünü uzatan yıllık detaylı kontroller.', imageSrc: hidroforImages[5] },
  ];

  const pumpServices = [
    { title: 'KUYU SONDAJ', description: 'Jeolojik yapıya uygun profesyonel sondaj ve etüt.', imageSrc: pumpImages[0] },
    { title: 'POMPA MONTAJ', description: 'Derin kuyu pompalarının güvenli ve garantili kurulumu.', imageSrc: pumpImages[1] },
    { title: 'MOTOR SARIM', description: 'Yanmış motorların fabrika standartlarında onarımı.', imageSrc: pumpImages[2] },
    { title: 'KABLO İZOLASYON', description: 'Su altı eklerinde profesyonel sızdırmazlık.', imageSrc: pumpImages[3] },
  ];

  const extraServices = [
    { title: 'KAYISI SULAMA', description: 'Bahçeleriniz için özel sulama altyapısı.', icon: Droplets },
    { title: 'DEPO HİJYENİ', description: 'Sağlık bakanlığı standartlarında temizlik.', icon: HomeIcon },
    { title: 'ACİL SERVİS', description: '7/24 Teknik destek ekibi.', icon: Truck },
    { title: 'YERİNDE KEŞİF', description: 'Ücretsiz arıza tespiti ve danışmanlık.', icon: MapPin },
  ];

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />
      <Hero />
      <Brands />

      {/* Intro Section - Fixed Background */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-[#0f172a] z-0" />
        <div className="container mx-auto relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} // Repeat animation
            className="text-secondary tracking-[0.4em] text-sm font-bold uppercase"
          >
            Profesyonel Çözümler
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }} // Repeat animation
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black mt-6 mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500"
          >
            SUYUNUZ GÜVENDE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }} // Repeat animation
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
          >
            Ak Dalgıç Pompa olarak, yılların verdiği tecrübe ve uzman kadromuzla Malatya genelinde
            hidrofor ve pompa sistemleriniz için kalıcı çözümler üretiyoruz.
          </motion.p>
        </div>
      </section>

      {/* Hidrofor Hizmetleri - Parallax with Photo Cards */}
      <ParallaxSection bgImage="/hero-bg.svg" overlayColor="bg-[#0f172a]/90">
        <div className="container mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-black mb-12 text-center border-b border-primary/30 pb-4 inline-block mx-auto"
          >
            HİDROFOR SİSTEMLERİ
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hidroforServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Dalgıç Pompa Hizmetleri - Parallax with Photo Cards */}
      <ParallaxSection className="bg-[#111] border-y border-white/5">
        <div className="container mx-auto">
          <div className="text-right mb-12">
            <motion.h3
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="text-4xl md:text-5xl font-black text-white inline-block border-b border-secondary/30 pb-4"
            >
              DALGIÇ POMPA
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pumpServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index + 3} /> // Offset index for variety
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Ekstra Hizmetler Grid - Slide In Animation */}
      <section className="py-32 px-4 bg-[#0f172a] relative z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {extraServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="group relative bg-white/5 p-10 hover:bg-white/10 transition-all border border-white/5 aspect-square flex flex-col justify-center items-center text-center cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-500 mx-auto w-fit">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-black text-2xl tracking-tighter">AK DALGIÇ POMPA</h4>
            <p className="text-xs text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Ana Sayfa</a>
            <a href="#services" className="hover:text-white transition-colors">Hizmetler</a>
            <a href="#contact" className="hover:text-white transition-colors">İletişim</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
