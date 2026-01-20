"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Wrench, BarChart3 } from "lucide-react";
import { FadeUp } from "./ui/MotionWrapper";
import { Heading, Eyebrow, BodyText } from "./ui/typography";

const items = [
  {
    title: "지사 가맹 문의",
    subtitle: "PARTNERSHIP",
    description: "초기 비용의 부담은 덜어내고 몸과 열정만으로 시작할 수 있는 최적의 환경을 제공합니다. 지역권 확보부터 라이더 모집까지 지사장님의 성공적인 안착을 위해 라이드온만의 현장 맞춤형 로드맵을 완벽하게 설계해 드립니다.",
    link: "#contact",
    cta: "1:1 성공 컨설팅 신청", // CTA 수정
    icon: <Users className="w-6 h-6 text-brand-accent" />,
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "본사 지원 시스템",
    subtitle: "SYSTEM & BENEFIT",
    // '교육 시스템'을 '수급 및 관리 체계'로 수정하여 현실성 강화
    description: "복잡한 정산 업무의 자동화부터 체계적인 라이더 수급 및 관리 체계까지, 지사장님이 오직 영업과 운영에만 집중하실 수 있도록 라이드온 본사가 보유한 모든 인프라를 전폭적으로 지원합니다.",
    link: "/brand",
    cta: "지원 항목 전체보기",
    icon: <Wrench className="w-6 h-6 text-brand-accent" />,
    color: "from-indigo-500/20 to-transparent",
  },
  {
    title: "성공 사례/수익 모델",
    subtitle: "SUCCESS STORY",
    description: "라이드온과 파트너십을 맺고 안정적인 수익을 창출하고 있는 전국 지사장님들의 실제 운영 데이터와 성공 노하우를 확인하고, 귀하의 지역에 적합한 최적의 비즈니스 모델을 발견해 보세요.",
    link: "/network",
    cta: "실제 수익 확인하기",
    icon: <BarChart3 className="w-6 h-6 text-brand-accent" />,
    color: "from-purple-500/20 to-transparent",
  },
];

export default function QuickAccess() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-6">
      {/* --- 섹션 헤더: 요청하신 제목/부제목 반영 --- */}
      <div className="mb-12 lg:mb-16">
        <FadeUp>
          <Eyebrow className="text-brand-accent/80 mb-2 font-bold tracking-tight">
            라이드온과 함께하는 성공적인 시작
          </Eyebrow>
          
          <Heading level={2} className="text-3xl lg:text-5xl font-black tracking-tighter mb-8">
            지사장님을 위한 <span className="text-white">핵심 서비스</span>
          </Heading>

          <div className="flex flex-col gap-1.5 border-l-2 border-brand-accent/20 pl-6">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {items.map((item, index) => (
          <FadeUp key={index} delay={index * 0.1}>
            <Link href={item.link}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-md transition-all hover:border-brand-accent/40 hover:bg-white/[0.06]"
              >
                <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${item.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <div className="mb-2 text-[10px] font-black tracking-[0.25em] text-brand-accent/50 uppercase">
                    {item.subtitle}
                  </div>
                  
                  <h3 className="mb-4 text-xl lg:text-2xl font-black text-white group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="mb-10 text-sm lg:text-base leading-relaxed text-text-body opacity-70 group-hover:opacity-100 transition-opacity flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs lg:text-sm font-black text-white/40 group-hover:text-brand-accent transition-colors mt-auto">
                    {item.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </FadeUp>
        ))}
      </div>

      {/* --- 하단 슬로건 --- */}
      <FadeUp delay={0.4}>
        <div className="py-6 px-8 rounded-xl bg-white/[0.02] border-l-4 border-brand-accent backdrop-blur-sm transition-all hover:bg-white/[0.04]">
          <p className="text-base lg:text-lg text-text-body/90 font-medium leading-relaxed tracking-tight">
            <span className="text-brand-accent font-black mr-4 tracking-widest text-xs uppercase bg-brand-accent/10 px-2 py-1 rounded">Check Point</span>
            <span className="text-white font-bold">직영 정비 센터</span> 기반의 <span className="text-white font-bold">자체 렌탈/리스 인프라</span>, 전국 30개 지사 연동 망, <span className="text-white font-bold">브랜드 전용 굿즈(조끼·탑박스)</span> 제작 지원
          </p>
        </div>
      </FadeUp>
    </div>
  );
}