'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';

const navItems = [
  { label: '홈', href: '/' },
  { label: '소개', href: '/about' },
  { label: '오시는길', href: '/location' },
  { label: '후기', href: '/reviews' },
  { label: '블로그', href: '/blog' },
  { label: '유튜브', href: '/youtube' },
  { label: '문의', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Home 페이지일때만 스크롤에 따른 투명/흰색 전환 적용. 서브페이지는 항상 흰색 배경 유지.
  const headerBg = (isScrolled || !isHome || isMobileMenuOpen) ? 'bg-white shadow-sm' : 'bg-transparent';
  const textColor = (isScrolled || !isHome || isMobileMenuOpen) ? 'text-primary' : 'text-white';
  const logoColor = (isScrolled || !isHome || isMobileMenuOpen) ? 'text-primary' : 'text-white';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}>
        <Container>
          <div className="flex items-center justify-between h-20">
            <Link href="/" className={`font-serif text-xl font-bold tracking-tight ${logoColor} relative z-50`}>
              리샘한의원 분당점
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group font-medium text-sm transition-colors ${textColor} hover:text-accent`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden relative z-50 p-2 ${textColor}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-primary hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
