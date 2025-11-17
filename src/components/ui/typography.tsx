// src/components/ui/typography.tsx
"use client";

import * as React from "react";

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4;
  align?: "left" | "center" | "right";
};

export function Heading({
  level = 2,
  align = "left",
  className,
  ...props
}: HeadingProps) {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;

  const sizeMap: Record<number, string> = {
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
        "tracking-tight text-white",
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
  const colorClass = muted ? "text-neutral-400" : "text-neutral-300";

  return (
    <p
      className={cx(
        sizeClass,
        colorClass,
        "leading-relaxed",
        className
      )}
      {...props}
    />
  );
}
