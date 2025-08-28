"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, ChevronUp, ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:leeakpareva@hotmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full">
      <Button
        variant="outline"
        className="w-full justify-between bg-white/10 border-white/20 hover:bg-white/20 text-white"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Contact Us
        </span>
        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>
      
      {isExpanded && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <Label htmlFor="name" className="text-white/80 text-sm">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-white/80 text-sm">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-white/80 text-sm">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
              placeholder="Your message..."
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-white/90"
          >
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
}