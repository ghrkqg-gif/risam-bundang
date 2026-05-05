'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, PlayCircle, Youtube } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { blogPosts } from '@/lib/data/blog';
import { channelInfo } from '@/lib/data/youtube';

export default function ContentPreview() {
  const recentBlogs = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Blog */}
          <div>
            <div className="flex items-end justify-between mb-8">
              <SectionTitle eyebrow="Naver Blog" title="건강 & 뷰티 칼럼" align="left" />
              <Button href="/blog" variant="outline" size="sm" className="hidden sm:inline-flex">
                더보기
              </Button>
            </div>
            
            <div className="flex flex-col gap-6">
              {recentBlogs.map((post, index) => (
                <motion.a
                  key={post.id}
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center gap-6 p-4 rounded-xl hover:bg-surface/30 transition-colors"
                >
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-primary truncate group-hover:text-secondary transition-colors">
                        {post.title}
                      </h3>
                      <ExternalLink size={14} className="text-textsub/50 shrink-0" />
                    </div>
                    <p className="text-textsub text-sm line-clamp-2 mb-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="text-xs text-textsub/60">{post.date}</span>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="mt-6 sm:hidden">
              <Button href="/blog" variant="outline" className="w-full">더보기</Button>
            </div>
          </div>

          {/* Right: YouTube */}
          <div>
            <div className="flex items-end justify-between mb-8">
              <SectionTitle eyebrow="YouTube" title="이번생은 건생TV" align="left" />
              <Button href="/youtube" variant="outline" size="sm" className="hidden sm:inline-flex">
                채널 가기
              </Button>
            </div>

            <motion.a
              href={channelInfo.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-surface bg-white shadow-sm hover:shadow-md hover:border-accent transition-all"
            >
              {/* 채널 배너 */}
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center gap-4 text-background">
                <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Youtube size={48} className="text-white" />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-white">{channelInfo.name}</p>
                  <p className="text-sm text-white/70 mt-1">{channelInfo.handle}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-accent/90 text-primary rounded-full text-sm font-bold group-hover:bg-accent transition-colors">
                  <PlayCircle size={16} />
                  채널 방문하기
                </div>
              </div>
              {/* 설명 */}
              <div className="p-6">
                <p className="text-sm text-textsub leading-relaxed line-clamp-2">
                  {channelInfo.description}
                </p>
              </div>
            </motion.a>

            <div className="mt-6 sm:hidden">
              <Button href="/youtube" variant="outline" className="w-full">채널 가기</Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
