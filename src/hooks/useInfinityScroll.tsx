import { useRef } from 'react';

export default function useInfinityScroll(callback: () => void) {
  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 0.5 },
    ),
  );

  //@ts-ignore
  const observe = element => {
    observer.current.observe(element);
  };

  //@ts-ignore
  const unobserve = element => {
    observer.current.unobserve(element);
  };

  return { observe, unobserve };
}
