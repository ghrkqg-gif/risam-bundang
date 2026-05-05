'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    time: '',
    message: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^010-?\d{4}-?\d{4}$/;
    
    if (!formData.name) return alert("이름을 입력해주세요.");
    if (!formData.phone || !phoneRegex.test(formData.phone)) return alert("올바른 연락처를 입력해주세요 (예: 010-1234-5678).");
    if (!formData.agree) return alert("개인정보 수집 및 이용에 동의해주세요.");

    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    setFormData({ name: '', phone: '', email: '', program: '', time: '', message: '', agree: false });
  };

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <SectionTitle title="온라인 상담 예약" className="mb-12" />
        <p className="text-center text-textsub mb-16">전문 상담사가 확인 후 24시간 내에 답변드립니다.</p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-surface">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">이름 *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-surface/30 border border-surface rounded-lg focus:outline-none focus:border-accent" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2">연락처 *</label>
                  <input type="tel" id="phone" name="phone" placeholder="010-0000-0000" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-surface/30 border border-surface rounded-lg focus:outline-none focus:border-accent" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">이메일 (선택)</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-surface/30 border border-surface rounded-lg focus:outline-none focus:border-accent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="program" className="block text-sm font-bold text-primary mb-2">관심 프로그램</label>
                  <select id="program" name="program" value={formData.program} onChange={handleChange} className="w-full p-3 bg-surface/30 border border-surface rounded-lg focus:outline-none focus:border-accent">
                    <option value="">선택해주세요</option>
                    <option value="lifting">한방 리프팅</option>
                    <option value="trouble">트러블 케어</option>
                    <option value="pigment">색소 케어</option>
                    <option value="scalp">두피 케어</option>
                    <option value="etc">기타</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-bold text-primary mb-2">희망 상담 시간대</label>
                  <select id="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-3 bg-surface/30 border border-surface rounded-lg focus:outline-none focus:border-accent">
                    <option value="">선택해주세요</option>
                    <option value="morning">오전 (11시~14시)</option>
                    <option value="afternoon">오후 (15시~18시)</option>
                    <option value="evening">저녁 (18시~21시)</option>
                    <option value="saturday">토요일 (09시~15시)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">문의 내용</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-3 bg-surface/30 border border-surface rounded-lg focus:outline-none focus:border-accent resize-none"></textarea>
              </div>

              <div className="flex items-start gap-3 p-4 bg-surface/20 rounded-lg">
                <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} className="mt-1" />
                <label htmlFor="agree" className="text-sm text-textsub">
                  (필수) 개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며, 의료법에 따라 안전하게 보관됩니다.
                </label>
              </div>

              <Button type="submit" className="w-full">상담 신청하기</Button>
            </form>
          </div>

          {/* Quick Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary text-background p-8 rounded-2xl">
              <h3 className="text-xl font-serif text-accent mb-4">빠른 상담</h3>
              <p className="text-white/80 mb-8 leading-relaxed">온라인 상담 예약이 번거로우신가요? 전화나 카카오톡으로 바로 연락 주시면 친절하게 안내해 드립니다.</p>
              
              <div className="space-y-4">
                <a href="tel:031-713-2784" className="block w-full py-4 text-center border border-accent/50 text-accent hover:bg-accent hover:text-primary transition-colors rounded-lg font-bold">
                  전화 문의 (031-713-2784)
                </a>
                <a href="sms:01098772784" className="block w-full py-3 text-center border border-accent/30 text-accent/80 hover:bg-accent/10 transition-colors rounded-lg font-medium text-sm">
                  문자 문의 (010-9877-2784)
                </a>
                <a href="https://pf.kakao.com/_resambd" target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center bg-[#FEE500] text-[#391B1B] hover:brightness-95 transition-all rounded-lg font-bold">
                  카카오톡 문의하기 (@resambd)
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-surface text-center">
              <h4 className="font-bold text-primary mb-2">진료시간</h4>
              <p className="text-sm text-textsub leading-relaxed">
                평일 11:00 - 21:00<br/>
                <span className="text-xs text-textsub/60">(점심 14:00 - 15:00)</span><br/>
                토요일 09:00 - 15:00<br/>
                일요일 휴진 / 공휴일 진료
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
