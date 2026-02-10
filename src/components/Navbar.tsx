'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Markalar', href: '#brands' },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter flex flex-col leading-none group">
          <span className="text-white group-hover:text-primary transition-colors">AK DALGIÇ</span>
          <span className="text-primary text-sm tracking-[0.3em] group-hover:text-white transition-colors">POMPA</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
          <motion.a
            href="tel:05433363944"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-5 py-2.5 font-bold text-sm tracking-wide uppercase hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
          >
            <Phone size={16} />
            0543 336 39 44
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f172a] fixed inset-0 z-40 flex items-center justify-center pt-20"
          >
            <div className="flex flex-col p-8 gap-8 w-full text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-white/80 hover:text-white border-b border-white/10 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:05433363944" className="bg-primary text-white w-full py-4 rounded-none font-bold text-center uppercase tracking-widest mt-auto mb-20 flex justify-center items-center gap-3">
                <Phone size={20} />
                0543 336 39 44
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
