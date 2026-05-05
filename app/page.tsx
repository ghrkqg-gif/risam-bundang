import Hero from '@/components/sections/Hero';
import BrandIntro from '@/components/sections/BrandIntro';
import Programs from '@/components/sections/Programs';
import Philosophy from '@/components/sections/Philosophy';
import ReviewsPreview from '@/components/sections/ReviewsPreview';
import ContentPreview from '@/components/sections/ContentPreview';

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandIntro />
      <Programs />
      <Philosophy />
      <ReviewsPreview />
      <ContentPreview />
    </main>
  );
}
