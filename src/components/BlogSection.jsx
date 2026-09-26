import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Sparkles,
  Share2
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="py-20 bg-surface-low/50 border-b border-borderSubtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight">
              Sektörel Çözümler & Satın Alma Rehberi
            </h2>
            <p className="mt-2 text-textMuted text-sm max-w-xl">
              İşletmeler için doğru gramaj seçimi, dispenser tasarrufu ve kimyasal tüketim optimizasyonu hakkında uzman rehberleri.
            </p>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="flex flex-col justify-between rounded-3xl bg-white border border-borderSubtle/80 hover:border-brand-300 hover:shadow-card-hover transition-all duration-300 p-6 sm:p-7 cursor-pointer group text-left"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-textMuted mb-3">
                  <span className="font-medium text-gray-500">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-brand-900 group-hover:text-brand-600 transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-xs text-textMuted leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-borderSubtle/60 flex items-center justify-between text-xs font-bold text-brand-600 group-hover:text-brand-700">
                <span>Yazının Tamamını Oku</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-borderSubtle p-6 sm:p-8 text-left my-8 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-surface-low hover:bg-surface-container text-textDark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 font-medium">
              <span>{selectedPost.category}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <h2 className="text-2xl font-extrabold text-brand-900 leading-snug mb-4">
              {selectedPost.title}
            </h2>

            <div className="prose prose-sm text-xs sm:text-sm text-textDark leading-relaxed space-y-4 whitespace-pre-line border-t border-borderSubtle pt-4">
              {selectedPost.content}
            </div>

            <div className="mt-8 pt-4 border-t border-borderSubtle flex items-center justify-between">
              <span className="text-xs font-semibold text-textMuted">
                Burtemis Kurumsal İçerik Ekibi
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
