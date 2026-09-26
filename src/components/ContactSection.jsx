import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone || !formData.fullName) {
      alert('Lütfen Firma Adı, Yetkili Kişi ve Telefon alanlarını doldurunuz.');
      return;
    }
    setFormSubmitted(true);
  };

  const inputClass =
    'w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-[#0038e3] focus:outline-none transition-colors';

  return (
    <section id="iletisim" className="py-16 sm:py-20 bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0038e3] uppercase block mb-3">
            İLETİŞİM
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Kurumsal Fiyat Teklifi
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Sorularınız veya toptan ihtiyaç listeniz için formu doldurun; satış ekibimiz kısa sürede dönüş yapsın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 text-left">
            <h3 className="text-base font-semibold text-gray-900 mb-5">Teklif Formu</h3>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Talebiniz alındı</h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  {formData.fullName}, {formData.companyName} için teklifiniz en kısa sürede
                  iletilecektir.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      companyName: '',
                      fullName: '',
                      phone: '',
                      email: '',
                      notes: '',
                    });
                  }}
                  className="mt-2 text-xs font-semibold text-[#0038e3] hover:underline"
                >
                  Yeni Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Firma / Kurum *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: ABC Lojistik A.Ş."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className={inputClass}
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
                      placeholder="Ad Soyad"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">E-Posta</label>
                  <input
                    type="email"
                    placeholder="ad@firma.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Not (isteğe bağlı)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Ürün listesi veya özel istekleriniz..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0038e3] hover:bg-[#002bb8] text-white font-medium text-xs transition-colors"
                >
                  Teklif Talebini Gönder
                </button>
              </form>
            )}
          </div>

          {/* Contact side */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">WhatsApp</h4>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Listenizi fotoğraf veya dosya olarak doğrudan iletebilirsiniz.
              </p>
              <a
                href="https://wa.me/905321112233?text=Merhaba,%20kurumsal%20ürün%20fiyat%20teklifi%20almak%20istiyoruz."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ile Yaz
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 space-y-3.5 text-xs">
              <h4 className="text-sm font-semibold text-gray-900 pb-2 border-b border-gray-100">
                İletişim
              </h4>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 block">Telefon</span>
                  <a
                    href="tel:+908503000000"
                    className="font-semibold text-gray-900 hover:text-[#0038e3]"
                  >
                    0850 300 00 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 block">E-Posta</span>
                  <a
                    href="mailto:teklif@burtemis.com.tr"
                    className="font-semibold text-gray-900 hover:text-[#0038e3]"
                  >
                    teklif@burtemis.com.tr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 block">Saatler</span>
                  <span className="font-medium text-gray-700">Hafta içi 08:30 – 18:30</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 block">Depolar</span>
                  <span className="font-medium text-gray-700">İstanbul & Bursa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
