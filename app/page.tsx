"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  AlertTriangle,
  TrendingDown,
  Shield,
  Network,
  CheckCircle2,
  ArrowRight,
  FileText,
  Download,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* ROI Section */}
      <ROISection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            2025 KICOX 산단안전 제도개선 공모전 제안서
          </p>
          <p className="text-slate-500 mt-2 text-sm">
            고위험 중소기업 스마트 관제센터 의무 연계 방안
          </p>
        </div>
      </footer>
    </main>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 py-32 text-center"
      >
        {/* Alert Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-6 py-3 rounded-full mb-8"
        >
          <AlertTriangle className="w-5 h-5" />
          <span className="font-medium">2024년 6월 14일 새벽 2시, 창원 산단</span>
        </motion.div>

        {/* Incident Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-4">
            24년 된 압력용기에서 증기가 누출되기 시작했습니다.<br />
            <span className="font-semibold">하지만 아무도 몰랐습니다.</span>
          </p>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">
            새벽 4시, 압력용기가 폭발했습니다.<br />
            <span className="text-red-600 font-bold">근로자 2명 사망, 7명 중상</span>
          </p>
          <div className="bg-slate-100 border-l-4 border-blue-600 p-6 text-left rounded-r-lg">
            <p className="text-slate-700 mb-4">
              <span className="font-semibold">만약</span> A사의 압력용기가 3km 떨어진{" "}
              <span className="text-blue-600 font-bold">'창원 스마트 통합관제센터'</span>와 연결되어 있었다면?
            </p>
            <p className="text-slate-600">
              AI가 새벽 2시 이상 징후를 포착 → 관제센터 긴급 연락 → 밸브 잠금 →{" "}
              <span className="text-green-600 font-bold">참사 예방</span>
            </p>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight"
        >
          산단 안전의<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
            '속 빈 강정'
          </span>
          <br />
          채운다
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto"
        >
          고위험 중소기업 스마트 관제센터 의무 연계를 통한<br />
          <span className="font-semibold">「산업집적법 시행령」 개정 방안</span>
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <p className="text-sm">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="w-6 h-6 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      value: "97%",
      label: "노후 산단(20년+) 중대사고 집중도",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      value: "1.7배",
      label: "중소기업 vs 대기업 사고 발생률",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Network className="w-8 h-8" />,
      value: "0.9%",
      label: "스마트그린산단 수혜 기업 비율",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            치명적 단절
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            정부가 700억을 들여 만든 통합관제센터와<br />
            사고 위험이 가장 높은 중소기업이 연결되지 않고 있습니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4`}>
                {stat.icon}
              </div>
              <div className="text-5xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Problem Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-12 shadow-xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            악순환의 고리
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              "약한 법적 근거\n(자발적 지도)",
              "저조한 참여\n(0.9%)",
              "인프라-현장 단절",
              "중대재해 지속",
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center min-w-[160px]">
                  <p className="text-sm font-medium text-red-700 whitespace-pre-line">{step}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-red-400 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            해법: 법령 개정을 통한 의무 연계
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            「산업집적법 시행령」 제58조 개정으로<br />
            고위험 중소기업의 데이터 연계를 의무화합니다
          </p>
        </motion.div>

        {/* Law Amendment Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
        >
          {/* Before */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
            <div className="bg-red-100 text-red-700 font-bold py-2 px-4 rounded-lg mb-4 inline-block">
              현행
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">위험시설의 안전관리</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>내용 모호, 선언적 규정</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>데이터 연계 등 구체적 실행 방안 부재</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>자발적 참여에 의존 → 0.9% 수혜율</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border-2 border-blue-500">
            <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-4 inline-block">
              개선안
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              제58조 1항 1의2 (신설)
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="font-medium">
                  고위험 사업장 안전 데이터 수집 의무화
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="font-medium">
                  스마트 통합관제센터 실시간 연계
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="font-medium">
                  의무 대상: 약 4,500개 (전체의 7.5%)
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: "선별적 집중",
              desc: "전체가 아닌 고위험 7.5%만 의무화",
            },
            {
              icon: <Network className="w-6 h-6" />,
              title: "기존 인프라 활용",
              desc: "신규 투자 최소화, 관제센터 활용",
            },
            {
              icon: <CheckCircle2 className="w-6 h-6" />,
              title: "80% 재정 지원",
              desc: "중소기업 부담 최소화 (자부담 20%)",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="inline-flex p-3 bg-blue-100 rounded-lg text-blue-600 mb-3">
                {feature.icon}
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            기대 효과
          </h2>
          <p className="text-xl text-slate-600">
            데이터가 생명을 구하는 산업단지
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Quantitative Impact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">정량적 효과</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <p className="font-bold text-slate-900">재해율 90% 감소</p>
                  <p className="text-sm text-slate-600">연간 45명의 생명 구조</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <p className="font-bold text-slate-900">보험료 20-30% 절감</p>
                  <p className="text-sm text-slate-600">중소기업 연간 300만원 절감</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <p className="font-bold text-slate-900">투자 회수 11개월</p>
                  <p className="text-sm text-slate-600">700억 투자 → 연 760억 편익</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Qualitative Impact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">정성적 효과</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <p className="font-bold text-slate-900">패러다임 전환</p>
                  <p className="text-sm text-slate-600">사후 대응 → 사전 예방</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <p className="font-bold text-slate-900">'속 빈 강정' 해소</p>
                  <p className="text-sm text-slate-600">관제센터 100% 활용</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <p className="font-bold text-slate-900">국가 경쟁력 강화</p>
                  <p className="text-sm text-slate-600">안전한 산단 → 투자 유치</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            2030년 비전: 데이터가 생명을 구하는 순간
          </h3>
          <div className="space-y-4">
            {[
              { time: "새벽 2시", event: "압력용기 이상 징후 발생" },
              { time: "0.3초 후", event: "AI가 이상 징후 감지" },
              { time: "1분 후", event: "관제센터 긴급 연락 → 현장 대응" },
              { time: "2분 후", event: "위기 해소 완료" },
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg min-w-[100px] text-center">
                  {step.time}
                </div>
                <div className="flex-1 bg-white rounded-lg p-4 shadow">
                  <p className="text-slate-700">{step.event}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ROISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            투자 대비 효과 (ROI)
          </h2>
          <p className="text-xl text-slate-600">
            11개월 만에 투자금 회수, ROI 226%
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Investment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">투자 비용 (3년)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-slate-600">중소기업 IoT 센서 지원</span>
                <span className="font-bold text-slate-900">360억</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-slate-600">관제센터 고도화</span>
                <span className="font-bold text-slate-900">250억</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-slate-600">표준 플랫폼 구축</span>
                <span className="font-bold text-slate-900">50억</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-slate-600">기술 지원 인력</span>
                <span className="font-bold text-slate-900">40억</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-xl font-bold text-slate-900">총 투자</span>
                <span className="text-3xl font-black text-red-600">700억</span>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">기대 편익 (연간)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span>중대사고 감소 효과</span>
                <span className="font-bold">450억</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span>산재보험료 절감</span>
                <span className="font-bold">135억</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span>생산 중단 손실 감소</span>
                <span className="font-bold">160억</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <span>환경 오염 예방</span>
                <span className="font-bold">15억</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-xl font-bold">연간 편익</span>
                <span className="text-3xl font-black">760억</span>
              </div>
            </div>
            <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-sm mb-2">투자 회수 기간</p>
              <p className="text-4xl font-black">11개월</p>
            </div>
          </motion.div>
        </div>

        {/* ROI Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-slate-600">ROI (투자 대비 수익률)</span>
            <span className="text-5xl font-black text-green-600">226%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            법령 개정이라는 마지막 퍼즐 한 조각이<br />
            대한민국 산단 안전의 패러다임을 바꿉니다
          </h2>
          <p className="text-xl mb-12 opacity-90">
            0.9% → 100% 참여율 | 연 50건 → 5건 사고 | 45명의 생명 구조
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/docs/공모전 제안서_보강버전.md"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <FileText className="w-6 h-6" />
              전체 제안서 보기
            </a>
            <button className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition-colors shadow-lg">
              <Download className="w-6 h-6" />
              PDF 다운로드
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
