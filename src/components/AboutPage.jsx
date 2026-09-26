import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import StandardsSection from './StandardsSection';
import StartJourneyCTA from './StartJourneyCTA';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function AboutPage({
  quoteItemsCount,
  onOpenQuoteDrawer,
  onOpenCatalogModal,
  onNavigate,
  onSelectCategory,
  onGoHome,
  scrollToSection,
}) {
  useEffect(() => {
    if (!scrollToSection) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const timer = setTimeout(() => {
      const elem = document.getElementById(scrollToSection);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [scrollToSection]);

  const milestones = [
    {
      year: '2018',
      title: 'Kuruluş',
      desc: 'İstanbul’da çevre dostu konsantre temizlik formülleriyle yola çıktık.',
    },
    {
      year: '2021',
      title: 'Refill Sistemi',
      desc: 'Tek kullanımlık plastik şişeleri terk eden tablet ve refill modelini yaygınlaştırdık.',
    },
    {
      year: '2024',
      title: '4M+ Nokta',
      desc: 'Evlerden otellere, ofislerden endüstriyel tesislere milyonlarca noktaya ulaştık.',
    },
    {
      year: '2026',
      title: 'Sıfır Atık Hedefi',
      desc: 'Karbon nötr üretim ve %100 biyoçözünür formüllerle yolculuğumuza devam ediyoruz.',
    },
  ];

  const pillars = [
    {
      title: 'Gezegen Öncelikli',
      desc: 'Her formülümüz doğada çözünebilir içeriklerle tasarlanır; plastik atığı kaynağında keseriz.',
    },
    {
      title: 'Kanıtlanmış Performans',
      desc: 'Bağımsız laboratuvar testleri, TSE ve bakanlık onaylarıyla güvenilir hijyen sunarız.',
    },
    {
      title: 'Erişilebilir Temizlik',
      desc: 'Ev kullanıcısından kurumsal tesislere kadar her ölçekte adil fiyat ve güçlü sonuç.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0d1829] font-sans antialiased selection:bg-[#bad5ff] selection:text-[#0025a6]">

      <Header
        quoteItemsCount={quoteItemsCount}
        onOpenQuoteDrawer={onOpenQuoteDrawer}
        onOpenCatalogModal={onOpenCatalogModal}
        currentSection="kurumsal"
        onNavigate={onNavigate}
        onSelectCategory={onSelectCategory}
      />

      <main className="flex-1">
        {/* Breadcrumb */}
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
            <span className="text-xs font-semibold text-gray-900">Hakkımızda</span>
          </div>
        </div>

        {/* ── Intro / Brand Story Hero ─────────────────────────────────── */}
        <section id="kurumsal" className="relative overflow-hidden border-b border-gray-100">
          <div className="absolute inset-0">
            <img
              src="/images/lifestyle_picnic.jpg"
              alt="Burtemis — doğaya saygılı temizlik"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a3a]/90 via-[#0c1a3a]/70 to-[#0c1a3a]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a3a]/50 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white/70 uppercase mb-4">
              ECO-CLEAN SOLUTIONS
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-xl leading-[1.05]">
              BURTEMİS
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/85 font-light leading-relaxed max-w-md">
              Tertemiz bir dünya için kalite ve hijyeni, plastik atıksız formüllerle kapınıza getiriyoruz.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('urunler')}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#0038e3] hover:bg-[#002bb8] text-white text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                ÜRÜNLERİ KEŞFET
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('hikayemiz');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/40 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-200"
              >
                HİKAYEMİZ
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* ── Hikayemiz ────────────────────────────────────────────────── */}
        <section id="hikayemiz" className="py-16 sm:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 space-y-5">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#0038e3] uppercase block">
                  HİKAYEMİZ
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 tracking-tight leading-tight">
                  Temizliği yeniden tanımladık
                </h2>
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                  Burtemis, ağır su dolu plastik şişeleri taşımanın hem doğaya hem bütçeye yük olduğunu fark ettiğimizde doğdu. Amacımız basitti: ihtiyacınız olan aktif temizliği, gereksiz ambalaj ve toksik kimyasallar olmadan sunmak.
                </p>
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                  Bugün yerli üretim tesislerimizde geliştirdiğimiz konsantre tablet ve refill sistemleriyle evlerden endüstriyel tesislere kadar sürdürülebilir hijyen sağlıyoruz.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#eaf4fd]">
                  <img
                    src="/images/how_it_works.jpg"
                    alt="Burtemis konsantre tablet sistemi"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Misyon / Pillars ─────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-[#eaf4fd] border-b border-[#d8e8f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#0f2b48] tracking-tight">
                Neden Burtemis?
              </h2>
              <p className="mt-3 text-sm text-gray-600 font-light leading-relaxed">
                Her kararımızda gezegeni, insan sağlığını ve gerçek temizlik performansını bir arada tutuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
              {pillars.map((item, idx) => (
                <div key={idx} className="text-center sm:text-left px-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0038e3]/10 text-[#0038e3] text-xs font-bold mb-4">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-[#0047cc] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#243752] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0038e3] uppercase block mb-3">
                YOLCULUĞUMUZ
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 tracking-tight">
                Kısa bir bakış
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {milestones.map((item, idx) => (
                <div key={idx} className="relative text-left">
                  <p className="text-3xl sm:text-4xl font-heading font-bold text-[#0038e3]/20 tracking-tight mb-2">
                    {item.year}
                  </p>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Standards / Sertifikalar ─────────────────────────────────── */}
        <StandardsSection
          onLearnMore={() => onNavigate('iletisim')}
        />

        {/* ── Basın / Güvence band ─────────────────────────────────────── */}
        <section className="py-14 sm:py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0038e3] uppercase block mb-3">
              BURTEMİS GÜVENCESİ
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 tracking-tight max-w-3xl mx-auto">
              “Kendi tesislerimizde yüksek standartlarla üretiyor, doğrudan yaşam alanlarınıza ulaştırıyoruz.”
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-400">
              <span className="text-[#0038e3]">Yerli Üretim</span>
              <span>TSE & Bakanlık Onaylı</span>
              <span>Sıfır Atık</span>
              <span>Profesyonel Hijyen</span>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <StartJourneyCTA onGetStarted={() => onNavigate('urunler')} />
      </main>

      <Footer
        onNavigate={onNavigate}
        onSelectCategory={onSelectCategory}
      />
    </div>
  );
}
