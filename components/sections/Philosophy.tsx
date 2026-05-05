'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Leaf, Sparkles } from 'lucide-react';
import Container from '../ui/Container';

const philosophies = [
  {
    icon: Stethoscope,
    title: '1:1 맞춤 진단',
    desc: '환자마다 다른 피부 타입과 체질을 고려하여, 천편일률적인 공장형 시술이 아닌 오직 한 사람만을 위한 1:1 맞춤 치료 계획을 수립합니다.',
  },
  {
    icon: Leaf,
    title: '원내 자체 처방 한약재',
    desc: '엄격한 품질 관리를 거친 청정 한약재만을 고집합니다. 피부 속 깊은 곳부터 건강해지도록 원내에서 직접 정성껏 처방합니다.',
  },
  {
    icon: Sparkles,
    title: '비수술 한방 솔루션',
    desc: '인위적인 화학 시술이나 수술 없이, 우리 몸이 가진 본연의 치유 능력을 극대화하여 가장 자연스러운 아름다움을 이끌어냅니다.',
  },
];

export default function Philosophy() {
  return (
    <section className="py-24 bg-background border-t border-surface">
      <Container>
        <div className="text-center mb-16">
          <span className="text-secondary font-serif text-sm tracking-widest uppercase mb-3 block">Our Philosophy</span>
          <h2 className="text-3xl md:text-4xl font-serif text-primary">진료 철학</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mb-6 text-accent">
                <item.icon strokeWidth={1.5} size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-textsub leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
