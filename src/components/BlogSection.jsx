import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Sparkles,
  Share2,
  Tag,
  HelpCircle,
  MessageCircle,
  ShoppingBag
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';

export default function BlogSection({ onNavigate }) {
  const [selectedPost, setSelectedPost] = useState(null);

  // Ana sayfada ilk 3 rehberi öne çıkarıyoruz
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="py-20 sm:py-24 bg-[#f8fafc] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Kurumsal Hijyen &amp; Satın Alma Rehberi
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl font-light">
              İşletmeler için doğru kimyasal seçimi, dispenser tasarrufu, HACCP uyumu ve sarf malzeme optimizasyonu hakkında uzman makaleleri.
            </p>
          </div>

          {onNavigate && (
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0038e3] hover:bg-[#002bb8] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg self-start md:self-auto shrink-0"
            >
              <span>Tüm Rehberleri Gör ({BLOG_POSTS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="flex flex-col justify-between rounded-3xl bg-white border border-gray-200/80 hover:border-[#0038e3]/40 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group text-left"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={post.image || '/hero_poster.jpg'}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0038e3] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 font-light">
                    {post.summary}
                  </p>

                  {/* Keyword Tags */}
                  {post.keywords && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {post.keywords.slice(0, 2).map((kw, i) => (
                        <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                          #{kw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0038e3] group-hover:text-[#002bb8]">
                  <span>Rehberin Tamamını Oku</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500">
            Aklınıza takılan kurumsal hijyen soruları veya toptan siparişler için{' '}
            <button
              onClick={() => onNavigate ? onNavigate('iletisim') : null}
              className="text-[#0038e3] font-bold underline hover:text-[#002bb8]"
            >
              uzman ekibimizle iletişime geçin
            </button>
            .
          </p>
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0c1a3a]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 text-left my-8 max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              title="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-xs text-[#0038e3] font-bold uppercase tracking-wider">
              <span>{selectedPost.category}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-snug mb-4">
              {selectedPost.title}
            </h2>

            {/* Keyword tags */}
            {selectedPost.keywords && (
              <div className="flex flex-wrap gap-1.5 mb-4 pb-4 border-b border-gray-100">
                {selectedPost.keywords.map((kw, i) => (
                  <span key={i} className="text-[11px] font-semibold bg-blue-50 text-[#0038e3] px-2.5 py-0.5 rounded-full">
                    #{kw}
                  </span>
                ))}
              </div>
            )}

            <div className="prose prose-sm text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4 whitespace-pre-line font-light">
              {selectedPost.content}
            </div>

            {/* FAQ */}
            {selectedPost.faq && selectedPost.faq.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#0038e3]" />
                  Sıkça Sorulan Sorular
                </h3>
                <div className="space-y-2.5">
                  {selectedPost.faq.map((item, fIdx) => (
                    <div key={fIdx} className="bg-gray-50 rounded-xl p-3.5 border border-gray-200/60">
                      <p className="text-xs font-bold text-gray-900 mb-1 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item.q}</span>
                      </p>
                      <p className="text-xs text-gray-600 pl-5">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 pt-5 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-medium text-gray-500">
                Yazar: <strong className="text-gray-800">{selectedPost.author || 'Burtemis'}</strong>
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/905394059286?text=Merhaba%20Burtemis,%20"${encodeURIComponent(selectedPost.title)}"%20yazınız%20hakkında%20bilgi%20ve%20fiyat%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 flex items-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Teklif
                </a>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

