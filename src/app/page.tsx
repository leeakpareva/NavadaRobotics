"use client";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState, useRef } from "react";
import { Rocket, Cpu, Eye, Brain, User, Mail } from "lucide-react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  // Track visible sections for animations
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollLeft = containerRef.current.scrollLeft;
      const sectionWidth = window.innerWidth;
      const currentSection = Math.round(scrollLeft / sectionWidth);
      
      setVisibleSections(prev => new Set([...prev, currentSection]));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Check initial position
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Handle keyboard navigation (desktop only)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current || window.innerWidth < 768) return;
      
      const scrollAmount = window.innerWidth;
      if (e.key === "ArrowRight") {
        containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const pages = [
    {
      id: "home",
      icon: Rocket,
      title: "NAVADA Robotics",
      subtitle: "Pioneering the Future",
      content: [
        "Welcome to NAVADA: a revolutionary fusion of AI, robotics, and creativity.",
        "NAVADA - Navigating Artistic Vision with Advanced Digital Assistance",
        "Mission: Pioneer and inspire the next wave of AI developers in robotics."
      ],
      image: "/RobotSpidervid.mp4",
      isVideo: true,
      position: "left"
    },
    {
      id: "raspberry-pi",
      icon: Cpu,
      title: "Raspberry Pi Core",
      subtitle: "Accessible Robotics Computing",
      content: [
        "The brain of accessible robotics with perfect balance of power and affordability.",
        "Enabling robotic arms, IoT sensors, and real-time computer vision.",
        "Empowering developers worldwide to prototype revolutionary ideas."
      ],
      image: "/Spider-9.png",
      position: "right"
    },
    {
      id: "computer-vision",
      icon: Eye,
      title: "Eyes for the Future",
      subtitle: "Intelligent Visual Processing",
      content: [
        "Transforming raw pixels into actionable intelligence.",
        "OpenCV, YOLO, and ML models for recognition and navigation.",
        "AI model deployment and real-time processing pipelines."
      ],
      image: "/Spider-7.png",
      position: "left"
    },
    {
      id: "ai-robotics",
      icon: Brain,
      title: "Intelligence in Motion",
      subtitle: "AI-Powered Robotics",
      content: [
        "AI agents orchestrating complex robotic behaviors.",
        "Multi-agent systems with LLM integration and RAG pipelines.",
        "Building scalable assistants, drones, and Industry 4.0 solutions."
      ],
      image: "/Twin Dogs.png",
      position: "right"
    },
    {
      id: "about",
      icon: User,
      title: "Lee Akpareva",
      subtitle: "AI Project Lead",
      content: [
        "17+ years in digital transformation and AI leadership.",
        "Solutions for Generali, DHL, British Airways, Expedia.",
        "Bridging art, design, and AI engineering."
      ],
      image: "/Twins.png",
      position: "left"
    },
    {
      id: "contact",
      icon: Mail,
      title: "Get in Touch",
      subtitle: "Build the Future Together",
      content: [
        "Collaborate on AI and robotics transformation.",
        "Use the sidebar contact form to connect.",
        "Navigate the intersection of AI and creativity."
      ],
      image: "/Robot Arm.png",
      position: "right"
    }
  ];

  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      const scrollAmount = index * window.innerWidth;
      containerRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <Sidebar />
      
      {/* Footer */}
      <div className="fixed bottom-2 right-2 md:bottom-4 md:right-4 z-40">
        <p className="text-white/60 text-[10px] md:text-xs font-medium drop-shadow-lg" 
           style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          Designed & Developed by Lee Akpareva MBA, MA.
        </p>
      </div>
      
      {/* Navigation dots */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-1 md:gap-2">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30 hover:bg-white/60 transition-all touch-manipulation"
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Horizontal scroll container */}
      <div 
        ref={containerRef}
        className="w-screen h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x'
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slide-in-left {
            animation: slideInLeft 0.6s ease-out forwards;
          }
          
          .animate-slide-in-right {
            animation: slideInRight 0.6s ease-out forwards;
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
          }
        `}</style>
        
        <div className="flex h-full">
          {pages.map((page, index) => {
            const Icon = page.icon;
            const isVisible = visibleSections.has(index);
            const isLeft = page.position === "left";
            
            return (
              <div
                key={page.id}
                className="w-screen h-screen flex-shrink-0 snap-center relative"
              >
                {page.isVideo ? (
                  <video
                    src={page.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center center' }}
                  />
                ) : (
                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    className="object-cover"
                    priority={index <= 1}
                    quality={100}
                    sizes="100vw"
                    style={{ objectPosition: 'center center' }}
                  />
                )}
                
                {/* Mobile-optimized text content */}
                <div 
                  className={`absolute ${
                    isLeft 
                      ? 'bottom-4 left-4 text-left sm:bottom-6 sm:left-6 md:bottom-8 md:left-8' 
                      : 'bottom-4 right-4 text-right sm:bottom-6 sm:right-6 md:bottom-8 md:right-8'
                  } max-w-[280px] sm:max-w-sm md:max-w-md ${
                    isVisible 
                      ? isLeft 
                        ? 'animate-slide-in-left' 
                        : 'animate-slide-in-right'
                      : 'opacity-0'
                  }`}
                >
                  {/* Icon */}
                  <Icon 
                    className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white mb-2 md:mb-3 ${
                      isLeft ? '' : 'ml-auto'
                    } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ 
                      animationDelay: '0.2s',
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
                    }}
                  />
                  
                  {/* Title */}
                  <h1 
                    className={`text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: '0.3s', 
                      textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
                      fontFamily: 'inherit',
                      lineHeight: '1.2'
                    }}
                  >
                    {page.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <p 
                    className={`text-sm sm:text-base md:text-lg font-semibold text-white mb-2 ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: '0.4s', 
                      textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
                      fontFamily: 'inherit',
                      lineHeight: '1.3'
                    }}
                  >
                    {page.subtitle}
                  </p>
                  
                  {/* Content paragraphs */}
                  <div className="space-y-1">
                    {page.content.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className={`text-xs sm:text-sm md:text-base font-normal text-white leading-tight ${
                          isVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                        style={{
                          animationDelay: `${0.5 + (idx * 0.1)}s`,
                          textShadow: '1px 1px 3px rgba(0,0,0,0.9)',
                          fontFamily: 'inherit',
                          lineHeight: '1.4'
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}