"use client";
key={deg}
custom={idx}
initial={{ scaleX: 1 }}
animate={lineControls}
style={{
position: "absolute",
top: "50%",
left: "50%",
width: "40vw",
height: 2,
background:
"linear-gradient(to right, rgba(255,184,0,0.0), rgba(255,184,0,0.85))",
transform: `rotate(${deg}deg) translateX(-20vw)`,
transformOrigin: "right center",
boxShadow: "0 0 12px rgba(255,184,0,0.6)",
filter: "drop-shadow(0 0 16px rgba(255,217,102,0.35))",
}}
/>
))}
</div>


{/* Copy */}
<div className="relative z-10 px-6 text-center">
<motion.p
initial={{ opacity: 0, y: 8 }}
animate={textControls}
className="mb-3 text-sm tracking-widest text-[#FFD966]/90"
>
전국을 잇는 배달 인프라
</motion.p>


<motion.h1
initial={{ opacity: 0, y: 8 }}
animate={logoControls}
className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold ${neon.base}`}
style={neon.glow}
>
RIDE ON
</motion.h1>


<motion.p
initial={{ opacity: 0, y: 8 }}
animate={textControls}
className="mt-5 max-w-3xl text-base sm:text-lg text-white/85 mx-auto"
>
신속한 혁신과 지속적인 추진력으로 전진하며, 모두를 연결하는 중심점
</motion.p>
</div>


{/* vignette */}
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_46%,rgba(0,0,0,0.55)_100%)]" />
</section>
);
}