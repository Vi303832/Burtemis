import React from 'react';
import { 
  TrendingUp, 
  Wallet, 
  Users, 
  Truck, 
  CheckCircle2, 
  Building, 
  Factory, 
  Award,
  Globe2,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export default function CorporateSolutions({ onOpenQuoteForm }) {
  const b2bAdvantages = [
    {
      icon: TrendingUp,
      title: 'Verimlilik Artışı & Zaman Tasarrufu',
      description: 'Yüksek emicilikli lamine kağıt havlular ve konsantre kimyasallar sayesinde temizlik personeli daha kısa sürede daha geniş alanları hijyenik hale getirir. İş gücü kaybı minimize edilir.'
    },
    {
      icon: Wallet,
      title: 'Şeffaf Maliyet Kontrolü & Bütçe Planlaması',
      description: 'Tek yaprak veren dispenser mekanizmaları ve doğru seyreltme kılavuzları ile tüketim israfı %35-40 oranında düşer. Sabit fiyat garantili dönemlik sözleşmeler ile bütçeniz güvende kalır.'
    },
    {
      icon: Users,
      title: 'Çalışan & Misafir Memnuniyeti',
      description: 'Dermatolojik test onaylı cilt dostu sabunlar, kötü kokuları engelleyen koku kontrol sistemleri ve kaliteli tuvalet kağıtları ile kurumunuzun prestiji ve çalışan konforu en üst seviyeye taşınır.'
    },
    {
      icon: Truck,
      title: 'Kesintisiz Stok & Zamanında Sevkiyat',
      description: 'Merkezi depolama ve güçlü lojistik filomuz sayesinde acil sarf malzeme ihtiyaçlarınızda stok tükenme riski yaşamazsınız. Haftalık veya aylık periyodik rotalı sevkiyat sağlanır.'
    }
  ];

  const sectors = [
    { name: 'Fabrika & Sanayi Tesisleri', count: '120+ Tesis' },
    { name: 'Kurumsal Plazalar & Ofisler', count: '350+ Şirket' },
    { name: 'Otel & Konaklama Tesisleri', count: '80+ Otel' },
    { name: 'Hastane & Sağlık Kuruluşları', count: '45+ Klinik' },
    { name: 'Restoran & Cafe Zincirleri', count: '200+ Şube' },
    { name: 'Eğitim Kurumları & Üniversiteler', count: '60+ Kampüs' }
  ];

  return (
    <section id="kurumsal" className="py-20 bg-white border-b border-borderSubtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight">
            Ofis ve Endüstriyel Tesisler İçin Stratejik Avantajlar
          </h2>
          <p className="mt-3 text-textMuted text-sm sm:text-base">
            Burtemis, işletmelerin sarf malzeme tedariğinde karşılaştığı dengesiz fiyatlama, kalitesiz ürün ve aksayan sevkiyat problemlerine kalıcı kurumsal çözümler üretir.
          </p>
        </div>

        {/* 4 B2B Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {b2bAdvantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-surface-low border border-borderSubtle/80 hover:border-brand-300 hover:shadow-card-hover transition-all duration-300 group flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-borderSubtle/60 flex items-center justify-center text-brand-600 flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Trust & Numbers Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 text-white p-8 sm:p-12 overflow-hidden shadow-xl mb-16">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Sürdürülebilir Gelecek & Vizyonumuz
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Doğaya Saygılı Hammadde, Sertifikalı Standartlar
              </h3>
              <p className="text-xs sm:text-sm text-brand-100/90 leading-relaxed max-w-2xl">
                Burtemis olarak kağıt grubumuzda %100 FSC sertifikalı orman hammaddelerini tercih ediyor; kimyasal formülasyonlarımızda biyolojik olarak parçalanabilir çevre dostu yüzey aktifler kullanıyoruz. Kurumsal çözüm ortaklarımızla beraber yılda binlerce ton atığı önlüyoruz.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-brand-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  ISO 9001 & ISO 14001
                </span>
                <span className="flex items-center gap-1.5 text-brand-100">
                  <Award className="w-4 h-4 text-emerald-400" />
                  HACCP Hijyen Onaylı
                </span>
                <span className="flex items-center gap-1.5 text-brand-100">
                  <Globe2 className="w-4 h-4 text-emerald-400" />
                  Yurt İçi ve Bölgesel Tedarik Ağı
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <button
                onClick={onOpenQuoteForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-brand-900 hover:bg-brand-50 font-bold text-xs shadow-lg transition-all active:scale-95"
              >
                <span>Kurumsal Anlaşma Başlat</span>
                <ArrowRight className="w-4 h-4 text-brand-600" />
              </button>
              <span className="text-[11px] text-brand-200 mt-2">
                Teklif ve keşif talepleriniz ücretsizdir.
              </span>
            </div>

          </div>
        </div>

        {/* Sectors Served Grid */}
        <div className="text-center">
          <h4 className="text-xs font-bold uppercase tracking-wider text-textMuted mb-6">
            Hizmet Verdiğimiz Başlıca Sektörler
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {sectors.map((sec, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-surface-low border border-borderSubtle text-center hover:border-brand-300 transition-colors"
              >
                <span className="block text-xs font-bold text-brand-900 mb-1">{sec.name}</span>
                <span className="text-[11px] font-medium text-brand-600">{sec.count}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
