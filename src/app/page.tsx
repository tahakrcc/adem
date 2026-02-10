'use client';

import Link from 'next/link';

import { Settings, Droplets, Gauge, Wrench, Activity, Anchor, Home as HomeIcon, MapPin, ShieldCheck, Truck, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import ParallaxSection from '@/components/ParallaxSection';
import ServiceCard from '@/components/ServiceCard'; // Updated Import
import { motion } from 'framer-motion';

export default function Home() {
  // Local hidrofor service images
  const hidroforImages = [
    "/images/services/hidrofor/hidroforkurulum.jpeg", // Hidrofor kurulum
    "/images/services/hidrofor/genlesmetanki.jpeg", // Genleşme tankı
    "/images/services/hidrofor/basincgosterge.jpeg", // Basınç göstergesi
    "/images/services/hidrofor/mekanikkece.jpeg", // Mekanik keçe
    "/images/services/hidrofor/elektrik panosu.jpeg", // Elektrik panosu
    "/images/services/hidrofor/periyodik bakim.jpeg", // Periyodik bakım
  ];

  const pumpImages = [
    "/images/services/pompa/sondaj.jpeg", // Kuyu sondaj
    "/images/services/pompa/kurulum .jpeg", // Pompa montaj
    "/images/services/pompa/motorsarım.jpeg", // Motor sarım
    "/images/services/pompa/kablolamaelektrik.jpeg", // Kablo izolasyon
  ];


  const hidroforServices = [
    { title: 'HİDROFOR KURULUMU', description: 'Yüksek verimli sistemlerle kesintisiz su basıncı garantisi.', imageSrc: hidroforImages[0] },
    { title: 'GENLEŞME TANKI', description: 'Patlak membran değişimi ve optimum basınç ayarları.', imageSrc: hidroforImages[1] },
    { title: 'BASINÇ AYARI', description: 'Enerji tasarrufu sağlayan hassas kalibrasyon hizmeti.', imageSrc: hidroforImages[2] },
    { title: 'ÜRÜNLERİMİZ', description: 'Yüksek kaliteli hidrofor ve pompa ekipmanları.', imageSrc: hidroforImages[3] },
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
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Brand & Copyright */}
          <div>
            <h4 className="font-black text-2xl tracking-tighter text-white">AK DALGIÇ POMPA</h4>
            <p className="text-xs text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Malatya'nın Güvenilir Su Çözümleri
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h5 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Hızlı Erişim</h5>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Ana Sayfa</a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-white transition-colors">Hizmetler</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-white transition-colors">İletişim</a>
          </div>

          {/* Corporate Links (KVKK & Privacy) */}
          <div className="flex flex-col gap-2">
            <h5 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Kurumsal</h5>
            <Link href="/kvkk" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
              KVKK Aydınlatma Metni
            </Link>
            <Link href="/gizlilik-politikasi" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
              Gizlilik Politikası
            </Link>
            <a href="tel:05433363944" className="text-sm text-muted-foreground hover:text-white transition-colors mt-2">
              Destek: 0543 336 39 44
            </a>
          </div>

        </div>
      </footer>
    </main>
  );
}
