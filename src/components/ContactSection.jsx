import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  Paperclip, 
  Clock
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
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="iletisim" className="py-16 sm:py-20 bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Kurumsal Fiyat Teklifi Alın
          </h2>
          <p className="text-sm text-gray-500 mt-2 font-normal">
            İhtiyaç listenizi bize iletin, satış ekibimiz en kısa sürede firmanıza özel toptan fiyat çalışmasıyla dönüş yapsın.
          </p>
        </div>

        {/* 2-Column Minimal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Minimal Quote Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs text-left">
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              Teklif Talep Formu
            </h3>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Talebiniz Alındı
                </h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Sayın <span className="font-medium text-gray-800">{formData.fullName}</span>, <span className="font-medium text-gray-800">{formData.companyName}</span> için hazırlanan özel teklifimiz en kısa sürede iletilecektir.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setSelectedFileName('');
                  }}
                  className="mt-2 text-xs font-semibold text-[#0038e3] hover:underline"
                >
                  Yeni Form Doldur
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Firma / Kurum Ünvanı *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: ABC Lojistik A.Ş."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-[#0038e3] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Yetkili Adı Soyadı *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Adınız ve Soyadınız"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-[#0038e3] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Telefon Numarası *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-[#0038e3] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      E-Posta Adresi
                    </label>
                    <input
                      type="email"
                      placeholder="ad.soyad@firma.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-[#0038e3] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      İlgilendiğiniz Kategori
                    </label>
                    <select
                      value={formData.categoryInterest}
                      onChange={(e) => setFormData({ ...formData, categoryInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-[#0038e3] focus:outline-none transition-colors"
                    >
                      <option value="Tüm Kalemler (Karma Liste)">Tüm Kalemler (Karma Liste)</option>
                      <option value="Temizlik Kimyasalları">Temizlik Kimyasalları</option>
                      <option value="Kağıt & Mutfak Grubu">Kağıt & Mutfak Grubu</option>
                      <option value="Bardak & Ambalaj">Bardak & Ambalaj</option>
                      <option value="Çöp Torbaları & Atık">Çöp Torbaları & Atık</option>
                      <option value="Temizlik Gereçleri">Temizlik Gereçleri</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    İhtiyaç Notunuz veya Tahmini Miktar
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Talep ettiğiniz ürünleri veya özel isteklerinizi yazabilirsiniz..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-[#0038e3] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Minimal File Upload */}
                <div>
                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer text-xs font-medium text-gray-700 transition-colors">
                      <Paperclip className="w-3.5 h-3.5 text-gray-500" />
                      <span>{selectedFileName || 'Excel / PDF Liste Ekle'}</span>
                      <input 
                        type="file" 
                        accept=".xlsx,.xls,.pdf,.docx,.doc" 
                        onChange={handleFileChange}
                        className="hidden" 
                      />
                    </label>
                    {selectedFileName && (
                      <span className="text-[11px] text-emerald-600 font-medium">
                        ✓ Dosya seçildi
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#0038e3] hover:bg-[#002bb8] text-white font-medium text-xs shadow-xs transition-colors"
                  >
                    Teklif Talebini Gönder
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Clean & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Quick WhatsApp Action Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Hızlı WhatsApp Teklifi
              </h4>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed font-normal">
                Mevcut sarf malzeme tüketim listenizi fotoğraf veya dosya olarak doğrudan WhatsApp hattımıza iletebilirsiniz.
              </p>
              <a
                href="https://wa.me/905321112233?text=Merhaba,%20kurumsal%20ürün%20fiyat%20teklifi%20almak%20istiyoruz."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ile Liste Gönder</span>
              </a>
            </div>

            {/* Direct Contact Details */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs space-y-4 text-xs">
              <h4 className="text-sm font-semibold text-gray-900 pb-2 border-b border-gray-100">
                İletişim Bilgileri
              </h4>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-400 block font-normal">Müşteri Temsilcisi</span>
                    <a href="tel:+908503000000" className="font-semibold text-gray-900 hover:text-[#0038e3]">
                      0850 300 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-400 block font-normal">E-Posta</span>
                    <a href="mailto:teklif@burtemis.com.tr" className="font-semibold text-gray-900 hover:text-[#0038e3]">
                      teklif@burtemis.com.tr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-400 block font-normal">Çalışma Saatleri</span>
                    <span className="font-medium text-gray-700">
                      Hafta içi 08:30 - 18:30
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-400 block font-normal">Lojistik & Merkez</span>
                    <span className="font-medium text-gray-700">
                      Organize Sanayi Bölgesi, İstanbul & Bursa Depoları
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-400">
                Marmara Bölgesi aynı gün kendi araçlarımızla, Türkiye geneli 81 ile anlaşmalı ambar kargo ile sevkiyat yapılmaktadır.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
