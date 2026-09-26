import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  Check, 
  Package
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';

// Clean, high quality professional product images mapper
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
  
  if (product.category === 'sabun') {
    return '/images/soap_dispenser.jpg';
  }
  if (product.category === 'bulasik') {
    return '/images/dish_canister.jpg';
  }
  if (product.category === 'kagit') {
    return 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=600&auto=format&fit=crop&q=80';
  }
  if (product.category === 'ambalaj') {
    return 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80';
  }
  if (product.category === 'cop-torbasi') {
    return 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=80';
  }
  if (product.category === 'gerec') {
    return 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80';
  }
  
  return '/images/starter_kit.jpg';
};

export default function ProductCatalog({
  activeCategory,
  onSelectCategory,
  onAddToQuote,
  onViewProductDetail,
  quoteItems = []
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemAnimation, setAddedItemAnimation] = useState(null);

  // Filter products by category & search
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = 
        activeCategory === 'all' || product.category === activeCategory;
      
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDesc.toLowerCase().includes(q) ||
        product.packaging.toLowerCase().includes(q) ||
        product.volumeSize.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAddClick = (product, e) => {
    e.stopPropagation();
    onAddToQuote(product, 1);
    setAddedItemAnimation(product.id);
    setTimeout(() => {
      setAddedItemAnimation(null);
    }, 1200);
  };

  const isItemInQuote = (productId) => {
    return quoteItems.some(item => item.id === productId);
  };

  return (
    <section id="urunler" className="py-16 sm:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Simple, no pill badges */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Ürün Kataloğu
          </h2>
          <p className="text-sm text-gray-500 mt-2 font-normal">
            Tüm endüstriyel hijyen, kağıt ve sarf malzeme çözümlerimizi inceleyebilir, listenize ekleyerek toptan fiyat teklifi alabilirsiniz.
          </p>
        </div>

        {/* Minimal Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          
          {/* Categories Pill Navigation - Clean & Neutral */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Minimal Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ürün ara..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-gray-400 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Products Grid - Extremely Simple: Photo + Info Only */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl p-8 space-y-3">
            <Package className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="text-sm font-medium text-gray-900">Aradığınız kriterlere uygun ürün bulunamadı</h3>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="text-xs text-[#0038e3] font-medium hover:underline"
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
            {filteredProducts.map((product) => {
              const inQuote = isItemInQuote(product.id);
              const isJustAdded = addedItemAnimation === product.id;
              const productImage = getProductImage(product);

              return (
                <div
                  key={product.id}
                  onClick={() => onViewProductDetail(product)}
                  className="group bg-white rounded-2xl border border-gray-100/90 hover:border-gray-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Product Photo Box - Clean, Neutral Background */}
                  <div className="relative w-full aspect-square bg-[#f8f9fa] overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={productImage} 
                      alt={product.name} 
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info - Simple & Clear */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Packaging / Volume Tag */}
                      <span className="text-[11px] font-medium text-gray-400 block mb-1">
                        {product.packaging || product.volumeSize}
                      </span>

                      {/* Product Name */}
                      <h3 
                        className="text-sm font-medium text-gray-900 group-hover:text-[#0038e3] transition-colors line-clamp-2 leading-snug"
                        title={product.name}
                      >
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed font-light">
                        {product.shortDesc}
                      </p>
                    </div>

                    {/* Action Button - Simple & Clean */}
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-800">
                        {product.volumeSize}
                      </span>

                      <button
                        onClick={(e) => handleAddClick(product, e)}
                        className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          isJustAdded
                            ? 'bg-emerald-600 text-white'
                            : inQuote
                            ? 'bg-blue-50 text-[#0038e3] border border-blue-200'
                            : 'bg-gray-900 hover:bg-[#0038e3] text-white'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Eklendi</span>
                          </>
                        ) : inQuote ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Listede</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Teklife Ekle</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
