import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { BLOG_POSTS } from '../data/blogs';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Search, 
  Tag, 
  HelpCircle, 
  CheckCircle2, 
  MessageCircle, 
  ShoppingBag, 
  X,
  Share2,
  Calendar,
  User,
  Sparkles
} from 'lucide-react';

export default function BlogPage({
  quoteItemsCount,
  onOpenQuoteDrawer,
  onOpenCatalogModal,
  onNavigate,
  onSelectCategory,
  onGoHome,
  initialPostId = null,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePost, setActivePost] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (initialPostId) {
      const found = BLOG_POSTS.find(p => p.id === initialPostId);
      if (found) setActivePost(found);
    }
  }, [initialPostId]);

  const categories = [
    { id: 'all', label: 'Tüm Rehberler' },
    { id: 'kimyasal', label: 'Temizlik Kimyasalları' },
    { id: 'kagit', label: 'Kağıt & Mutfak' },
    { id: 'kurumsal', label: 'Kurumsal Hijyen & HACCP' },
    { id: 'cop-torbasi', label: 'Çöp Torbaları' },
    { id: 'ambalaj', label: 'Bardak & Ambalaj' },
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = 
      selectedCategory === 'all' || 
      post.categorySlug === selectedCategory ||
      (selectedCategory === 'kimyasal' && post.category.toLowerCase().includes('kimyasal')) ||
      (selectedCategory === 'kagit' && post.category.toLowerCase().includes('kağıt')) ||
      (selectedCategory === 'kurumsal' && post.category.toLowerCase().includes('kurumsal')) ||
      (selectedCategory === 'cop-torbasi' && post.category.toLowerCase().includes('çöp')) ||
      (selectedCategory === 'ambalaj' && post.category.toLowerCase().includes('ambalaj'));

    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesSearch = 
      post.title.toLowerCase().includes(q) ||
      post.summary.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q) ||
      (post.keywords && post.keywords.some(k => k.toLowerCase().includes(q)));

    return matchesCategory && matchesSearch;
  });

  const handleShare = (post) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0d1829] font-sans antialiased selection:bg-[#bad5ff] selection:text-[#0025a6]">
      
      {/* Header */}
      <Header
        quoteItemsCount={quoteItemsCount}
        onOpenQuoteDrawer={onOpenQuoteDrawer}
        onOpenCatalogModal={onOpenCatalogModal}
        currentSection="blog"
        onNavigate={onNavigate}
        onSelectCategory={onSelectCategory}
      />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
            <button
              onClick={onGoHome}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#0038e3] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Ana Sayfa
            </button>
            <span className="text-gray-300 text-xs">/</span>
            <span className="text-xs font-semibold text-gray-900">Blog &amp; Sektörel Satın Alma Rehberi</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-[#0c1a3a] via-[#0025a6] to-[#0038e3] text-white py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
              Sektörel Hijyen Çözümleri &amp; Satın Alma Rehberi
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              İşletmeler için doğru temizlik kimyasalı seçimi, kağıt havlu ve dispenser tasarrufu, HACCP kuralları ve çöp torbası standartları hakkında uzman rehberler.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Konu, ürün veya anahtar kelime arayın (örn: Z katlama, 30 LT, dispenser, HACCP)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3.5 rounded-full bg-white text-gray-900 placeholder-gray-400 text-sm font-medium shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/30 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-gray-400 hover:text-gray-600 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories Bar */}
        <section className="bg-white border-b border-gray-200 sticky top-[72px] sm:top-[80px] z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-[#0038e3] text-white shadow-md shadow-blue-600/20'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Post List Grid */}
        <section className="py-12 sm:py-16 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs sm:text-sm font-semibold text-gray-500">
                Toplam <span className="text-gray-900 font-bold">{filteredPosts.length}</span> uzman rehberi bulundu
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800">Aramanızla eşleşen rehber bulunamadı</h3>
                <p className="text-xs text-gray-500 mt-1">Lütfen farklı anahtar kelimelerle tekrar deneyin veya filtreleri temizleyin.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="mt-4 px-5 py-2 rounded-full bg-[#0038e3] text-white text-xs font-bold hover:bg-[#002bb8]"
                >
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setActivePost(post)}
                    className="flex flex-col bg-white rounded-3xl border border-gray-200/80 hover:border-[#0038e3]/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group text-left"
                  >
                    {/* Card Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={post.image || '/hero_poster.jpg'}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium mb-2.5">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author || 'Burtemis'}
                          </span>
                        </div>

                        <h2 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0038e3] transition-colors leading-snug mb-3">
                          {post.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4 font-light">
                          {post.summary}
                        </p>
                      </div>

                      <div>
                        {/* Keyword Tags */}
                        {post.keywords && post.keywords.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.keywords.slice(0, 3).map((kw, kIdx) => (
                              <span
                                key={kIdx}
                                className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md"
                              >
                                #{kw}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0038e3] group-hover:text-[#002bb8]">
                          <span>Rehberi İncele</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* Quick CTA Box */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#0038e3] to-[#0025a6] text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  İşletmeniz İçin Toptan Fiyat Teklifi Alın
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl font-light">
                  İhtiyacınız olan tüm temizlik kimyasalları, kağıt ürünleri ve ambalaj malzemelerinde kurumsal avantajlı fiyatlar Burtemis'te.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <button
                  onClick={() => onNavigate('urunler')}
                  className="px-6 py-3 rounded-full bg-white text-[#0038e3] text-xs font-bold uppercase tracking-wider hover:bg-blue-50 transition-all shadow-md"
                >
                  Kataloğu İncele
                </button>
                <a
                  href="https://wa.me/905394059286?text=Merhaba%20Burtemis,%20blog%20sayfanızdan%20ulaşıyorum.%20Kurumsal%20fiyat%20teklifi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold tracking-wider flex items-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Teklif
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer
        onNavigate={onNavigate}
        onSelectCategory={onSelectCategory}
      />

      {/* Article Detail Modal / Full Reading View */}
      {activePost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0c1a3a]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div 
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 text-left my-8 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors shadow-sm"
              title="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Image */}
            <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full bg-gray-900 overflow-hidden">
              <img
                src={activePost.image || '/hero_poster.jpg'}
                alt={activePost.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10 -mt-10 relative z-10">
              
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0038e3]" />
                  {activePost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#0038e3]" />
                  {activePost.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-gray-700 font-semibold">
                  <User className="w-3.5 h-3.5 text-[#0038e3]" />
                  {activePost.author || 'Burtemis Editör Ekibi'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-snug mb-5">
                {activePost.title}
              </h1>

              {/* Keywords Tag Cloud */}
              {activePost.keywords && (
                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-gray-100">
                  {activePost.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold bg-blue-50 text-[#0038e3] px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3 opacity-70" />
                      {kw}
                    </span>
                  ))}
                </div>
              )}

              {/* Article Markdown/Pre formatted content */}
              <div className="prose prose-blue max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-light">
                {activePost.content}
              </div>

              {/* FAQ Section in Blog Post */}
              {activePost.faq && activePost.faq.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#0038e3]" />
                    Sıkça Sorulan Sorular
                  </h3>
                  <div className="space-y-3">
                    {activePost.faq.map((item, fIdx) => (
                      <div key={fIdx} className="bg-gray-50 rounded-2xl p-4 sm:p-5 border border-gray-200/80">
                        <h4 className="text-sm font-bold text-gray-900 mb-1.5 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{item.q}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 pl-6 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA and Actions in Modal */}
              <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/905394059286?text=Merhaba%20Burtemis,%20"${encodeURIComponent(activePost.title)}"%20yazınızı%20okudum.%20Bu%20konuda%20toptan%20ürün%20fiyatı%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp İle Danışın
                  </a>
                  <button
                    onClick={() => {
                      setActivePost(null);
                      onNavigate('urunler');
                    }}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0038e3] hover:bg-[#002bb8] text-white text-xs font-bold transition-all shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Katalog Ürünlerini Gör
                  </button>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => handleShare(activePost)}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#0038e3]" />
                    {copiedLink ? 'Bağlantı Kopyalandı!' : 'Paylaş'}
                  </button>
                  <button
                    onClick={() => setActivePost(null)}
                    className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                  >
                    Kapat
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
