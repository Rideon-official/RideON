import Link from "next/link";
import { ExternalLink } from "lucide-react";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  children: React.ReactNode;
};

export function Button({ href, variant = "primary", external, children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111]";

  const styles =
    variant === "primary"
      ? "bg-[#FFB800] text-[#111111] hover:bg-[#ffcc33] focus:ring-[#FFB800]"
      : "border border-white/15 text-white hover:bg-white/10 focus:ring-white/40";

  const content = (
    <>
      {children}
      {external && <ExternalLink size={14} className="ml-1" aria-hidden="true" />}
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {content}
    </a>
  ) : (
    <Link href={href} className={`${base} ${styles}`}>
      {content}
    </Link>
  );
}
