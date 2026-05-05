'use client';

import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { Copy, MapPin, Phone, Clock, TrainFront, Bus, Car } from 'lucide-react';

export default function LocationPage() {
  const address = "경기 성남시 분당구 성남대로 345 123 리샘빌딩 3층";

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert("주소가 복사되었습니다.");
  };

  return (
    <main className="pt-20 pb-24 bg-background">
      <Container className="pt-12">
        <SectionTitle title="오시는 길" className="mb-12" />

        {/* Map Placeholder */}
        <div className="w-full aspect-video md:aspect-[21/9] bg-surface rounded-2xl flex items-center justify-center mb-12 shadow-inner">
          <span className="text-textsub/60 font-medium flex items-center gap-2">
            <MapPin />
            지도 영역 (추후 카카오맵 연동)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-surface shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">주소</h3>
            <div className="flex items-center justify-between bg-surface/30 p-4 rounded-lg">
              <span className="text-lg font-medium">{address}</span>
              <button onClick={copyAddress} className="text-accent hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium">
                <Copy size={16} /> 복사
              </button>
            </div>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">진료 시간</h3>
            <ul className="space-y-3 text-textsub">
              <li className="flex justify-between border-b border-surface pb-2">
                <span>평일</span>
                <span className="font-medium text-primary">10:00 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-surface pb-2">
                <span>토요일</span>
                <span className="font-medium text-primary">10:00 - 15:00</span>
              </li>
              <li className="flex justify-between text-accent">
                <span>일요일 / 공휴일</span>
                <span>휴진</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <a href="tel:031-123-4567" className="flex items-center justify-center gap-3 w-full p-6 bg-white border border-surface rounded-2xl shadow-sm hover:border-accent hover:text-accent transition-colors text-lg font-bold text-primary">
              <Phone size={24} />
              031-123-4567
            </a>
            <a href="#" className="flex items-center justify-center gap-3 w-full p-6 bg-[#FEE500] rounded-2xl shadow-sm hover:brightness-95 transition-all text-lg font-bold text-[#391B1B]">
              카카오톡 상담
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-serif text-primary mb-6">교통편 안내</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-surface shadow-sm">
            <div className="flex items-center gap-3 text-accent mb-4">
              <div className="p-2 bg-surface rounded-full"><TrainFront size={24} /></div>
              <h4 className="font-bold text-lg text-primary">지하철</h4>
            </div>
            <p className="text-textsub leading-relaxed">분당선 서현역 5번 출구<br />도보 5분 거리 위치</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-surface shadow-sm">
            <div className="flex items-center gap-3 text-accent mb-4">
              <div className="p-2 bg-surface rounded-full"><Bus size={24} /></div>
              <h4 className="font-bold text-lg text-primary">버스</h4>
            </div>
            <p className="text-textsub leading-relaxed">서현역 정류장 하차<br />광역 1005-1, 1150, 1500-2</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-surface shadow-sm">
            <div className="flex items-center gap-3 text-accent mb-4">
              <div className="p-2 bg-surface rounded-full"><Car size={24} /></div>
              <h4 className="font-bold text-lg text-primary">자가용</h4>
            </div>
            <p className="text-textsub leading-relaxed">건물 지하 주차장 이용 가능<br />(진료 시 2시간 무료)</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
