"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MobileCTA } from "./MobileCTA";

export function NavPanel({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const navItems = [
    { href: "/brand", label: "브랜드" },
    { href: "/bike", label: "라이드온 바이크" },
    { href: "/logiteats", label: "LogitEats" },
    { href: "/store", label: "스토어" },
    { href: "/notice", label: "공지" },
    { href: "/cases", label: "사례" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col bg-[#1A1A1A] divide-y divide-[rgba(241,241,241,0.06)] md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <nav className="flex flex-col px-6 pt-24 space-y-6 text-lg font-semibold">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="focus:outline-none focus:ring-2 focus:ring-[#FFB800] rounded-sm"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto border-t border-white/10">
            <MobileCTA />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
