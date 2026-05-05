export interface YouTubeVideo {
  id: string;
  title: string;
  videoId: string;
  thumbnail: string;
  date: string;
}

export const channelInfo = {
  name: "리샘한의원 분당점",
  subscribers: "1.2만명",
  description: "피부의 본질을 다스리는 시간, 건강한 아름다움을 전합니다."
};

export const videos: YouTubeVideo[] = Array.from({ length: 8 }).map((_, i) => {
  const dummyIds = ["G0WeUIAlxnI"];
  const videoId = dummyIds[i % dummyIds.length];
  
  return {
    id: `yt-${i + 1}`,
    title: `[피부 Q&A] 원장님이 직접 알려주는 홈케어 꿀팁 ${i + 1}탄`,
    videoId: videoId,
    thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    date: `2026.03.1${i}`
  };
});
