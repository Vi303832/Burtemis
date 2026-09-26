import React, { useState } from 'react';
import { 
  X, 
  FileDown, 
  CheckCircle2, 
  BookOpen, 
  Download, 
  Layers, 
  ShieldCheck,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CatalogModal({ isOpen, onClose }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [companyEmail, setCompanyEmail] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloadSuccess(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });

    // Create mock download file
    const element = document.createElement("a");
    const file = new Blob([
      `BURTEMİS — KALİTE VE HİJYEN KAPINIZDA\n2026 ÜRÜN KATALOĞU\n\n` +
      `Kategoriler:\n` +
      `1. Temizlik Kimyasalları (20-30 LT, 5 LT, 500-1000 ML)\n` +
      `2. Kağıt & Mutfak Kullan-At (Z Katlama, Peçete, Eldiven)\n` +
      `3. Bardak & Ambalaj Ürünleri\n` +
      `4. Çöp Torbaları & Atık\n` +
      `5. Temizlik Gereçleri\n\n` +
      `Kurumsal İletişim: teklif@burtemis.com.tr | 0850 300 00 00`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = "Burtemis_2026_Urun_Katalogu.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-borderSubtle p-6 sm:p-8 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-surface-low hover:bg-surface-container text-textDark transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-brand-900">
              Burtemis 2026 Ürün Kataloğu
            </h3>
            <p className="text-xs text-textMuted">
              Tüm Kategoriler & Teknik Şartnameler (PDF Broşür)
            </p>
          </div>
        </div>

        {downloadSuccess ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-brand-900">
              Katalog İndirme Başlatıldı!
            </h4>
            <p className="text-xs text-textMuted max-w-xs mx-auto">
              Dosyanız cihazınıza aktarılmıştır. Ayrıca e-posta adresinize güncel kurumsal iskonto tablosu iletilmiştir.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700"
            >
              Tamam
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-4">
            <div className="p-4 rounded-2xl bg-surface-low border border-borderSubtle text-xs space-y-2">
              <span className="font-bold text-brand-900 block">Katalog İçeriği:</span>
              <ul className="space-y-1 text-textDark text-[11px]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                  Temizlik Kimyasalları (20-30 LT, 5 LT ve 500-1000 ML)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                  Kağıt & Mutfak Kullan-At (Z Katlama, Peçete, Eldiven)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                  Bardak & Ambalaj (Karton, Köpük, Poşet ve Bant)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                  Çöp Torbaları ve Temizlik Gereçleri
                </li>
              </ul>
            </div>

            <div>
              <label className="block text-xs font-bold text-textDark mb-1">
                Kataloğun Gönderileceği Kurumsal E-Posta:
              </label>
              <input
                type="email"
                required
                placeholder="ornek@firmaniz.com"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                className="w-full px-3 py-2.5 text-xs rounded-xl bg-surface-low border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-600/20 active:scale-95 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Kataloğu Hemen İndir (PDF)</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-textMuted">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Güvenli ve ücretsiz doğrudan indirme</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
