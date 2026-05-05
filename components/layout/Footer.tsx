import Link from 'next/link';
import { Instagram, Youtube, MessageCircle, ExternalLink } from 'lucide-react';
import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="bg-primary text-background py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div className="flex flex-col">
            <h3 className="text-xl font-serif font-bold mb-4 text-accent">리샘한의원 분당점</h3>
            <p className="text-surface/80 text-sm leading-relaxed">
              피부의 본질을 다스리는 시간.<br />
              20년 임상이 증명하는 프리미엄 한방 스파.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">빠른 메뉴</h4>
            <ul className="flex flex-col gap-2 text-sm text-surface/80">
              <li><Link href="/about" className="hover:text-accent transition-colors">한의원 소개</Link></li>
              <li><Link href="/location" className="hover:text-accent transition-colors">오시는 길</Link></li>
              <li><Link href="/reviews" className="hover:text-accent transition-colors">치료 후기</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">문의하기</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">연락처 & 진료시간</h4>
            <ul className="flex flex-col gap-2 text-sm text-surface/80">
              <li>T. 031-713-2784</li>
              <li>문자. 010-9877-2784</li>
              <li>평일 11:00 - 21:00 (점심 14:00-15:00)</li>
              <li>토요일 09:00 - 15:00</li>
              <li>일요일 휴진 / 공휴일 진료</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">SNS</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-surface/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@hanbang119" target="_blank" rel="noopener noreferrer" className="p-2 bg-surface/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://pf.kakao.com/_resambd" target="_blank" rel="noopener noreferrer" className="p-2 bg-surface/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="p-2 bg-surface/10 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-surface/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-surface/60">
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
            <span>대표원장: 강기림</span>
            <span>원장: 정샘</span>
            <span>주소: 경기도 성남시 분당구 성남대로 345 정자역프라자 707호</span>
          </div>
          <p>© 2026 리샘한의원 분당점. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
