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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1591343395082-e120087004b4?w=1200&q=80"
                alt="원장 인사말"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionTitle eyebrow="Greeting" title="건강한 피부는\n건강한 몸에서 시작됩니다" align="left" className="mb-8" />
              <div className="space-y-4 text-textsub leading-relaxed">
                <p>안녕하세요. 리샘한의원 분당점 대표원장입니다.</p>
                <p>우리의 피부는 몸 안의 오장육부의 거울입니다. 겉으로 드러나는 증상만을 쫓는 치료는 일시적일 뿐입니다. 체질을 개선하고 근본을 바로잡아야 진짜 피부 미인이 될 수 있습니다.</p>
                <p>저희 리샘한의원 분당점은 20년의 임상 노하우를 바탕으로, 한 분 한 분의 체질과 피부 상태에 맞는 가장 자연스럽고 안전한 한방 피부 솔루션을 제공합니다.</p>
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
