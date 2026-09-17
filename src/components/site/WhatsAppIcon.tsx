import { FaWhatsapp } from "react-icons/fa";

type WhatsAppIconProps = {
  size?: number;
  className?: string;
};

export function WhatsAppIcon({ size = 18, className }: WhatsAppIconProps) {
  return (
    <FaWhatsapp
      aria-hidden="true"
      className={className}
      color="#25D366"
      size={size}
    />
  );
}