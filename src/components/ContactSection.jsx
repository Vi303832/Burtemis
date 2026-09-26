import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  CheckCircle2, 
  Paperclip, 
  FileSpreadsheet, 
  ShieldCheck, 
  Building2,
  Sparkles,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    phone: '',
    email: '',
    categoryInterest: 'Tüm Kalemler (Karma Liste)',
    city: 'İstanbul',
    notes: ''
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone || !formData.fullName) {
      alert('Lütfen Firma Adı, Yetkili Kişi ve Telefon alanlarını doldurunuz.');
      return;
    }
    setFormSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="iletisim" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent 30-Minute Fast Quote Band (As requested) */}
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 text-white p-6 sm:p-8 shadow-xl shadow-brand-600/20 mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center flex-shrink-0 text-amber-300">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5 justify-center md:justify-start">
                  <Sparkles className="w-3.5 h-3.5" />
                  30 Dakika İade Garantili Teklif Süresi
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold mt-0.5">
                  Toplu Temizlik ve Ambalaj Malzemesi İhtiyaçlarınız İçin Liste Gönderin
                </h3>
                <p className="text-xs sm:text-sm text-brand-100 mt-1 max-w-2xl">
                  Mevcut tüketim listenizi veya Excel dosyanızı iletin; uzman ekibimiz en uygun birim fiyatları ve iskonto oranlarını 30 dakikada çıkarsın.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/905321112233?text=Merhaba,%20toplu%20temizlik%20ve%20ambalaj%20malzemesi%20ihtiyaç%20listemizi%20ileterek%20teklif%20almak%20istiyoruz."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-lg transition-transform active:scale-95 flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp'tan Liste Gönder</span>
            </a>
          </div>
        </div>

        {/* Grid: Form on Left, Contact Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Lead Generation Quote Form */}
          <div className="lg:col-span-7 bg-surface-low rounded-3xl p-6 sm:p-10 border border-borderSubtle">
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200">
                Lead Generation & Kurumsal Teklif
              </span>
              <h3 className="text-2xl font-extrabold text-brand-900 mt-2">
                Toplu Sipariş / Toptan Satış Teklif Formu
              </h3>
              <p className="text-xs sm:text-sm text-textMuted mt-1">
                Aşağıdaki formu doldurarak kurumunuza özel fiyat teklifi talebinde bulunabilirsiniz.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-white border border-emerald-200 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-brand-900">
                  Teklif Talebiniz Başarıyla İletildi!
                </h4>
                <p className="text-xs text-textMuted max-w-md mx-auto leading-relaxed">
                  Sayın <span className="font-bold text-textDark">{formData.fullName}</span>, <span className="font-bold text-textDark">{formData.companyName}</span> için hazırlayacağımız özel fiyat teklifi en geç 30 dakika içinde tarafınıza iletilecektir.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setSelectedFileName('');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition-colors"
                  >
                    Yeni Teklif Talebi Gönder
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-textDark mb-1">
                    Firma / Kurum Ünvanı *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Örn: Burtemis Endüstriyel A.Ş."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl bg-white border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-textDark mb-1">
                      Yetkili Adı Soyadı *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Adınız ve Soyadınız"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs rounded-xl bg-white border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-textDark mb-1">
                      Telefon Numarası *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="05XX XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl bg-white border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-textDark mb-1">
                      Kurumsal E-Posta
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="satinalma@firma.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl bg-white border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-textDark mb-1">
                      İlgilendiğiniz Ana Kategori
                    </label>
                    <select
                      value={formData.categoryInterest}
                      onChange={(e) => setFormData({ ...formData, categoryInterest: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs rounded-xl bg-white border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="Tüm Kalemler (Karma Liste)">Tüm Kalemler (Karma Liste)</option>
                      <option value="Temizlik Kimyasalları">Temizlik Kimyasalları (20-30 LT, 5 LT)</option>
                      <option value="Kağıt & Mutfak Grubu">Kağıt & Mutfak Grubu (Z Katlama, Rulo)</option>
                      <option value="Bardak & Ambalaj">Bardak & Ambalaj (Karton Bardak vb.)</option>
                      <option value="Çöp Torbaları & Atık">Çöp Torbaları (Battal, Jumbo, Konteyner)</option>
                      <option value="Temizlik Gereçleri">Temizlik Gereçleri & Presli Arabalar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-textDark mb-1">
                    İhtiyaç Detayları ve Tahmini Adetler
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Örn: 20 Koli Z Katlama Havlu, 10 Bidon 30 LT Yüzey Temizleyici, 50 Koli 7 OZ Karton Bardak..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                  ></textarea>
                </div>

                {/* File / Excel Upload Simulation */}
                <div>
                  <label className="block text-xs font-bold text-textDark mb-1">
                    Mevcut Malzeme Listenizi Yükleyin (Excel / PDF / Word)
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-brand-300 bg-white hover:bg-brand-50 cursor-pointer text-xs font-semibold text-brand-700 transition-colors">
                      <Paperclip className="w-4 h-4 text-brand-600" />
                      <span>{selectedFileName || 'Dosya Seçin (Maks. 10MB)'}</span>
                      <input 
                        type="file" 
                        accept=".xlsx,.xls,.pdf,.docx,.doc" 
                        onChange={handleFileChange}
                        className="hidden" 
                      />
                    </label>
                    {selectedFileName && (
                      <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Dosya Eklendi
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-bold text-xs shadow-md shadow-brand-600/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Fiyat Teklifi Talep Et (30 Dk. İade Garantisi)</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-textMuted pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Bilgileriniz 6698 sayılı KVKK kapsamında gizli tutulmaktadır.</span>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Contact Details, Map & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-borderSubtle space-y-6 shadow-xs">
              <h4 className="text-base font-extrabold text-brand-900 border-b border-borderSubtle pb-3">
                Doğrudan İletişim Kanalları
              </h4>

              <div className="space-y-4 text-xs">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-50 text-brand-600 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-brand-900 block">Kurumsal Satış Hattı</span>
                    <a href="tel:+902120000000" className="text-textMuted hover:text-brand-600 font-medium">
                      0850 300 00 00 / 0212 555 00 00
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-brand-900 block">7/24 WhatsApp Teklif Hattı</span>
                    <a 
                      href="https://wa.me/905321112233?text=Merhaba,%20kurumsal%20teklif%20almak%20istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-bold"
                    >
                      +90 532 111 22 33
                    </a>
                  </div>
                </div>

                {/* Mail */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-50 text-brand-600 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-brand-900 block">Kurumsal E-Posta</span>
                    <a href="mailto:teklif@burtemis.com.tr" className="text-textMuted hover:text-brand-600 font-medium">
                      teklif@burtemis.com.tr / info@burtemis.com.tr
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-surface-low text-textDark flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-brand-900 block">Çalışma ve Sevkiyat Saatleri</span>
                    <p className="text-textMuted font-medium">
                      Pazartesi - Cuma: 08:30 - 18:30 <br />
                      Cumartesi: 09:00 - 14:00 (Hızlı Sevkiyat)
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-brand-900 block">Merkez Depo & Sevkiyat</span>
                    <p className="text-textMuted font-medium">
                      Organize Sanayi Bölgesi, Hijyen ve Kimya Toptancılar Sitesi, No: 42, İstanbul & Bursa Lojistik Ağı
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Location / Map Card */}
            <div className="rounded-3xl overflow-hidden border border-borderSubtle bg-surface-low p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-brand-900">Sevkiyat Ağı Kapsamı</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Marmara Bölgesi Aynı Gün
                </span>
              </div>
              <div className="h-44 rounded-2xl bg-gradient-to-tr from-slate-200 via-brand-50 to-blue-100 flex flex-col items-center justify-center p-4 text-center relative border border-borderSubtle">
                <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg mb-2 animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-brand-900">
                  İstanbul & Bursa Depolarından Doğrudan Sevkiyat
                </span>
                <p className="text-[11px] text-textMuted max-w-xs mt-1">
                  81 ile anlaşmalı ambar ve parsiyel kargo taşımacılığı ile 24-48 saatte teslimat.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
