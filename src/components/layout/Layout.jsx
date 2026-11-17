import { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const Layout = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const targetPosRef = useRef({ x: -100, y: -100 });
  const currentRingRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const pos = { x: e.clientX, y: e.clientY };
      targetPosRef.current = pos;
      setMousePos(pos);
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId;
    const animateRing = () => {
      currentRingRef.current.x += (targetPosRef.current.x - currentRingRef.current.x) * 0.15;
      currentRingRef.current.y += (targetPosRef.current.y - currentRingRef.current.y) * 0.15;
      setRingPos({ x: currentRingRef.current.x, y: currentRingRef.current.y });
      animationId = requestAnimationFrame(animateRing);
    };

    animationId = requestAnimationFrame(animateRing);

    const handleMouseOver = (e) => {
      if (e.target && e.target.closest && e.target.closest('a, button, input, textarea, select, [role="button"], .clickable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-[var(--bg)] text-[var(--text)]">
      <ScrollToTop />

      {/* Custom Cursor Dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference bg-[var(--accent)] transition-[width,height,opacity] duration-150 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: isHovering ? '18px' : '8px',
          height: isHovering ? '18px' : '8px',
          opacity: mousePos.x < 0 ? 0 : 1,
        }}
      />

      {/* Custom Cursor Ring */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-[rgba(232,213,176,0.35)] transition-[width,height,border-color] duration-200 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          width: isHovering ? '56px' : '36px',
          height: isHovering ? '56px' : '36px',
          borderColor: isHovering ? 'rgba(232,213,176,0.8)' : 'rgba(232,213,176,0.35)',
          opacity: mousePos.x < 0 ? 0 : 1,
        }}
      />

      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
