"use client";

import { useState } from "react";
import { Menu, X, Home, Cpu, Eye, Brain, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ContactForm from "./ContactForm";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 0, label: "Home", icon: Home },
    { id: 1, label: "Raspberry Pi", icon: Cpu },
    { id: 2, label: "Computer Vision", icon: Eye },
    { id: 3, label: "AI Robotics", icon: Brain },
    { id: 4, label: "About Me", icon: User },
    { id: 5, label: "Contact", icon: Mail },
  ];

  const scrollToSection = (index: number) => {
    const container = document.querySelector('.overflow-x-auto');
    if (container) {
      const scrollAmount = index * window.innerWidth;
      container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-md hover:bg-white/20"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-black/95 backdrop-blur-xl border-r border-white/10">
        <SheetHeader>
          <SheetTitle className="text-white text-xl font-bold">NAVADA Robotics</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-white/70 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium text-left">{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <ContactForm />
        </div>
      </SheetContent>
    </Sheet>
  );
}