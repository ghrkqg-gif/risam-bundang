import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { ExternalLink } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <SectionTitle title="공식 블로그" className="mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <a
              key={post.id}
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-surface hover:shadow-md transition-all group"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-primary line-clamp-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <ExternalLink size={18} className="text-textsub/50 shrink-0 mt-1" />
                </div>
                <p className="text-textsub text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-xs text-textsub/60">{post.date}</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </main>
  );
}
