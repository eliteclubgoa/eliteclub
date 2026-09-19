import type { ImgHTMLAttributes } from "react";

type SmartImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

export function SmartImage({
  priority = false,
  loading,
  fetchPriority,
  decoding,
  alt,
  ...rest
}: SmartImageProps) {
  return (
    <img
      {...rest}
      alt={alt ?? ""}
      loading={priority ? "eager" : (loading ?? "lazy")}
      fetchPriority={priority ? "high" : (fetchPriority ?? "low")}
      decoding={decoding ?? "async"}
    />
  );
}
