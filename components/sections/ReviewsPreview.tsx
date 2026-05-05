'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { reviews } from '@/lib/data/reviews';

export default function ReviewsPreview() {
  const recentReviews = reviews.slice(0, 3);

  return (
    <section className="py-24 bg-surface/20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle
            eyebrow="Real Stories"
            title="고객님들의 생생한 후기"
            align="left"
          />
          <Button href="/reviews" variant="outline" className="shrink-0 hidden md:inline-flex">
            전체 후기 보기
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/reviews/${review.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-surface">
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
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1 group-hover:text-secondary transition-colors">
                    {review.title}
                  </h3>
                  <p className="text-textsub text-sm leading-relaxed line-clamp-2 mb-4">
                    {review.excerpt}
                  </p>
                  <span className="text-xs text-textsub/60">{review.date}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button href="/reviews" variant="outline" className="w-full">
            전체 후기 보기
          </Button>
        </div>
      </Container>
    </section>
  );
}
