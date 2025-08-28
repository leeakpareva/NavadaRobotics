"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RaspberryPiPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/?page=raspberry-pi");
  }, [router]);

  return null;
}