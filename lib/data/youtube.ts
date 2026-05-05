export interface YouTubeVideo {
  id: string;
  title: string;
  videoId: string;
  thumbnail: string;
  date: string;
}

export const channelInfo = {
  name: "이번생은 건생TV",
  handle: "@hanbang119",
  channelUrl: "https://www.youtube.com/@hanbang119",
  description: "한방으로 피부 고민을 해결하는 리샘한의원의 유튜브 채널입니다. 원장님이 직접 알려주는 한방 피부 관리 노하우를 만나보세요."
};

export const videos: YouTubeVideo[] = [
  {
    id: "yt-1",
    title: "[한방119] 피부 트러블의 근본 원인과 한방 해결법",
    videoId: "G0WeUIAlxnI",
    thumbnail: `https://i.ytimg.com/vi/G0WeUIAlxnI/hqdefault.jpg`,
    date: "2026.04.01"
  },
  {
    id: "yt-2",
    title: "[피부 Q&A] 기미, 잡티 없애는 한방 색소 케어",
    videoId: "G0WeUIAlxnI",
    thumbnail: `https://i.ytimg.com/vi/G0WeUIAlxnI/hqdefault.jpg`,
    date: "2026.03.25"
  },
  {
    id: "yt-3",
    title: "[한방119] 탈모 예방을 위한 두피 관리법",
    videoId: "G0WeUIAlxnI",
    thumbnail: `https://i.ytimg.com/vi/G0WeUIAlxnI/hqdefault.jpg`,
    date: "2026.03.18"
  },
  {
    id: "yt-4",
    title: "[원장님 직강] 한방 리프팅이 성형보다 좋은 이유",
    videoId: "G0WeUIAlxnI",
    thumbnail: `https://i.ytimg.com/vi/G0WeUIAlxnI/hqdefault.jpg`,
    date: "2026.03.11"
  },
  {
    id: "yt-5",
    title: "[피부 Q&A] 민감성 피부에 맞는 홈케어 루틴",
    videoId: "G0WeUIAlxnI",
    thumbnail: `https://i.ytimg.com/vi/G0WeUIAlxnI/hqdefault.jpg`,
    date: "2026.03.04"
  },
  {
    id: "yt-6",
    title: "[한방119] 체질별 피부 관리 완전 정복",
    videoId: "G0WeUIAlxnI",
    thumbnail: `https://i.ytimg.com/vi/G0WeUIAlxnI/hqdefault.jpg`,
    date: "2026.02.25"
  },
  {
    id: "yt-7",
    title: "[원장님 직강] 만성 여드름 없애는 한방 트러블 케어",
    videoId: "G0WeUIAlxnI",
    thumbnail: `https://i.ytimg.com/vi/G0WeUIAlxnI/hqdefault.jpg`,
    date: "2026.02.18"
  },
  {
    id: "yt-8",
    title: "[피부 Q&A] 피부 장벽 강화하는 올바른 세안법",
    videoId: "G0WeUIAlxnI",
    thumbnail: `https://i.ytimg.com/vi/G0WeUIAlxnI/hqdefault.jpg`,
    date: "2026.02.11"
  }
];
