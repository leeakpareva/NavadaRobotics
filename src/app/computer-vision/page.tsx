"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ComputerVisionPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/?page=computer-vision");
  }, [router]);

  return null;
}