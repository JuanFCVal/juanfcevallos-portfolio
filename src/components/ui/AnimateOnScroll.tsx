"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Animation = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in";

type Props = {
  children: React.ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
  as: Tag = "div",
}: Props) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`aos ${animation} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
