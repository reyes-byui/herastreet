"use client";
import React, { useRef, useEffect, useState, ReactNode } from "react";

import { ComponentPropsWithoutRef, ElementType } from "react";



type SlideDirection = 'left' | 'right' | 'up' | 'down';
type LazyTextProps<T extends ElementType = 'div'> = {
  as?: T;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
  direction?: SlideDirection;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'style' | 'children' | 'direction'>;


function LazyText<T extends ElementType = 'div'>(props: LazyTextProps<T>) {
  const { children, className = "", as, style, direction, ...rest } = props;
  const ref = useRef<HTMLElement>(null);
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

  const Tag = (as || 'div') as ElementType;

  // Determine direction: if as is 'p' and no direction is set, use 'right', else default to 'left'
  let slideDirection: SlideDirection = direction || (as === 'p' ? 'right' : 'left');
  let initialTransform = '';
  if (slideDirection === 'left') initialTransform = '-translate-x-8';
  else if (slideDirection === 'right') initialTransform = 'translate-x-8';
  else if (slideDirection === 'up') initialTransform = '-translate-y-8';
  else if (slideDirection === 'down') initialTransform = 'translate-y-8';

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${initialTransform}`
      } ${className}`}
      style={{ willChange: "opacity, transform", ...style }}
      {...(rest as any)}
    >
      {children}
    </Tag>
  );
}

export default LazyText;
