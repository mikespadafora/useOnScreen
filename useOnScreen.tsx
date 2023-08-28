import { useEffect, useState, RefObject } from 'react';

export default function useOnScreen<T extends HTMLElement>(
  ref: RefObject<T>,
  rootMargin: string = '0px',
): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        console.log(entry);
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current as T);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}
