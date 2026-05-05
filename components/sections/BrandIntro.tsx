'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function BrandIntro() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-accent font-serif tracking-widest uppercase text-sm mb-4 block">
              About Clinic
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight mb-8">
              자연의 힘으로<br />
              <span className="italic text-secondary">건강한 아름다움</span>을<br />
              되찾습니다.
            </h2>
            <div className="space-y-6 text-textsub mb-10 text-lg leading-relaxed">
              <p>
                리샘한의원 분당점은 겉으로 드러나는 증상만을 쫓지 않습니다.
                피부 문제의 근본적인 원인을 체질과 오장육부의 불균형에서 찾아, 
                신체 내부의 건강을 회복시킴으로써 맑고 깨끗한 피부를 완성합니다.
              </p>
              <p>
                20년간 쌓아온 수많은 임상 데이터와 오직 한 사람만을 위한 맞춤 처방, 
                그리고 프리미엄 스파 수준의 편안한 공간에서 오롯이 나에게만 집중하는 
                치유의 시간을 경험해 보세요.
              </p>
            </div>
            <Button href="/about" variant="outline">
              한의원 소개 자세히 보기
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1591343395082-e120087004b4?w=1200&q=80"
              alt="리샘한의원 내부 전경"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
