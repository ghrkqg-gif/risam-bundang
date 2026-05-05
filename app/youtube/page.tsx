import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { PlayCircle, Eye, ExternalLink } from 'lucide-react';
import { channelInfo } from '@/lib/data/youtube';
import { fetchChannelVideos } from '@/lib/youtube-api';

export default async function YouTubePage() {
  const videos = await fetchChannelVideos();
  const mainVideo = videos[0] ?? null;
  const otherVideos = videos.slice(1);
  const hasVideos = videos.length > 0;

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <SectionTitle title="이번생은 건생TV" className="mb-4" />

        {/* 채널 정보 */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <a
            href={channelInfo.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <h2 className="text-xl font-bold text-primary mb-1 inline-flex items-center gap-1">
              {channelInfo.name}
              <ExternalLink size={14} className="opacity-50" />
            </h2>
          </a>
          <span className="text-accent text-sm font-medium mb-3">{channelInfo.handle}</span>
          <p className="text-textsub max-w-lg">{channelInfo.description}</p>
        </div>

        {/* 영상 없음 (API 키 미설정 or 오류) */}
        {!hasVideos && (
          <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
            <p className="text-textsub">현재 영상을 불러올 수 없습니다.</p>
            <a
              href={channelInfo.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-xl font-bold hover:bg-secondary transition-colors"
            >
              <PlayCircle size={20} />
              유튜브 채널 바로가기
            </a>
          </div>
        )}

        {/* 메인 영상 */}
        {mainVideo && (
          <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 rounded-2xl border border-surface shadow-sm mb-16">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${mainVideo.videoId}`}
                title={mainVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">{mainVideo.title}</h3>
            <div className="flex items-center gap-4 text-sm text-textsub/60">
              <span className="flex items-center gap-1">
                <Eye size={14} />
                조회수 {mainVideo.viewCountLabel}회
              </span>
              <span>{mainVideo.dateLabel}</span>
            </div>
          </div>
        )}

        {/* 영상 그리드 */}
        {otherVideos.length > 0 && (
          <>
            <h3 className="text-xl font-serif text-primary mb-6">인기 영상</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherVideos.map((video) => (
                <a
                  key={video.id}
                  href={`https://youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl overflow-hidden border border-surface shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-base font-bold text-primary line-clamp-2 group-hover:text-secondary transition-colors mb-2">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-textsub/60">
                      <span className="flex items-center gap-1">
                        <Eye size={11} />
                        {video.viewCountLabel}회
                      </span>
                      <span>{video.dateLabel}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </Container>
    </main>
  );
}
