import React, { useState } from 'react';
import { 
  X, 
  Package, 
  Check, 
  MessageCircle, 
  Plus, 
  Minus, 
  ShieldCheck,
  Truck
} from 'lucide-react';

const getProductImage = (product) => {
  if (product.image) return product.image;
  
  if (product.category === 'kimyasal') {
    if (product.volumeSize?.includes('30 LT') || product.volumeSize?.includes('20 LT')) {
      return '/images/industrial_canister.jpg';
    }
    if (product.subCategory?.includes('Sprey')) {
      return '/images/starter_kit.jpg';
    }
    if (product.subCategory?.includes('Çamaşır') || product.name?.includes('Çamaşır')) {
      return '/images/laundry_pouch.jpg';
    }
    if (product.subCategory?.includes('Bulaşık') || product.name?.includes('Bulaşık')) {
      return '/images/dish_canister.jpg';
    }
    if (product.name?.includes('Sabun')) {
      return '/images/soap_dispenser.jpg';
    }
    return '/images/industrial_canister.jpg';
  }
  
  if (product.category === 'sabun') return '/images/soap_dispenser.jpg';
  if (product.category === 'bulasik') return '/images/dish_canister.jpg';
  if (product.category === 'kagit') return 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=600&auto=format&fit=crop&q=80';
  if (product.category === 'ambalaj') return 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80';
  if (product.category === 'cop-torbasi') return 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=80';
  if (product.category === 'gerec') return 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80';
  
  return '/images/starter_kit.jpg';
};

export default function ProductModal({ 
  product, 
  onClose, 
  onAddToQuote 
}) {
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const handleAddWithQty = () => {
    onAddToQuote(product, quantity);
    setJustAdded(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Merhaba Burtemis Satış Ekibi, ${product.name} (${quantity} Koli/Birim) hakkında kurumsal toptan fiyat teklifi rica ediyorum.`
    );
    return `https://wa.me/905321112233?text=${text}`;
  };

  const productImage = getProductImage(product);

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content - 2 Columns (Photo + Info) */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          
          {/* Left Column: Big Clean Product Photo */}
          <div className="md:col-span-5 bg-[#f8f9fa] p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-gray-100">
            <div className="w-full aspect-square max-w-[280px] flex items-center justify-center">
              <img 
                src={productImage} 
                alt={product.name} 
                className="w-full h-full object-cover rounded-2xl shadow-sm"
              />
            </div>
            
            {/* Quick Spec Pill */}
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-2xs">
              <Package className="w-3.5 h-3.5 text-[#0038e3]" />
              <span>{product.volumeSize}</span>
            </div>
          </div>

          {/* Right Column: Clean Product Information & Actions */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              {/* Category */}
              <span className="text-xs font-bold uppercase tracking-wider text-[#0038e3] block">
                {product.categoryLabel || 'Endüstriyel Ürün'}
              </span>

              {/* Bold & Trustworthy Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                {product.name}
              </h2>

              {/* Packaging */}
              <div className="text-xs font-medium text-gray-600 bg-gray-50 px-3 py-2 rounded-xl border border-gray-150 inline-block">
                <span className="text-gray-400">Paketleme / Koli:</span>{' '}
                <span className="text-gray-900 font-semibold">{product.packaging || product.volumeSize}</span>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal pt-1">
                {product.shortDesc}
              </p>

              {/* Key Features List (Max 3, clean checkmarks) */}
              {product.features && product.features.length > 0 && (
                <div className="pt-2 space-y-1.5">
                  {product.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions: Stepper + Add To Basket + WhatsApp */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50/60 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg hover:bg-white text-gray-700 flex items-center justify-center transition-colors"
                    title="Azalt"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg hover:bg-white text-gray-700 flex items-center justify-center transition-colors"
                    title="Artır"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Primary Add to Basket Button */}
                <button
                  onClick={handleAddWithQty}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95 ${
                    justAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#0038e3] hover:bg-[#002bb8] text-white shadow-blue-600/20'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Sepete Eklendi!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Teklif Sepetine Ekle ({quantity} Adet)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick WhatsApp Action */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp ile Hızlı Fiyat İste</span>
              </a>

              {/* Trust badges */}
              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                <span className="flex items-center gap-1 font-medium">
                  <Truck className="w-3.5 h-3.5 text-gray-500" />
                  Hızlı Kurumsal Sevkiyat
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  B2B Toptan Fiyat Garantisi
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
