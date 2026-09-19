import { useEffect, useRef, useState } from "react";
import casinoVideo from "@/assets/video/casino.MP4";
import posterImg from "@/assets/casino/casino gold.webp";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const load = () => setSrc((current) => current ?? casinoVideo);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!src || !el) return;
    void el.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={posterImg}
      className="block h-full w-full rounded-xl object-contain sm:rounded-[20px]"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      controls={false}
    />
  );
}
