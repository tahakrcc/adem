import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Lock } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#0f172a] text-white">
            <Navbar />
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex items-center gap-4 mb-8">
                        <Lock className="text-secondary w-12 h-12" />
                        <h1 className="text-3xl md:text-4xl font-black text-white">GİZLİLİK POLİTİKASI</h1>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed text-lg">

                        <p className="font-light">
                            <strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')}
                            <br />
                            Adem Hidrofor & Pompa Servisi ("Biz") olarak, gizliliğinize büyük önem vermekteyiz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde topladığımız bilgileri ve bunların nasıl kullanıldığını açıklamaktadır.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 border-b border-primary/30 inline-block pb-1">1. Hangi Bilgileri Topluyoruz?</h2>
                            <p><strong>Ziyaretçi Verileri:</strong> Web sitemizi nasıl kullandığınıza ilişkin standart internet günlüğü bilgileri (IP adresi, tarayıcı türü, yönlendiren sayfalar vb.) toplanabilir.</p>
                            <p className="mt-2"><strong>Çerezler (Cookies):</strong> Sitemizin işlevselliğini artırmak ve size daha iyi bir deneyim sunmak için çerezler kullanmaktayız.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 border-b border-primary/30 inline-block pb-1">2. Çerez Politikası</h2>
                            <p>Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır.</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel fonksiyonlarının çalışması için gereklidir (örneğin güvenli alanlara erişim).</li>
                                <li><strong>Analitik Çerezler:</strong> Ziyaretçi sayısını ve site trafiğini analiz etmemize yardımcı olur (Google Analytics vb.).</li>
                                <li><strong>İşlevsellik Çerezleri:</strong> Dil tercihi gibi ayarlarınızın hatırlanmasını sağlar.</li>
                            </ul>
                            <p className="mt-2 text-sm text-gray-500 italic">Kullanıcılar, tarayıcı ayarlarından çerez kullanımını engelleyebilir veya silebilir. Ancak bu durumda bazı site özellikleri tam çalışmayabilir.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 border-b border-primary/30 inline-block pb-1">3. Bilgilerin Kullanımı</h2>
                            <p>Topladığımız bilgiler;</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Web sitesini yönetmek ve geliştirmek,</li>
                                <li>Teknik sorunları gidermek (sunucu bakımı vb.),</li>
                                <li>Analiz ve istatistik oluşturmak,</li>
                                <li>Yasal yükümlülüklere uymak amacıyla kullanılmaktadır.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 border-b border-primary/30 inline-block pb-1">4. Üçüncü Taraf Bağlantıları</h2>
                            <p>
                                Web sitemiz, başka web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından veya içeriklerinden sorumlu değiliz. Ziyaret ettiğiniz diğer sitelerin gizlilik politikalarını incelemenizi öneririz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 border-b border-primary/30 inline-block pb-1">5. İletişim</h2>
                            <p>
                                Bu Gizlilik Politikası ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:<br />
                                <strong>Adres:</strong> <a href="https://maps.app.goo.gl/9rUuDM28tETWo1468" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors underline">Yeşiltepe Yolu No: 28, Yeşilyurt / MALATYA</a><br />
                                <strong>Telefon:</strong> 0543 336 39 44
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 text-center flex gap-4 justify-center">
                        <Link href="/" className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/10">
                            ← Ana Sayfaya Dön
                        </Link>
                        <Link href="/kvkk" className="inline-block px-8 py-3 bg-transparent hover:bg-white/5 text-secondary border border-secondary/30 hover:border-secondary rounded-lg transition-colors">
                            KVKK Metnini Oku →
                        </Link>
                    </div>

                </div>
            </section>

            {/* Simple Footer Reuse */}
            <footer className="bg-black py-8 border-t border-white/10 mt-auto">
                <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} Ak Dalgıç Pompa. Tüm hakları saklıdır.
                </div>
            </footer>
        </main>
    );
}

// Disable static params generation for this simple page
export const dynamic = "force-static";
