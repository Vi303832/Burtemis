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
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  FileText,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteDrawer({ 
  isOpen, 
  onClose, 
  items = [], 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) {
  const [activeStep, setActiveStep] = useState('list'); // 'list' or 'form' or 'success'
  const [quoteReference, setQuoteReference] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    phone: '',
    email: '',
    city: 'İstanbul',
    supplyFrequency: 'Aylık Düzenli Tedarik',
    notes: ''
  });

  if (!isOpen) return null;

  const totalItemCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  // Generate WhatsApp Message with all items formatted
  const handleSendViaWhatsApp = () => {
    if (items.length === 0) return;

    let message = `*BURTEMİS TOPTAN TEKLİF TALEBİ*\n\n`;
    if (formData.companyName) {
      message += `*Firma:* ${formData.companyName}\n`;
      message += `*Yetkili:* ${formData.fullName}\n`;
      message += `*Telefon:* ${formData.phone}\n`;
      message += `*Şehir:* ${formData.city}\n\n`;
    }
    message += `*Talep Edilen Ürün Listesi:*\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (${item.volumeSize}) - *${item.quantity || 1} Adet/Koli*\n`;
      message += `   _Standart: ${item.packaging}_\n`;
    });

    if (formData.notes) {
      message += `\n*Özel Not:* ${formData.notes}\n`;
    }
    message += `\nLütfen kurumsal toptan fiyat teklifinizi iletir misiniz?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/905321112233?text=${encoded}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone || !formData.fullName) {
      alert('Lütfen zorunlu alanları (Firma, Ad Soyad, Telefon) eksiksiz doldurunuz.');
      return;
    }

    const refNumber = 'BRT-TK-' + Math.floor(100000 + Math.random() * 900000);
    setQuoteReference(refNumber);
    setActiveStep('success');

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 }
    });
  };

  const resetAndClose = () => {
    setActiveStep('list');
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-brand-900/60 backdrop-blur-xs flex justify-end">
      
      {/* Backdrop click to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Slide-out Drawer Box */}
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-slideLeft text-left border-l border-borderSubtle">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-borderSubtle/80 flex items-center justify-between bg-surface-lowest">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-50 border border-brand-200 text-brand-600">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-brand-900">
                Teklif Sepetim
              </h2>
              <p className="text-xs text-textMuted">
                {items.length > 0 
                  ? `${items.length} Kalem (${totalItemCount} Adet/Koli) seçildi`
                  : 'Listenizde henüz ürün bulunmuyor'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-textMuted hover:text-textDark hover:bg-surface-low transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          
          {/* STEP 1: Product List */}
          {activeStep === 'list' && (
            <>
              {items.length === 0 ? (
                <div className="text-center py-20 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-surface-low mx-auto flex items-center justify-center text-textMuted/40">
                    <ShoppingCart className="w-8 h-8" />
                  </div>
                  <h3 className="text-sm font-bold text-brand-900">Teklif Listeniz Boş</h3>
                  <p className="text-xs text-textMuted max-w-xs mx-auto">
                    Katalogdan ilgilendiğiniz temizlik kimyasalı, kağıt havlu veya ambalaj ürünlerini "Teklife Ekle" butonu ile ekleyin.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition-colors"
                  >
                    Ürünleri İncele
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-textMuted pb-1">
                    <span>Eklenen Ürünler</span>
                    <button
                      onClick={onClearCart}
                      className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Listeyi Temizle</span>
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-surface-low border border-borderSubtle flex items-start justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-brand-700 bg-white px-2 py-0.5 rounded border border-brand-200">
                            {item.volumeSize}
                          </span>
                          <span className="text-[10px] text-textMuted font-medium truncate">
                            {item.categoryLabel}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-brand-900 leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-textMuted mt-0.5">
                          {item.packaging}
                        </p>

                        {/* Stepper */}
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-[11px] text-textMuted font-medium">Adet:</span>
                          <div className="flex items-center border border-borderSubtle rounded-lg bg-white">
                            <button
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                              className="p-1 hover:bg-surface-low text-textDark"
                              title="Azalt"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center text-xs font-bold text-brand-900">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                              className="p-1 hover:bg-surface-low text-textDark"
                              title="Artır"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="text-[11px] text-textMuted">Koli / Birim</span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-textMuted hover:text-red-600 p-1 transition-colors"
                        title="Ürünü Çıkar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {/* 30-min quote badge */}
                  <div className="p-3 rounded-xl bg-brand-50 border border-brand-200 text-brand-800 text-xs flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <span>30 dakika içinde firmanıza özel resmi fiyat teklifi hazırlanır.</span>
                  </div>
                </div>
              )}
            </>
          )}

          {/* STEP 2: Quote Submission Form */}
          {activeStep === 'form' && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="p-3 bg-brand-50 rounded-xl border border-brand-200 text-xs text-brand-900">
                <span className="font-bold block">Seçilen {items.length} Kalem Ürün İçin Teklif</span>
                <span className="text-textMuted text-[11px]">Lütfen iletişim bilgilerinizi giriniz. Teklif formunuz satış uzmanımıza anında iletilecektir.</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-textDark mb-1">
                  Firma / Kurum Ünvanı *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Örn: ABC Lojistik A.Ş."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-textDark mb-1">
                  Yetkili Adı Soyadı *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ad Soyad"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
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
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-textDark mb-1">
                    E-Posta Adresi
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="ad@firma.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-textDark mb-1">
                    Teslimat Şehri
                  </label>
                  <input
                    type="text"
                    placeholder="İstanbul, Bursa..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-textDark mb-1">
                    Tedarik Periyodu
                  </label>
                  <select
                    value={formData.supplyFrequency}
                    onChange={(e) => setFormData({ ...formData, supplyFrequency: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Aylık Düzenli Tedarik">Aylık Düzenli Tedarik</option>
                    <option value="Tek Seferlik Toplu Alım">Tek Seferlik Toplu Alım</option>
                    <option value="3 Aylık Dönemsel">3 Aylık Dönemsel</option>
                    <option value="Yıllık Sözleşmeli İhale">Yıllık Sözleşmeli İhale</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-textDark mb-1">
                  Ek Açıklamalar & Numune İsteği
                </label>
                <textarea
                  rows="3"
                  placeholder="Varsa özel paketleme, teslimat şartı veya numune isteğinizi yazınız..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-500"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStep('list')}
                  className="px-4 py-2.5 rounded-xl border border-borderSubtle text-xs font-bold text-textDark hover:bg-surface-low"
                >
                  Geri Dön
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-600/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Resmi Teklif Talep Et</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Success Confirmation */}
          {activeStep === 'success' && (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-extrabold text-brand-900">
                Teklif Talebiniz Başarıyla Alındı!
              </h3>
              <div className="p-3 bg-surface-low rounded-xl border border-borderSubtle inline-block text-xs">
                <span className="text-textMuted block">Teklif Takip Numaranız:</span>
                <span className="font-mono font-bold text-brand-700 text-sm">{quoteReference}</span>
              </div>
              <p className="text-xs text-textMuted max-w-sm mx-auto leading-relaxed">
                Satış uzmanımız <span className="font-bold text-textDark">{formData.companyName}</span> için hazırlanan resmi fiyat teklifini ve iskonto oranlarını 30 dakika içerisinde <span className="font-bold text-textDark">{formData.phone}</span> numaralı telefonunuza iletecektir.
              </p>
              
              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={handleSendViaWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Bu Listeyi WhatsApp Satış Hattına da Gönder</span>
                </button>

                <button
                  onClick={resetAndClose}
                  className="w-full py-2.5 rounded-xl border border-borderSubtle text-textDark font-semibold text-xs hover:bg-surface-low"
                >
                  Kapat ve Alışverişe Devam Et
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Drawer Footer with Actions */}
        {activeStep === 'list' && items.length > 0 && (
          <div className="p-5 border-t border-borderSubtle bg-white space-y-2.5">
            {/* Primary Action: Go to Form */}
            <button
              onClick={() => setActiveStep('form')}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-bold text-xs shadow-md shadow-brand-600/25 transition-all"
              id="teklif-talep-et-btn"
            >
              <span>Teklif Talep Formunu Doldur</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Quick WhatsApp Share Action */}
            <button
              onClick={handleSendViaWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition-colors"
              title="Sepetteki tüm ürünleri WhatsApp mesajı olarak anında gönder"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Tüm Listeyi WhatsApp'tan Tek Tıkla Gönder</span>
            </button>

            <div className="text-[11px] text-center text-textMuted pt-1 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>30 dakika içinde garantili teklif geri dönüşü</span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
