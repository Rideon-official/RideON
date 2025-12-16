// src/components/ui/typography.tsx
"use client";

import * as React from "react";

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingTag = "h1" | "h2" | "h3" | "h4";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
  align?: "left" | "center" | "right";
};

export function Heading({
  level = 2,
  align = "left",
  className,
  ...props
}: HeadingProps) {
  const Tag = (`h${level}` as HeadingTag);

  const sizeMap: Record<HeadingLevel, string> = {
    1: "text-4xl md:text-5xl font-bold",
    2: "text-2xl md:text-3xl font-semibold",
    3: "text-lg md:text-xl font-semibold",
    4: "text-base font-semibold",
  };

  const alignClass =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <Tag
      className={cx(
        "tracking-tight text-inherit",
        sizeMap[level],
        alignClass,
        className
      )}
      {...props}
    />
  );
}

type EyebrowProps = React.HTMLAttributes<HTMLDivElement>;
export function Eyebrow({ className, ...props }: EyebrowProps) {
  return (
    <div
      className={cx(
        "text-[11px] md:text-xs uppercase tracking-[0.16em] text-[#FFB800]",
        className
      )}
      {...props}
    />
  );
}

type BodyTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: "sm" | "md";
  muted?: boolean;
};

export function BodyText({
  size = "md",
  muted = false,
  className,
  ...props
}: BodyTextProps) {
  const sizeClass =
    size === "md" ? "text-sm md:text-[15px]" : "text-xs md:text-[13px]";
  const colorClass = muted ? "text-white/65" : "text-white/80";
  return (
    <p className={cx(sizeClass, colorClass, "leading-relaxed", className)} {...props} />
  );
}
