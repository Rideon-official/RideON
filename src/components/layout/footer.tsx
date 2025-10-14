// src/components/layout/footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-neutral-400">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} RIDE ON. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="/brand" className="hover:text-[#FFB800]">BRAND</Link>
            <Link href="/bike" className="hover:text-[#FFB800]">BIKE</Link>
            <Link href="/store" className="hover:text-[#FFB800]">STORE</Link>
            <Link href="/notice" className="hover:text-[#FFB800]">NOTICE</Link>
            <Link href="/contact" className="hover:text-[#FFB800]">CONTACT</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}