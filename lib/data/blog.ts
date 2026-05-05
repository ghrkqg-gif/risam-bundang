export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  externalUrl: string;
}

export const blogPosts: BlogPost[] = Array.from({ length: 9 }).map((_, i) => ({
  id: `blog-${i + 1}`,
  title: `피부 장벽을 강화하는 올바른 세안법 ${i + 1}`,
  excerpt: '환절기 건조해지는 피부, 어떻게 관리해야 할까요? 리샘한의원 분당점에서 제안하는 올바른 세안법을 알아봅니다.',
  thumbnail: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
  date: `2026.04.0${(i % 9) + 1}`,
  externalUrl: `https://blog.naver.com/risam_bundang/${123 + i}`
}));
