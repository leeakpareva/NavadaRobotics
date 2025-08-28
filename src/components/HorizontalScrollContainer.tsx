"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface HorizontalScrollContainerProps {
  children: React.ReactNode;
}

export default function HorizontalScrollContainer({ children }: HorizontalScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const pageIndex = getPageIndex(pathname);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: pageIndex * window.innerWidth,
        behavior: "smooth"
      });
    }
  }, [pathname]);

  const getPageIndex = (path: string) => {
    switch(path) {
      case '/': return 0;
      case '/raspberry-pi': return 1;
      case '/computer-vision': return 2;
      case '/ai-robotics': return 3;
      case '/about': return 4;
      case '/contact': return 5;
      default: return 0;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-screen h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="flex h-full">
        {children}
      </div>
    </div>
  );
}