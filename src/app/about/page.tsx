"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AboutPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/?page=about");
  }, [router]);

  return null;
}