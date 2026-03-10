import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateRing = () => {
      setRingPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.12,
        y: prev.y + (mousePos.y - prev.y) * 0.12,
      }));
      requestAnimationFrame(animateRing);
    };

    const animationId = requestAnimationFrame(animateRing);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [mousePos]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference bg-[var(--accent)] transition-[width,height,opacity] duration-200 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: isHovering ? '16px' : '8px',
          height: isHovering ? '16px' : '8px',
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-[rgba(232,213,176,0.4)] transition-[width,height] duration-200 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          width: isHovering ? '60px' : '36px',
          height: isHovering ? '60px' : '36px',
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

