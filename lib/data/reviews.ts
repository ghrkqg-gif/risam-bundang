export interface Review {
  id: string;
  category: 'lifting' | 'trouble' | 'pigment' | 'scalp' | 'etc';
  categoryLabel: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  content: string;
}

export const reviews: Review[] = Array.from({ length: 12 }).map((_, i) => {
  const categories: Review['category'][] = ['lifting', 'trouble', 'pigment', 'scalp'];
  const labels = {
    lifting: '한방 리프팅',
    trouble: '트러블 케어',
    pigment: '색소 케어',
    scalp: '두피 케어',
    etc: '기타'
  };
  const category = categories[i % 4];
  
  return {
    id: `review-${i + 1}`,
    category,
    categoryLabel: labels[category],
    title: `${labels[category]} 3개월 차 후기입니다.`,
    excerpt: '원장님의 꼼꼼한 진단과 맞춤 케어 덕분에 눈에 띄게 좋아졌어요. 꾸준히 받을 예정입니다.',
    thumbnail: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
    date: `2026.0${(i % 9) + 1}.1${i % 9}`,
    content: '상세 후기 내용입니다. 의료법 준수를 위해 더미 데이터로 대체합니다. 개인에 따라 효과가 다를 수 있습니다.',
  };
});
