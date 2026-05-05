import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80"
          alt="한의원 전경"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">리샘한의원 철학</h1>
          <p className="text-lg text-white/80">자연의 섭리를 따르는 근본적인 치유</p>
        </div>
      </section>

      {/* Greeting */}
      <section className="py-24 bg-background">
        <Container>
          <SectionTitle eyebrow="Greeting" title={`건강한 피부는\n건강한 몸에서 시작됩니다`} className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

            {/* 강기림 대표원장 */}
            <div className="flex flex-col items-center text-center bg-white rounded-2xl border border-surface shadow-sm overflow-hidden group">
              <div className="relative w-full bg-surface overflow-hidden" style={{ height: '420px' }}>
                <Image
                  src="/images/doctor-kang.jpg"
                  alt="강기림 대표원장"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: '30% top' }}
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-1">Chief Director</p>
                <h3 className="text-2xl font-serif font-bold text-primary mb-1">강기림</h3>
                <p className="text-sm text-textsub/70 mb-4">대표원장</p>
                <p className="text-sm text-textsub leading-relaxed">
                  우리의 피부는 몸 안의 오장육부의 거울입니다. 체질을 개선하고 근본을 바로잡아야 진짜 피부 미인이 될 수 있습니다. 20년의 임상 노하우로 한 분 한 분께 맞춤 솔루션을 제공합니다.
                </p>
              </div>
            </div>

            {/* 정샘 원장 */}
            <div className="flex flex-col items-center text-center bg-white rounded-2xl border border-surface shadow-sm overflow-hidden group">
              <div className="relative w-full bg-surface overflow-hidden" style={{ height: '420px' }}>
                <Image
                  src="/images/doctor-jung.jpg"
                  alt="정샘 원장"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-1">Director</p>
                <h3 className="text-2xl font-serif font-bold text-primary mb-1">정샘</h3>
                <p className="text-sm text-textsub/70 mb-4">원장</p>
                <p className="text-sm text-textsub leading-relaxed">
                  한방의 자연스럽고 안전한 접근으로 피부 고민을 근본부터 해결합니다. 섬세한 진단과 따뜻한 진료로 환자 한 분 한 분께 최선을 다하겠습니다.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-surface/30">
        <Container>
          <SectionTitle title="공간 안내" className="mb-12" />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=80",
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
              "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=1200&q=80",
              "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=800&q=80",
              "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=800&q=80",
              "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80"
            ].map((src, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden break-inside-avoid shadow-sm group">
                {/* masonry hack for aspect ratios */}
                <Image
                  src={src}
                  alt={`공간 ${i+1}`}
                  width={600}
                  height={i % 2 === 0 ? 800 : 400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
