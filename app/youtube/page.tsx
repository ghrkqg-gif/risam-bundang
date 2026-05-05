import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { PlayCircle } from 'lucide-react';
import { videos, channelInfo } from '@/lib/data/youtube';

export default function YouTubePage() {
  const mainVideo = videos[0];
  const otherVideos = videos.slice(1);

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <SectionTitle title="리샘 TV" className="mb-4" />
        
        {/* Channel Info */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <a href="https://www.youtube.com/@hanbang119" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <h2 className="text-xl font-bold text-primary mb-2 inline-flex items-center gap-1">
              {channelInfo.name}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </h2>
          </a>
          <span className="text-accent text-sm font-medium mb-3">구독자 {channelInfo.subscribers}</span>
          <p className="text-textsub max-w-lg">{channelInfo.description}</p>
        </div>
        
        {/* Main Video */}
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
          <span className="text-textsub/60 text-sm">{mainVideo.date}</span>
        </div>

        {/* Video Grid */}
        <h3 className="text-xl font-serif text-primary mb-6">최신 영상</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherVideos.map(video => (
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
                <span className="text-xs text-textsub/60">{video.date}</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </main>
  );
}
