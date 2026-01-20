"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, BarChart3 } from "lucide-react";
import { FadeUp } from "./ui/MotionWrapper";
import { Heading, Eyebrow, BodyText } from "./ui/typography";

const items = [
  {
    title: "지사 가맹 문의",
    subtitle: "PARTNERSHIP",
    description: "초기 비용부터 지역권 확보까지, 전문가와의 1:1 상담을 통해 명확한 로드맵을 그려보세요.",
    link: "#contact",
    icon: <Users className="w-6 h-6 text-brand-accent" />,
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "운영 시스템/혜택",
    subtitle: "SYSTEM & BENEFIT",
    description: "정산 자동화부터 라이더 교육까지, 지사장은 영업에만 집중할 수 있도록 본사가 모든 인프라를 지원합니다.",
    link: "/brand",
    icon: <Zap className="w-6 h-6 text-brand-accent" />,
    color: "from-indigo-500/20 to-transparent",
  },
  {
    title: "성공 사례/수익 모델",
    subtitle: "SUCCESS STORY",
    description: "라이드온과 함께하며 안정적인 수익을 창출하고 있는 전국 지사장님들의 실제 데이터와 성공 노하우를 확인하세요.",
    link: "/network",
    icon: <BarChart3 className="w-6 h-6 text-brand-accent" />,
    color: "from-purple-500/20 to-transparent",
  },
];

export default function QuickAccess() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-6">
      {/* --- 섹션 헤더 --- */}
      <div className="mb-12 lg:mb-16">
        <FadeUp>
          <Eyebrow className="text-brand-accent/80 mb-2 font-bold">가장 많이 찾는 서비스</Eyebrow>
          
          <Heading level={2} className="text-3xl lg:text-5xl font-black tracking-tighter mb-8">
            라이드온 <span className="text-white">빠른 메뉴</span>
          </Heading>

          {/* 요청하신 설명글 3줄 */}
          <div className="flex flex-col gap-1.5">
            <BodyText className="text-text-body/80 text-sm lg:text-lg leading-relaxed font-medium">
              복잡한 배달 운영, 이제 감이 아닌 데이터와 시스템으로 관리할 때입니다.
            </BodyText>
            <BodyText className="text-text-body/80 text-sm lg:text-lg leading-relaxed font-medium">
              전국 단위의 인프라와 검증된 운영 노하우를 지사 운영에 그대로 이식하세요.
            </BodyText>
            <BodyText className="text-text-body/80 text-sm lg:text-lg leading-relaxed font-medium">
              단순한 가맹을 넘어 지사장님의 지속 가능한 성장을 위한 실질적인 파트너가 됩니다.
            </BodyText>
          </div>
        </FadeUp>
      </div>

      {/* --- 카드 그리드 --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <FadeUp key={index} delay={index * 0.1}>
            <Link href={item.link}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md transition-all hover:border-brand-accent/40 hover:bg-white/[0.06]"
              >
                {/* 배경 앰비언트 조명 효과 */}
                <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${item.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* 아이콘 영역 */}
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  {/* 부제목(영문) */}
                  <div className="mb-2 text-[10px] font-black tracking-[0.25em] text-brand-accent/50 uppercase">
                    {item.subtitle}
                  </div>
                  
                  {/* 카드 제목 */}
                  <h3 className="mb-4 text-xl lg:text-2xl font-black text-white group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* 카드 설명 */}
                  <p className="mb-10 text-sm lg:text-base leading-relaxed text-text-body opacity-70 group-hover:opacity-100 transition-opacity flex-grow">
                    {item.description}
                  </p>
                  
                  {/* 푸터 버튼 */}
                  <div className="flex items-center gap-2 text-xs font-black text-white/30 group-hover:text-brand-accent transition-colors mt-auto">
                    자세히 보기 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
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