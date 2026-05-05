'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { reviews } from '@/lib/data/reviews';

const categories = [
  { id: 'all', label: '전체' },
  { id: 'lifting', label: '리프팅' },
  { id: 'trouble', label: '트러블' },
  { id: 'pigment', label: '색소' },
  { id: 'scalp', label: '두피' },
  { id: 'etc', label: '기타' },
];

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredReviews = activeCategory === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === activeCategory);

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <SectionTitle title="치료 후기" className="mb-12" />
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white border border-surface text-textsub hover:border-primary hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredReviews.map(review => (
            <div key={review.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-surface hover:shadow-md transition-all group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={review.thumbnail}
                  alt={review.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary rounded-full">
                  {review.categoryLabel}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-3 line-clamp-1 group-hover:text-secondary transition-colors">
                  {review.title}
                </h3>
                <p className="text-textsub text-sm leading-relaxed line-clamp-3 mb-4">
                  {review.excerpt}
                </p>
                <span className="text-xs text-textsub/60 block">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="p-6 bg-surface/30 rounded-xl text-center border border-surface">
          <p className="text-sm text-textsub font-medium">
            ※ 본 후기는 환자분의 동의 하에 게재되었습니다.<br className="md:hidden"/> 개인에 따라 치료 결과가 다를 수 있으며, 부작용이 발생할 수 있습니다.
          </p>
        </div>
      </Container>
    </main>
  );
}
