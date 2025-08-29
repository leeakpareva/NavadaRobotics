"use client";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState, useRef } from "react";
import { Rocket, Cpu, Eye, Brain, User, Mail } from "lucide-react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [textVisibleSections, setTextVisibleSections] = useState<Set<number>>(new Set());
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Track visible sections for animations and handle text auto-hide
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollLeft = containerRef.current.scrollLeft;
      const sectionWidth = window.innerWidth;
      const newSection = Math.round(scrollLeft / sectionWidth);
      
      setVisibleSections(prev => new Set([...prev, newSection]));
      
      // If section changed
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
        
        // On mobile, show text for new section and hide after 4 seconds
        if (window.innerWidth < 768) {
          // Clear any existing timer
          if (textTimerRef.current) {
            clearTimeout(textTimerRef.current);
          }
          
          // Show text for new section
          setTextVisibleSections(prev => new Set([...prev, newSection]));
          
          // Hide text after 4 seconds
          textTimerRef.current = setTimeout(() => {
            setTextVisibleSections(prev => {
              const newSet = new Set(prev);
              newSet.delete(newSection);
              return newSet;
            });
          }, 4000);
        } else {
          // On desktop, always show text
          setTextVisibleSections(prev => new Set([...prev, newSection]));
        }
      }
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
      if (textTimerRef.current) {
        clearTimeout(textTimerRef.current);
      }
    };
  }, [currentSection]);

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
  image: "/Walking Pugs.mp4",
      isVideo: true,
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
      image: "/Spider-77.mp4",
      isVideo: true,
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
      image: "/Robodog.mp4",
      isVideo: true,
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
      image: "/Malcom.mp4",
      isVideo: true,
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
  image: "/Arm.mp4",
      isVideo: true,
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
            const isTextVisible = textVisibleSections.has(index);
            const isLeft = page.position === "left";
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            
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
                    className="absolute inset-0 w-full h-full object-cover mobile-zoom-out"
                    style={{ objectPosition: 'center center' }}
                  />
                ) : (
                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    className="object-cover mobile-zoom-out"
                    priority={index <= 1}
                    quality={100}
                    sizes="100vw"
                    style={{ objectPosition: 'center center' }}
                  />
                )}
                
                {/* Mobile-optimized text content */}
                <div 
                  className={`absolute w-full px-4 ${
                    // Mobile: center of screen
                    'top-1/2 left-0 -translate-y-1/2 text-center ' +
                    // Desktop: bottom corners
                    (isLeft 
                      ? 'md:w-auto md:px-0 md:translate-y-0 md:bottom-8 md:left-8 md:text-left md:top-auto' 
                      : 'md:w-auto md:px-0 md:translate-y-0 md:bottom-8 md:right-8 md:left-auto md:text-right md:top-auto')
                  }`}
                >
                  <div className={`inline-block max-w-[280px] sm:max-w-sm md:max-w-md transition-opacity duration-500 ${
                    isTextVisible
                      ? isLeft 
                        ? 'opacity-100 md:animate-slide-in-left' 
                        : 'opacity-100 md:animate-slide-in-right'
                      : 'opacity-0'
                  }`}
                >
                  {/* Icon */}
                  <Icon 
                    className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white mb-2 md:mb-3 mx-auto ${
                      isLeft ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'
                    } animate-fade-in-up`}
                    style={{ 
                      animationDelay: '0.2s',
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
                    }}
                  />
                  
                  {/* Title */}
                  <h1 
                    className="text-2xl sm:text-3xl md:text-2xl font-bold text-white mb-1 animate-fade-in-up"
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
                    className="text-base sm:text-lg md:text-lg font-semibold text-white mb-2 animate-fade-in-up"
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
                        className="text-sm sm:text-base md:text-base font-normal text-white leading-tight animate-fade-in-up"
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}