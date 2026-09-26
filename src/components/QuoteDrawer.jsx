import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  Send,
  MessageCircle,
  CheckCircle2,
  ShoppingCart,
  ArrowRight,
} from 'lucide-react';

export default function QuoteDrawer({
  isOpen,
  onClose,
  items = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [activeStep, setActiveStep] = useState('list'); // 'list' | 'form' | 'success'
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  if (!isOpen) return null;

  const totalItemCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleSendViaWhatsApp = () => {
    if (items.length === 0) return;

    let message = `*BURTEMİS TOPTAN TEKLİF TALEBİ*\n\n`;
    if (formData.companyName) {
      message += `*Firma:* ${formData.companyName}\n`;
      message += `*Yetkili:* ${formData.fullName}\n`;
      message += `*Telefon:* ${formData.phone}\n\n`;
    }
    message += `*Talep Edilen Ürün Listesi:*\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (${item.volumeSize}) — ${item.quantity || 1} Adet/Koli\n`;
    });

    if (formData.notes) {
      message += `\n*Not:* ${formData.notes}\n`;
    }
    message += `\nLütfen kurumsal toptan fiyat teklifinizi iletir misiniz?`;

    window.open(`https://wa.me/905321112233?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone || !formData.fullName) {
      alert('Lütfen zorunlu alanları (Firma, Ad Soyad, Telefon) eksiksiz doldurunuz.');
      return;
    }
    setActiveStep('success');
  };

  const resetAndClose = () => {
    setActiveStep('list');
    setFormData({ companyName: '', fullName: '', phone: '', email: '', notes: '' });
    onClearCart();
    onClose();
  };

  const inputClass =
    'w-full px-3.5 py-2.5 text-xs rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#0038e3] focus:outline-none transition-colors';

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-[2px] flex justify-end">
      <div className="flex-1" onClick={onClose} />

      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col overflow-hidden animate-slideLeft text-left border-l border-gray-100">
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-gray-900">Teklif Sepetim</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {items.length > 0
                ? `${items.length} ürün · ${totalItemCount} adet/koli`
                : 'Henüz ürün eklenmedi'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {activeStep === 'list' && (
            <>
              {items.length === 0 ? (
                <div className="text-center py-16 px-4 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gray-50 mx-auto flex items-center justify-center text-gray-300">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">Sepetiniz boş</h3>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    Katalogdan ürünleri &ldquo;Teklife Ekle&rdquo; ile ekleyin.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 px-5 py-2.5 rounded-xl bg-[#0038e3] text-white text-xs font-semibold hover:bg-[#002bb8] transition-colors"
                  >
                    Ürünleri İncele
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-end">
                    <button
                      onClick={onClearCart}
                      className="text-xs text-gray-400 hover:text-red-600 font-medium flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Temizle
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="py-3 border-b border-gray-100 last:border-0 flex items-start justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-gray-900 leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {item.volumeSize}
                          {item.packaging ? ` · ${item.packaging}` : ''}
                        </p>

                        <div className="mt-2.5 flex items-center gap-2">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))
                              }
                              className="p-1.5 hover:bg-gray-50 text-gray-600"
                              title="Azalt"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-7 text-center text-xs font-semibold text-gray-900">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                              className="p-1.5 hover:bg-gray-50 text-gray-600"
                              title="Artır"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-300 hover:text-red-500 p-1 transition-colors"
                        title="Çıkar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {activeStep === 'form' && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <p className="text-xs text-gray-500">
                {items.length} ürün için iletişim bilgilerinizi girin.
              </p>

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

              <div className="grid grid-cols-2 gap-3">
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
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    E-Posta
                  </label>
                  <input
                    type="email"
                    placeholder="ad@firma.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Not (isteğe bağlı)
                </label>
                <textarea
                  rows="2"
                  placeholder="Özel istek veya teslimat notu..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveStep('list')}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Geri
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0038e3] hover:bg-[#002bb8] text-white text-xs font-semibold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  Teklif Talep Et
                </button>
              </div>
            </form>
          )}

          {activeStep === 'success' && (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Talebiniz alındı</h3>
              <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                {formData.companyName} için teklifiniz en kısa sürede{' '}
                {formData.phone} numarasına iletilecektir.
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={handleSendViaWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp&apos;tan da Gönder
                </button>
                <button
                  onClick={resetAndClose}
                  className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-xs hover:bg-gray-50"
                >
                  Kapat
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {activeStep === 'list' && items.length > 0 && (
          <div className="p-5 border-t border-gray-100 space-y-2">
            <button
              onClick={() => setActiveStep('form')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0038e3] hover:bg-[#002bb8] text-white font-semibold text-xs transition-colors"
            >
              Teklif Formuna Geç
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleSendViaWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[#25D366] hover:bg-emerald-50 font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp ile Gönder
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
