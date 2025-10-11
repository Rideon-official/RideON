"use client";
import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number; vx: number; vy: number;
  trail: {x:number; y:number}[];
  arrived: boolean;
};

export default function ConvergeToLogoParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const prefersReduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) return () => {};

    // 타겟: RIDE ON 범위 계산
    const rideon = document.getElementById("rideon-text");
    if (!rideon) return;

    const updateTarget = () => {
      const r = rideon.getBoundingClientRect();
      const c = canvas.getBoundingClientRect();
      // 타겟 중앙 근처로 약간 랜덤 분산
      target.x = r.left - c.left + r.width * 0.55;
      target.y = r.top - c.top + r.height * 0.55;
      target.w = r.width; target.h = r.height;
    };

    const target = { x: 0, y: 0, w: 0, h: 0 };
    updateTarget();
    const onResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      updateTarget();
    };
    window.addEventListener("resize", onResize);
    const obs = new ResizeObserver(onResize);
    obs.observe(document.body);

    // 맵 느낌: 화면 왼쪽 상단~중앙 근처에서 출발시켜 한국쪽에서 오는 효과
    const BRAND = "#FFB800";
    const COUNT = 60;
    const particles: Particle[] = Array.from({ length: COUNT }).map(() => {
      const startX = Math.random() * (width * 0.55);  // 왼쪽 절반
      const startY = Math.random() * (height * 0.8);  // 상중하 분포
      return { x: startX, y: startY, vx: 0, vy: 0, trail: [], arrived: false };
    });

    let flash = 0; // 도착 순간 텍스트 번쩍임 (0~1)

    function step() {
      ctx.clearRect(0, 0, width, height);

      // 검은 바탕에 아주 약한 잔상(유성 꼬리)
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, width, height);

      let arrivedThisFrame = 0;

      for (const p of particles) {
        const dx = target.x - p.x;
        const dy = target.y - p.y;
        const d = Math.max(1, Math.hypot(dx, dy));

        if (!p.arrived) {
          // 가속 + 감속 섞기 (도착 전엔 빠르고 가까울수록 천천히)
          const speed = Math.min(12, Math.max(4, d * 0.02));
          p.vx = (dx / d) * speed + (Math.random() - 0.5) * 0.6; // 살짝 흔들림
          p.vy = (dy / d) * speed + (Math.random() - 0.5) * 0.6;
          p.x += p.vx;
          p.y += p.vy;

          // 도착 판정(텍스트 영역 근처)
          if (d < Math.max(16, Math.min(target.w, target.h) * 0.22)) {
            p.arrived = true;
            arrivedThisFrame++;
          }
        } else {
          // 도착 후 글자 주변에서 반짝거리는 작은 떠다님
          p.x += (Math.random() - 0.5) * 0.6;
          p.y += (Math.random() - 0.5) * 0.6;
        }

        // 트레일 관리
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 12) p.trail.shift();

        // 유성 꼬리 그리기 (네온 그라데이션)
        for (let i = 1; i < p.trail.length; i++) {
          const a = p.trail[i - 1];
          const b = p.trail[i];
          const grd = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grd.addColorStop(0, "rgba(255,184,0,0.0)");
          grd.addColorStop(1, "rgba(255,184,0,0.8)");
          ctx.strokeStyle = grd;
          ctx.lineWidth = Math.max(1, 3 - (p.trail.length - i) * 0.25);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }

        // 헤드(별똥별 앞쪽 점)
        ctx.fillStyle = BRAND;
        ctx.shadowBlur = 12;
        ctx.shadowColor = BRAND;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 여러 개가 같은 프레임에 도착하면 플래시 세게
      if (arrivedThisFrame > 0) flash = Math.min(1, flash + arrivedThisFrame * 0.08);
      if (flash > 0) flash *= 0.92; // 서서히 사라짐

      // 글자 번쩍임 오버레이
      if (flash > 0) {
        const grd = ctx.createRadialGradient(target.x, target.y, 8, target.x, target.y, Math.max(target.w, target.h) * 0.9);
        grd.addColorStop(0, `rgba(255,184,0,${0.35 * flash})`);
        grd.addColorStop(1, "rgba(255,184,0,0)");
        ctx.fillStyle = grd;
        ctx.globalCompositeOperation = "screen";
        ctx.beginPath();
        ctx.arc(target.x, target.y, Math.max(target.w, target.h), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      }

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      obs.disconnect();
    };
  }, []);

  // Hero 섹션 안에서 전체를 덮도록 배치
  return (
    <canvas
      ref={canvasRef}
      className="
        pointer-events-none
        absolute inset-0
        w-full h-full
      "
      aria-hidden
    />
  );
}
