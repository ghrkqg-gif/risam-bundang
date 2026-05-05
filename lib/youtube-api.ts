const CHANNEL_ID = 'UCunCtv_c-la7PPHyLfn9O7w';

export interface YoutubeVideoData {
  id: string;
  title: string;
  videoId: string;
  thumbnail: string;
  viewCount: number;
  viewCountLabel: string;
  publishedAt: string;
  dateLabel: string;
}

function formatViewCount(count: number): string {
  if (count >= 10000) return `${(count / 10000).toFixed(1)}만`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}천`;
  return `${count}`;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export async function fetchChannelVideos(): Promise<YoutubeVideoData[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return [];

  try {
    // 조회수 순 영상 ID 목록 취득
    const searchRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=id&channelId=${CHANNEL_ID}&order=viewCount&type=video&maxResults=12&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    if (!searchRes.ok) return [];

    const searchData = await searchRes.json();
    if (!searchData.items?.length) return [];

    const videoIds = searchData.items
      .map((item: { id: { videoId: string } }) => item.id.videoId)
      .join(',');

    // 상세 정보(통계 + 썸네일) 취득
    const videoRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    if (!videoRes.ok) return [];

    const videoData = await videoRes.json();

    const videos: YoutubeVideoData[] = videoData.items.map((item: {
      id: string;
      snippet: {
        title: string;
        publishedAt: string;
        thumbnails: { maxres?: { url: string }; high?: { url: string }; medium?: { url: string } };
      };
      statistics: { viewCount: string };
    }) => {
      const viewCount = Number(item.statistics.viewCount ?? 0);
      return {
        id: item.id,
        title: item.snippet.title,
        videoId: item.id,
        thumbnail:
          item.snippet.thumbnails.maxres?.url ??
          item.snippet.thumbnails.high?.url ??
          item.snippet.thumbnails.medium?.url ??
          `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`,
        viewCount,
        viewCountLabel: formatViewCount(viewCount),
        publishedAt: item.snippet.publishedAt,
        dateLabel: formatDate(item.snippet.publishedAt),
      };
    });

    // 조회수 내림차순 정렬
    return videos.sort((a, b) => b.viewCount - a.viewCount);
  } catch {
    return [];
  }
}
