"use client";
import { useEffect, useRef } from "react";

type Props = {
  density?: number;          // 별 개수(화면 넓이 * density)
  twinkleSpeed?: number;     // 반짝임 속도(0.5~1.5 권장)
  shootingEvery?: number;    // 초당 평균 별똥별 스폰 확률(0.0~0.5)
  accent?: string;           // 별똥별 강조 색
};

export default function Starfield({
  density = 0.12,
  twinkleSpeed = 0.9,
  shootingEvery = 0.06,
  accent = "#FFB800",
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>();
  const running = useRef(true);

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
      const count = Math.floor(w * h * density / 1000); // 화면 크기 기반
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,              // 반경
        baseA: Math.random() * 0.5 + 0.35,         // 기본 밝기
        phase: Math.random() * Math.PI * 2,        // 반짝임 위상
        speed: (Math.random() * 0.6 + 0.7) * twinkleSpeed,
      }));
    };

    const spawnShooter = () => {
      const fromTop = Math.random() < 0.6;
      const x = Math.random() * (w * 0.5) + w * 0.1; // 좌측에서 더 자주 나오게
      const y = fromTop ? Math.random() * (h * 0.5) : Math.random() * (h * 0.4) + h*0.1;
      const speed = Math.random() * 8 + 10;         // 속도(px/frame)
      const angle = (-25 - Math.random()*20) * (Math.PI/180); // 왼→오/아래 대각
      shooters.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0.9 + Math.random() * 0.6,           // 초 단위
      });
    };

    const draw = (t: number) => {
      const dt = Math.min(0.05, (t - last) / 1000); // sec
      last = t;

      // 페이드(잔상)로 은은한 트레일
      ctx.clearRect(0, 0, w, h);

      // 별(트윙클)
      for (const s of stars) {
        s.phase += dt * s.speed * 2.0;
        const a = s.baseA + Math.sin(s.phase) * 0.35; // twinkle
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, a))})`;
        ctx.fill();
      }

      // 랜덤 확률로 슈터 생성
      if (Math.random() < shootingEvery * dt) spawnShooter();

      // 슈팅 스타
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.x += s.vx * dt * 60;
        s.y += s.vy * dt * 60;
        s.life -= dt;

        // 트레일
        const trailLen = 70;
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx*2, s.y - s.vy*2);
        grad.addColorStop(0, `${accent}EE`);
        grad.addColorStop(1, `${accent}00`);
        ctx.strokeStyle = grad as unknown as string;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * (trailLen/100), s.y - s.vy * (trailLen/100));
        ctx.stroke();

        // 핵심 점
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.4, 0, Math.PI * 2);
        ctx.fill();

        if (s.life <= 0 || s.x > w+60 || s.y > h+60 || s.y < -60) {
          shooters.splice(i, 1);
        }
      }

      if (running.current) rafRef.current = requestAnimationFrame(draw);
    };

    // 접근성: 탭 비활성/감속 모드에선 멈춤
    const onVis = () => (running.current = document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    resize();  // 초기화
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      running.current = false;
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [density, twinkleSpeed, shootingEvery, accent]);

  return (
    <canvas
  ref={ref}
  className="absolute inset-0 z-[2] pointer-events-none [mix-blend-mode:screen]"
/>
  );
}
