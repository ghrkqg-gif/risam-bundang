'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const programs = [
  {
    id: 1,
    title: '한방 리프팅',
    desc: '처진 탄력을 끌어올리는 자연스러운 안티에이징',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
  },
  {
    id: 2,
    title: '트러블 케어',
    desc: '만성 여드름의 뿌리를 뽑는 체질 개선 솔루션',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
  },
  {
    id: 3,
    title: '색소 케어',
    desc: '기미, 잡티를 지우고 맑은 안색을 되찾는 미백 치료',
    image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80',
  },
  {
    id: 4,
    title: '두피 케어',
    desc: '탈모 방지와 모근 강화를 위한 두피 해독 프로그램',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-surface/30">
      <Container>
        <SectionTitle
          eyebrow="Signature Programs"
          title="피부 고민별 맞춤 프로그램"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif text-primary mb-2 transition-colors group-hover:text-secondary">
                {program.title}
              </h3>
              <p className="text-textsub text-sm leading-relaxed">
                {program.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
