import { type ReactNode, Children, cloneElement, isValidElement } from "react";
import { useInView } from "@/hooks/use-in-view";

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const [ref, inView] = useInView({ once: true, amount: 0.12, margin: "0px 0px -8% 0px" });

  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export function RevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [ref, inView] = useInView({ once: true, amount: 0.08, margin: "0px 0px -6% 0px" });

  // Pass inView status to children using context or cloning
  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          // Calculate staggered delay for children
          const staggerDelay = index * 0.09;
          return cloneElement(child, {
            // @ts-expect-error passing custom props to child
            "data-in-view": inView,
            "data-delay": staggerDelay,
          });
        }
        return child;
      })}
    </div>
  );
}

export function RevealItem({
  children,
  className = "",
  "data-in-view": inView = false,
  "data-delay": delay = 0,
}: {
  children: ReactNode;
  className?: string;
  "data-in-view"?: boolean;
  "data-delay"?: number;
}) {
  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(26px)",
    transition: `opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
