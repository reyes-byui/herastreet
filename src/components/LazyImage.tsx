"use client";
import React, { useRef, useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";

// Extend ImageProps to allow all props
interface LazyImageProps extends ImageProps {
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ className = "", ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ willChange: "opacity, transform" }}
    >
      <Image {...props} className={className} loading="lazy" />
    </div>
  );
};

export default LazyImage;
