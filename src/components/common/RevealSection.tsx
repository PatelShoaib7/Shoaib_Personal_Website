import React, { useEffect, useRef, useState } from 'react';
import { IRevealSectionProps } from '../../interfaces';
import { cn } from '../../utils';

export const RevealSection: React.FC<IRevealSectionProps> = ({
  children,
  delayMs = 0,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -32px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform]',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
};
