"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  className?: string;
};

export default function StatCounter({ value, suffix = "", className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let current = 0;
        const stepTime = Math.floor(1200 / value);
        const timer = setInterval(() => {
          current += 1;
          setCount(current);
          if (current >= value) clearInterval(timer);
        }, stepTime);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
