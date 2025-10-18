// src/components/Starfield.tsx
"use client";
import { useEffect, useRef } from "react";

type Props = {
  density?: number;          // 배경 별 밀도
  twinkleSpeed?: number;     // 반짝임 속도
  shootingEvery?: number;    // 초당 평균 별똥별 발생(모바일은 자동으로 낮춤)
  accent?: string;           // 별똥별 색
};

export default function Starfield({
  density = 0.12,
  twinkleSpeed = 0.9,
  shootingEvery = 0.14,       // ★ 기본값 올림(이전보다 자주)
  accent = "#FFB800",
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    let w = 0, h = 0;
    const resize = () => {
      const b = canvas.parentElement!.getBoundingClientRect();
      w = Math.floor(b.width);
      h = Math.floor(b.height);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    };

    type Star = { x:number; y:number; r:number; baseA:number; phase:number; speed:number; };
    type Shooter = { x:number; y:number; vx:number; vy:number; life:number; };

    let stars: Star[] = [];
    let shooters: Shooter[] = [];
    let last = performance.now();

    const initStars = () => {
      const count = Math.floor(w * h * density / 900); // 밀도 살짝 ↑
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.4,
        baseA: Math.random() * 0.5 + 0.35,
        phase: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.6 + 0.7) * twinkleSpeed,
      }));
    };

    const spawnShooter = () => {
      // 왼쪽 상단/중앙 부근에서 자주 나오게
      const x = Math.random() * (w * 0.45) + w * 0.05;
      const y = Math.random() * (h * 0.45) + h * 0.05;

      // px/s 단위 속도
      const speed = 900 + Math.random() * 700; // ★ 빠르게
      const angle = (-20 - Math.random() * 25) * (Math.PI / 180); // 좌→우아래 대각
      shooters.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0.9 + Math.random() * 0.7, // 0.9~1.6s
      });
    };

    const draw = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;

      // 프레임 클리어
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, w, h);

      // 별 반짝임
      for (const s of stars) {
        s.phase += dt * s.speed * 2.0;
        const a = s.baseA + Math.sin(s.phase) * 0.35;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, a))})`;
        ctx.fill();
      }

      // ★ 스폰 확률(포아송) — 데스크톱↑, 모바일↓
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const rate = isMobile ? shootingEvery * 0.6 : shootingEvery * 1.0;
      const p = 1 - Math.exp(-(rate * Math.max(dt, 0)));
      if (Math.random() < p) spawnShooter();

      // 별똥별 (밝게/굵게/길게)
      ctx.globalCompositeOperation = "lighter";
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.life -= dt;

        // 트레일 길이/굵기/글로우 강화
        const vel = Math.hypot(s.vx, s.vy) || 1;
        const trail = 220;                 // ★ 더 길게
        const tx = s.x - (s.vx / vel) * trail;
        const ty = s.y - (s.vy / vel) * trail;

        const grad = ctx.createLinearGradient(s.x, s.y, tx, ty);
        grad.addColorStop(0.0, `${accent}FF`);
        grad.addColorStop(0.5, `${accent}66`);
        grad.addColorStop(1.0, `${accent}00`);
        ctx.strokeStyle = grad as unknown as string;
        ctx.lineWidth = 2.6;              // ★ 더 굵게
        ctx.shadowBlur = 12;              // ★ 글로우
        ctx.shadowColor = accent;

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();

        // 핵(코어) 점
        ctx.shadowBlur = 18;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2.2, 0, Math.PI * 2); // ★ 더 크게
        ctx.fill();
        ctx.shadowBlur = 0;

        if (s.life <= 0 || s.x > w + 120 || s.y > h + 120 || s.y < -120) {
          shooters.splice(i, 1);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener("resize", resize);
    };
  }, [density, twinkleSpeed, shootingEvery, accent]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 z-[2] pointer-events-none [mix-blend-mode:screen]"
      aria-hidden
    />
  );
}
