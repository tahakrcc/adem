import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ShieldCheck } from 'lucide-react';

export default function KVKK() {
    return (
        <main className="min-h-screen bg-[#0f172a] text-white">
            <Navbar />
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex items-center gap-4 mb-8">
                        <ShieldCheck className="text-secondary w-12 h-12" />
                        <h1 className="text-3xl md:text-4xl font-black text-white">KVKK AYDINLATMA METNİ</h1>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed text-lg">

                        <p className="font-light">
                            <strong>Veri Sorumlusu:</strong> Adem Hidrofor & Pompa Servisi - M. Kerem Akarslan<br />
                            <strong>Adres:</strong> <a href="https://maps.app.goo.gl/9rUuDM28tETWo1468" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors underline">Yeşiltepe Yolu No: 28, Yeşilyurt / MALATYA</a>
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 border-b border-primary/30 inline-block pb-1">1. Giriş</h2>
                            <p>
                                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; veri sorumlusu sıfatıyla
                                <strong> Adem Hidrofor & Pompa Servisi </strong> (“Şirket”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 border-b border-primary/30 inline-block pb-1">2. Kişisel Verilerin İşlenme Amaçları</h2>
                            <p>Toplanan kişisel verileriniz (Ad, Soyad, Telefon Numarası, Adres Bilgisi, Hizmet Talep Detayları);</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Hidrofor arıza tespiti, bakım ve onarım hizmetlerinin yürütülmesi,</li>
                                <li>Dalgıç pompa montaj ve servis süreçlerinin yönetilmesi,</li>
                                <li>Randevu oluşturulması ve müşteri ile iletişime geçilmesi,</li>
                                <li>Keşif ve fiyat teklifi sunulması,</li>
                                <li>Yasal yükümlülüklerin yerine getirilmesi,</li>
                            </ul>
                            <p className="mt-2">amaçlarıyla işlenmektedir.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 border-b border-primary/30 inline-block pb-1">3. Kişisel Veri Toplama Yöntemi ve Hukuki Sebebi</h2>
                            <p>
                                Kişisel verileriniz; internet sitemiz, telefon görüşmeleri, WhatsApp iletişim hattı veya doğrudan iş yerimizde sözlü, yazılı ya da elektronik ortamda toplanmaktadır.
                                Bu veriler, KVKK’nın 5. ve 6. maddelerinde belirtilen “sözleşmenin kurulması veya ifası” ve “veri sorumlusunun meşru menfaati” hukuki sebeplerine dayanarak işlenmektedir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 border-b border-primary/30 inline-block pb-1">4. Verilerin Aktarımı</h2>
                            <p>
                                Kişisel verileriniz, yasal zorunluluklar (yetkili kamu kurumları) dışında üçüncü kişilerle paylaşılmamaktadır.
                                Ancak, ödeme işlemleri veya hukuki uyuşmazlık durumlarında ilgili banka, avukat veya resmi dairelere aktarılabilir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-3 border-b border-primary/30 inline-block pb-1">5. KVKK Kapsamındaki Haklarınız</h2>
                            <p>KVKK’nın 11. maddesi uyarınca veri sahibi olarak;</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                                <li>Verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                                <li>KVKK’ya aykırı işlenen verilerin silinmesini veya yok edilmesini talep etme haklarına sahipsiniz.</li>
                            </ul>
                        </section>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p>
                                Bu haklarınıza ilişkin taleplerinizi <strong>teknik servis ofisimize</strong> yazılı olarak veya <strong>iletişim bilgilerimizde yer alan telefon numaramız</strong> üzerinden iletebilirsiniz.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/" className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/10">
                            ← Ana Sayfaya Dön
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
