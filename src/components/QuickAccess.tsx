"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Settings2, Bike } from "lucide-react";
import { FadeUp } from "./ui/MotionWrapper";
import { Heading, Eyebrow } from "./ui/typography";

const items = [
  {
    title: "지사 가맹 문의",
    subtitle: "FOR PARTNERS",
    description: "지역·규모에 맞는 지사 구조를 바로 안내합니다.\n초기 비용부터 운영 방식까지 상담으로 명확히 정리하세요.",
    link: "#contact",
    icon: <Users className="w-6 h-6 text-brand-accent" />,
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "운영 구조 확인",
    subtitle: "FOR BRANCH OWNER",
    description: "지사장은 무엇을 관리하고,\n본사는 어디까지 지원하는지 한눈에 확인하세요.",
    link: "/brand",
    icon: <Settings2 className="w-6 h-6 text-brand-accent" />,
    color: "from-indigo-500/20 to-transparent",
  },
  {
    title: "바이크 렌탈 안내",
    subtitle: "RENTAL SERVICE",
    description: "최고의 컨디션을 자랑하는 차량을\n합리적인 비용으로 이용해 보세요.",
    link: "/bike",
    icon: <Bike className="w-6 h-6 text-brand-accent" />,
    color: "from-purple-500/20 to-transparent",
  },
];

export default function QuickAccess() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-6">
      {/* --- 섹션 제목 추가 (사라졌던 부분!) --- */}
      <div className="mb-12 lg:mb-16">
        <FadeUp>
          <Eyebrow className="text-brand-accent/60 mb-2">QUICK ACCESS</Eyebrow>
          <Heading level={2} className="text-3xl lg:text-5xl font-black tracking-tighter">
            라이드온 <span className="text-brand-accent">빠른 메뉴</span>
          </Heading>
        </FadeUp>
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <FadeUp key={index} delay={index * 0.1}>
            <Link href={item.link}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-sm transition-all hover:border-brand-accent/30 hover:bg-white/[0.05]"
              >
                {/* 배경 은은한 그라데이션 효과 */}
                <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${item.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-accent/50 group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  
                  <div className="mb-1 text-[10px] font-black tracking-[0.2em] text-brand-accent/60 uppercase">
                    {item.subtitle}
                  </div>
                  
                  <h3 className="mb-4 text-xl font-black text-white group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="mb-8 text-sm leading-relaxed text-text-body whitespace-pre-line opacity-80 flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-bold text-white/40 group-hover:text-brand-accent transition-colors mt-auto">
                    자세히 보기 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}