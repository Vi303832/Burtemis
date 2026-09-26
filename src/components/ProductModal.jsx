import React, { useState } from 'react';
import { 
  X, 
  Package, 
  CheckCircle2, 
  Building2, 
  MessageCircle, 
  Plus, 
  Minus, 
  Send, 
  ShieldCheck, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProductModal({ 
  product, 
  onClose, 
  onAddToQuote 
}) {
  const [quantity, setQuantity] = useState(1);
  const [sampleRequested, setSampleRequested] = useState(false);
  const [sampleForm, setSampleForm] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    city: '',
    sampleType: 'Numune & Teknik Fiyat Talebi'
  });

  if (!product) return null;

  const handleAddWithQty = () => {
    onAddToQuote(product, quantity);
    onClose();
  };

  const handleSampleSubmit = (e) => {
    e.preventDefault();
    if (!sampleForm.phone || !sampleForm.companyName) {
      alert('Lütfen Firma Adı ve Telefon numaranızı belirtiniz.');
      return;
    }
    setSampleRequested(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Merhaba Burtemis Satış Ekibi, ${product.name} (${quantity} Koli/Birim) hakkında kurumsal toptan fiyat teklifi ve teknik şartname bilgisi rica ediyorum.`
    );
    return `https://wa.me/905321112233?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      {/* Modal Box */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-borderSubtle overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-surface-low hover:bg-surface-container text-textDark transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          
          {/* Left Column: Product Visuals & Specs */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 border-b md:border-b-0 md:border-r border-borderSubtle">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                  {product.categoryLabel}
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {product.badge}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-brand-900 leading-snug">
                {product.name}
              </h2>
              <p className="text-xs text-textMuted mt-1">
                Alt Grup: <span className="font-semibold text-textDark">{product.subCategory}</span>
              </p>
            </div>

            {/* Packaging Highlight Banner */}
            <div className="bg-surface-low rounded-2xl p-4 border border-borderSubtle flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-white shadow-xs text-brand-600">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-900 block">Koli ve Ambalaj Standardı</span>
                <p className="text-xs text-textMuted font-medium mt-0.5">{product.packaging}</p>
                <div className="mt-1 text-[11px] text-brand-700 font-semibold">
                  Birim Hacim / Ebat: {product.volumeSize}
                </div>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-xs text-textDark leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Technical Specifications Table */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-textMuted mb-2 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-brand-600" />
                <span>Teknik Özellikler ve Standartlar</span>
              </h3>
              <div className="bg-surface-lowest rounded-xl border border-borderSubtle divide-y divide-borderSubtle text-xs">
                {Object.entries(product.specs || {}).map(([key, val], idx) => (
                  <div key={idx} className="flex justify-between p-2.5">
                    <span className="text-textMuted font-medium">{key}</span>
                    <span className="font-semibold text-brand-900 text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Areas */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-textMuted block mb-2">
                Tavsiye Edilen Kullanım Alanları
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.usageAreas?.map((area, idx) => (
                  <span 
                    key={idx}
                    className="text-[11px] font-medium bg-surface-low text-textDark px-2.5 py-1 rounded-lg border border-borderSubtle"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-1.5 pt-2">
              {product.features?.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-textDark">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Actions + Numune / Toplu Teklif Formu */}
          <div className="md:col-span-5 p-6 sm:p-8 bg-surface-low/50 flex flex-col justify-between space-y-6">
            
            {/* Direct Quote Basket Addition Card */}
            <div className="bg-white p-5 rounded-2xl border border-borderSubtle shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-borderSubtle/60">
                <span className="text-xs font-bold text-brand-900">Teklif Sepetine Ekle</span>
                <span className="text-[11px] font-semibold text-textMuted">Toptan Fiyat Talebi</span>
              </div>

              {/* Quantity Stepper */}
              <div>
                <label className="block text-xs font-medium text-textMuted mb-1.5">
                  Talep Edilen Tahmini Adet (Koli / Bidon):
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-borderSubtle rounded-xl bg-surface-low overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-surface-container text-textDark"
                      title="Azalt"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-xs font-bold text-brand-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-surface-container text-textDark"
                      title="Artır"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-textMuted font-medium">Birim / Koli</span>
                </div>
              </div>

              {/* Add to Basket Action */}
              <button
                onClick={handleAddWithQty}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-600/20 active:scale-95 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Teklif Sepetime Ekle ({quantity} Adet)</span>
              </button>

              {/* WhatsApp Single Product Link */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Bu Ürün İçin WhatsApp Teklifi Al</span>
              </a>
            </div>

            {/* Numune / Toplu Sipariş Talep Formu */}
            <div className="bg-white p-5 rounded-2xl border border-borderSubtle shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-accentOrange" />
                <h3 className="text-xs font-bold text-brand-900">Numune / Şartname Talebi</h3>
              </div>
              <p className="text-[11px] text-textMuted mb-3">
                Fabrika veya kurumunuz için bu üründen ücretsiz numune veya detaylı teknik şartname talep edebilirsiniz.
              </p>

              {sampleRequested ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-1 text-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                  <span className="font-bold block">Talebiniz Alındı!</span>
                  <p className="text-[11px] text-emerald-700">
                    Müşteri temsilcimiz numune gönderimi için firmanızla 30 dakika içinde iletişime geçecektir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSampleSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    placeholder="Firma / Kurum Ünvanı *"
                    required
                    value={sampleForm.companyName}
                    onChange={(e) => setSampleForm({ ...sampleForm, companyName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle text-textDark placeholder:text-textMuted/60 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                  <input
                    type="text"
                    placeholder="Yetkili Adı Soyadı"
                    value={sampleForm.contactName}
                    onChange={(e) => setSampleForm({ ...sampleForm, contactName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle text-textDark placeholder:text-textMuted/60 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon Numarası *"
                    required
                    value={sampleForm.phone}
                    onChange={(e) => setSampleForm({ ...sampleForm, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-surface-low border border-borderSubtle text-textDark placeholder:text-textMuted/60 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Numune Gönderimi Talep Et</span>
                  </button>
                </form>
              )}
            </div>

            {/* Micro note */}
            <div className="flex items-center gap-2 text-[11px] text-textMuted">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Verilen bilgiler yalnızca teklif ve numune iletişimi için kullanılır.</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
