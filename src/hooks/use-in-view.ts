import { useEffect, useRef, useState, type RefObject } from "react";

interface UseInViewOptions {
  once?: boolean;
  amount?: number;
  margin?: string;
}

export function useInView<T extends Element = HTMLDivElement>({
  once = true,
  amount = 0.1,
  margin = "0px",
}: UseInViewOptions = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use a small delay for mounting to ensure layout is ready
    let observer: IntersectionObserver | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const initObserver = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          // If the element is intersecting based on amount threshold
          if (entry && entry.isIntersecting) {
            setIsInView(true);
            if (once && observer) {
              observer.disconnect();
            }
          } else if (!once) {
            setIsInView(false);
          }
        },
        {
          root: null,
          rootMargin: margin,
          threshold: amount,
        },
      );

      observer.observe(el);
    };

    // Small delay prevents premature firing before full layout on initial load
    timeoutId = setTimeout(initObserver, 50);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, [once, amount, margin]);

  return [ref, isInView];
}
