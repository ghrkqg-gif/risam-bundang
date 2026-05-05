'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, PlayCircle } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { blogPosts } from '@/lib/data/blog';
import { videos } from '@/lib/data/youtube';

export default function ContentPreview() {
  const recentBlogs = blogPosts.slice(0, 3);
  const mainVideo = videos[0];

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
              <SectionTitle eyebrow="YouTube" title="리샘 TV" align="left" />
              <Button href="/youtube" variant="outline" size="sm" className="hidden sm:inline-flex">
                채널 가기
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden bg-surface group"
            >
              <div className="aspect-video relative">
                <Image
                  src={mainVideo.thumbnail}
                  alt={mainVideo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <PlayCircle size={64} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-6 bg-white border border-t-0 border-surface rounded-b-2xl">
                <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">{mainVideo.title}</h3>
                <span className="text-sm text-textsub/60">{mainVideo.date}</span>
              </div>
              <Link href="/youtube" className="absolute inset-0 z-10">
                <span className="sr-only">비디오 보기</span>
              </Link>
            </motion.div>
            
            <div className="mt-6 sm:hidden">
              <Button href="/youtube" variant="outline" className="w-full">채널 가기</Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
