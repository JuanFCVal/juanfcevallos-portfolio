"use client";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Props = {
  value: number;
  suffix?: string;
  className?: string;
};

export default function StatCounter({ value, suffix = "", className = "" }: Props) {
  const { ref, isVisible } = useScrollAnimation(0.5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let current = 0;
    const totalDuration = 1200;
    const stepTime = Math.floor(totalDuration / value);
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= value) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
