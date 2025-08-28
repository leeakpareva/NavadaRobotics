"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ContactPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/?page=contact");
  }, [router]);

  return null;
}