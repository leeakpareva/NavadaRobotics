"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AIRoboticsPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/?page=ai-robotics");
  }, [router]);

  return null;
}