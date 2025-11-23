"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  TrendingDown,
  Shield,
  Network,
  CheckCircle2,
  ArrowRight,
  FileText,
  Download,
  Building2,
  Scale,
  Target,
  Zap,
  TrendingUp,
  Users,
  Globe,
  BookOpen,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Section 1: 개선과제 제목 */}
      <TitleSection />

      {/* Section 2: 현황 및 문제점 */}
      <StatusAndProblemsSection />

      {/* Section 3: 개선방안 */}
      <SolutionSection />

      {/* Section 4: 법령개선안 */}
      <LegalAmendmentSection />

      {/* Section 5: 기대효과 */}
      <ExpectedEffectsSection />

      {/* Section 6: 제도개선을 통해 추진할 수 있는 안전사업 */}
      <SafetyProjectSection />

      {/* Section 7: 참고자료 */}
      <ReferencesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black tracking-tight">KICOX 2025</h3>
                <p className="text-sm text-slate-400 font-medium">산단안전 제도개선 공모전</p>
              </div>
            </div>
            <p className="text-slate-300 text-xl font-bold mb-3">
              2025년 KICOX 산단안전 제도개선 공모전 제안서
            </p>
            <p className="text-slate-400 font-medium text-lg">
              고위험 중소기업 스마트 관제센터 의무 연계를 통한<br />
              「산업집적법 시행령」 개정 방안
            </p>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-500 text-sm">© 2025 KICOX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl shadow-lg z-50 border-b border-slate-200/50">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl shadow-lg">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">KICOX 2025</h1>
              <p className="text-xs text-slate-500 font-medium">산단안전 제도개선 공모전</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#title" className="text-slate-600 hover:text-blue-600 transition-all hover:scale-110 duration-200">제목</a>
            <a href="#status" className="text-slate-600 hover:text-blue-600 transition-all hover:scale-110 duration-200">현황</a>
            <a href="#solution" className="text-slate-600 hover:text-blue-600 transition-all hover:scale-110 duration-200">개선방안</a>
            <a href="#legal" className="text-slate-600 hover:text-blue-600 transition-all hover:scale-110 duration-200">법령개정</a>
            <a href="#effects" className="text-slate-600 hover:text-blue-600 transition-all hover:scale-110 duration-200">기대효과</a>
            <a href="#project" className="text-slate-600 hover:text-blue-600 transition-all hover:scale-110 duration-200">안전사업</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 text-white px-8 py-4 rounded-full mb-8 shadow-2xl hover:bg-white/20 transition-all duration-300"
          >
            <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="font-semibold tracking-wide">2025년 KICOX 산단안전 제도개선 공모전</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
          >
            산단 안전의<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300">
              '속 빈 강정'
            </span>
            <br />
            채운다
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed"
          >
            고위험 중소기업 스마트 관제센터 의무 연계를 통한<br />
            <span className="font-bold text-white">「산업집적법 시행령」 개정 방안</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
          >
            {[
              { value: "97%", label: "노후 산단 사고 집중" },
              { value: "1.7배", label: "중소기업 사고율" },
              { value: "0.9%", label: "현재 수혜율" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-5xl font-black text-white mb-2 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-2 text-blue-100"
          >
            <p className="text-sm">아래로 스크롤하여 제안서 확인</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-6 h-6 rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TitleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="title" ref={ref} className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-5xl mx-auto"
        >
          {/* Section Number */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl font-bold text-xl">
              1
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">개선과제 제목</h2>
          </div>

          {/* Title Card */}
          <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 rounded-3xl shadow-2xl border-2 border-blue-200/50 p-12 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-black mb-8 shadow-lg hover:scale-105 transition-transform duration-300">
                산단 안전의 '속 빈 강정' 채운다
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                고위험 중소기업 스마트 관제센터 의무 연계를 통한<br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">「산업집적법 시행령」 개정 방안</span>
              </h3>
              <p className="text-slate-600 text-lg mb-4 font-medium leading-relaxed">
                정부가 구축한 통합관제센터와<br />
                사고 위험이 가장 높은 중소기업을 연결하는 법령 개정
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300/50 rounded-2xl p-5 mt-6 inline-block shadow-lg hover:scale-105 transition-transform duration-300">
                <p className="text-green-700 font-black text-lg">
                  💡 1차년도 시범사업 (45억원) → 검증 후 단계적 전국 확대
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatusAndProblemsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="status" ref={ref} className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          {/* Section Number */}
          <div className="flex items-center gap-3 mb-12">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl font-bold text-xl">
              2
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">현황 및 문제점</h2>
          </div>

          {/* 현황 */}
          <div className="mb-16">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-2xl mb-8">
              <h3 className="text-2xl font-bold text-green-900 mb-2">○ 현황</h3>
              <p className="text-green-700">산업단지 안전사고의 구조적 취약성과 정부의 대응</p>
            </div>

            {/* Incident Story - Real Case: Hwaseong Aricell Fire */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-red-600 font-semibold mb-2">실제 사고 사례</p>
                  <h4 className="text-xl font-bold text-red-900 mb-4">
                    2024년 6월 24일 오전 10시 31분, 경기도 화성시 아리셀 리튬배터리 공장
                  </h4>
                </div>
              </div>
              <div className="space-y-4 text-slate-700">
                <p>정옥일반산업단지 내 리튬 1차전지 제조 중소기업에서 화재가 발생했습니다.</p>
                <p className="font-bold text-red-600">
                  리튬배터리 셀 35,000개가 순식간에 폭발적으로 연쇄 반응하며 공장 전체를 집어삼켰습니다.
                </p>
                <p className="text-2xl font-black text-red-900 bg-red-100 p-4 rounded-lg text-center">
                  23명 사망, 8명 부상
                </p>
                <p className="text-slate-600 text-sm">
                  * 한국 역사상 최악의 화학공장 사고 / 사망자: 한국인 5명, 중국인 17명, 라오스인 1명
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mt-6">
                  <p className="text-slate-700">
                    <span className="font-bold">만약</span> 이 공장이 3km 떨어진{" "}
                    <span className="text-blue-600 font-bold">'스마트 통합관제센터'</span>와 연결되어 있었다면?
                  </p>
                  <p className="text-green-700 font-medium mt-2">
                    → 온도·가스 이상 징후 AI 감지 → 관제센터 긴급 알림 → 즉시 대피 및 초기 진화 → <span className="font-bold">23명의 생명 구조 가능</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: <TrendingDown className="w-10 h-10" />,
                  value: "97%",
                  label: "노후 산단(20년+)",
                  sublabel: "중대사고 집중도",
                  color: "from-red-500 to-red-600",
                },
                {
                  icon: <AlertTriangle className="w-10 h-10" />,
                  value: "1.7배",
                  label: "중소기업 vs 대기업",
                  sublabel: "사고 발생률",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  icon: <Network className="w-10 h-10" />,
                  value: "0.9%",
                  label: "스마트그린산단",
                  sublabel: "수혜 기업 비율",
                  color: "from-yellow-500 to-yellow-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className={`text-5xl font-black mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
                  <div className="text-slate-800 font-bold text-lg">{stat.label}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>

            {/* 정부 대응 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-4">정부의 대응: 스마트그린산단 및 통합관제센터 구축</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>AI, ICT, 빅데이터를 활용한 24시간 상시 관제 시스템</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>대전, 울산 등 주요 산단에 통합관제센터 구축 중</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>약 700억원 규모의 공공 인프라 투자</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 문제점 */}
          <div>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl mb-8">
              <h3 className="text-2xl font-bold text-red-900 mb-2">○ 문제점</h3>
              <p className="text-red-700">정부 인프라와 민간 위험 현장 간의 치명적 단절</p>
            </div>

            {/* Problem Visualization */}
            <div className="bg-white rounded-2xl p-12 shadow-xl mb-8">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                악순환의 고리
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {[
                  { title: "약한 법적 근거", subtitle: "(자발적 지도)" },
                  { title: "저조한 참여", subtitle: "(0.9%)" },
                  { title: "인프라-현장", subtitle: "단절" },
                  { title: "중대재해", subtitle: "지속" },
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center min-w-[160px]">
                      <p className="font-bold text-red-700">{step.title}</p>
                      <p className="text-sm text-red-600 mt-1">{step.subtitle}</p>
                    </div>
                    {index < 3 && (
                      <ArrowRight className="w-6 h-6 text-red-400 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Problems */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-500">
                <h5 className="font-bold text-slate-900 mb-3">1. 치명적 단절</h5>
                <p className="text-slate-600 text-sm">
                  정부가 700억을 들여 만든 관제센터가 사고 위험이 가장 높은 중소기업과 연결되지 않는 '속 빈 강정' 상태
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500">
                <h5 className="font-bold text-slate-900 mb-3">2. 법적 근거 부재</h5>
                <p className="text-slate-600 text-sm">
                  현행법상 '지도'는 자발적 성격으로, KICOX가 중소기업에게 데이터 연계를 강제할 법적 근거 없음
                </p>
              </div>
            </div>
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
    <section id="solution" ref={ref} className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          {/* Section Number */}
          <div className="flex items-center gap-3 mb-12">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl font-bold text-xl">
              3
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">개선방안</h2>
          </div>

          {/* 개선방향 */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">○ 개선방향</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>현행 '자발적 지도' 중심 → 관리기관(KICOX) 주도 '데이터 기반 의무 연계' 관리로 전환</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>정부가 이미 구축한 통합관제센터 공공 인프라를 적극 활용</span>
              </li>
            </ul>
          </div>

          {/* 목표 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">단계별 목표</h3>
            </div>

            {/* Phase 1 - Pilot */}
            <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <p className="text-sm text-green-600 font-semibold mb-3">1단계: 시범사업 (2026)</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-900 font-bold mb-1">대상 규모</p>
                  <p className="text-2xl text-green-600 font-black">100-150개</p>
                  <p className="text-sm text-slate-600">2-3개 산단 고위험 기업</p>
                </div>
                <div>
                  <p className="text-slate-900 font-bold mb-1">목표 연계율</p>
                  <p className="text-2xl text-green-600 font-black">80%+</p>
                  <p className="text-sm text-slate-600">시범지역 참여율</p>
                </div>
              </div>
            </div>

            {/* Phase 2-3 - Expansion */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <p className="text-sm text-blue-600 font-semibold mb-3">2-3단계: 조건부 확대 (2027-2028)</p>
              <p className="text-slate-900 font-bold mb-3">
                성공 검증 시 → 전국 <span className="text-3xl text-blue-600">4,500개</span> 기업으로 확대
              </p>
              <p className="text-sm text-slate-600">
                ✅ 조건: 시범지역 재해율 40%↓, 참여율 80%+, SME 만족도 65/100+
              </p>
            </div>

            <div className="mt-6 bg-purple-50 border-l-4 border-purple-600 rounded-r-xl p-4">
              <p className="text-sm text-purple-900 font-bold">정성 목표 (전 단계 공통)</p>
              <p className="text-slate-700">
                '사고 후 대응(Reactive)' → <span className="text-purple-600 font-bold">AI/데이터 기반 '사고 전 예방(Predictive)'</span> 체계 전환
              </p>
            </div>
          </div>

          {/* 체계 개선방안 표 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
              <h3 className="text-2xl font-bold text-white">안전관리계획 세부내용 개선방안</h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* 현행 */}
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <div className="bg-red-100 text-red-700 font-bold py-2 px-4 rounded-lg mb-4 inline-block">
                    현행
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">위험시설의 안전관리</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>내용 모호, 선언적 규정</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>데이터 연계 등 구체적 실행 방안 부재</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>자발적 참여에 의존 → 0.9% 수혜율</span>
                    </li>
                  </ul>
                </div>

                {/* 개선안 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-500">
                  <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-4 inline-block">
                    개선안
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">
                    제58조 1항 1의2 (신설)
                  </h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="font-medium">고위험 사업장 안전 데이터 수집 의무화</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="font-medium">스마트 통합관제센터 실시간 연계</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="font-medium">1단계: 100-150개 시범 → 검증 후 4,500개 확대</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-7 h-7" />,
                title: "시범부터 시작",
                desc: "100-150개 기업으로 검증 후 확대",
                gradient: "from-blue-500 to-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-500",
              },
              {
                icon: <Network className="w-7 h-7" />,
                title: "기존 인프라 활용",
                desc: "신규 투자 최소화, 관제센터 활용",
                gradient: "from-indigo-500 to-purple-600",
                bg: "bg-indigo-50",
                border: "border-indigo-500",
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "80% 재정 지원",
                desc: "중소기업 부담 최소화 (자부담 20%)",
                gradient: "from-green-500 to-emerald-600",
                bg: "bg-green-50",
                border: "border-green-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 ${feature.border}`}
              >
                <div className={`inline-flex p-3 ${feature.bg} rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-md`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h4 className="font-black text-slate-900 mb-2 text-lg">{feature.title}</h4>
                <p className="text-sm text-slate-600 font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LegalAmendmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="legal" ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          {/* Section Number */}
          <div className="flex items-center gap-3 mb-12">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl font-bold text-xl">
              4
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">법령개선안</h2>
          </div>

          {/* 소관부처 */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-12">
            <h3 className="text-xl font-bold text-blue-900 mb-4">○ 개선과제 소관부처</h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <p className="text-sm text-blue-600 font-semibold">주무부처</p>
                <p className="text-slate-900 font-bold">산업통상자원부</p>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <p className="text-sm text-blue-600 font-semibold">협조부처</p>
                <p className="text-slate-900 font-bold">고용노동부</p>
              </div>
            </div>
          </div>

          {/* 법령개정안 */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-xl mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                산업집적활성화 및 공장설립에 관한 법률 시행령 개정안
              </h3>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2">
                {/* 현행 */}
                <div className="p-8 border-r-2 border-slate-200">
                  <div className="bg-red-100 text-red-700 font-bold py-2 px-4 rounded-lg mb-6 inline-block text-lg">
                    현행
                  </div>
                  <div className="space-y-4 text-sm">
                    <p className="font-bold text-slate-900">
                      제58조(산업단지의 안전관리 등) ①
                    </p>
                    <p className="text-slate-700">
                      1. 위험시설의 안전관리에 관한 사항
                    </p>
                    <p className="text-slate-700">
                      2. 공해방지에 관한 사항
                    </p>
                    <p className="text-slate-700">
                      3. 제1호 및 제2호와 관련된 관계 행정기관과의 협조에 관한 사항
                    </p>
                  </div>
                </div>

                {/* 개선안 */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-6 inline-block text-lg">
                    개선안
                  </div>
                  <div className="space-y-4 text-sm">
                    <p className="font-bold text-slate-900">
                      제58조(산업단지의 안전관리 등) ①
                    </p>
                    <p className="text-slate-700">
                      1. 위험시설의 안전관리에 관한 사항
                    </p>
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 pl-4 py-3 rounded-r">
                      <p className="font-bold text-yellow-900 mb-2">1의2. (신설)</p>
                      <p className="text-slate-800">
                        「산업안전보건법」 제47조에 따른 안전보건진단 대상 사업장 등
                        고용노동부령으로 정하는 고위험 사업장의 안전 관련 데이터
                        (유해화학물질 누출, 설비 비정상 압력·온도 등을 포함한다)를
                        제8조에 따른 스마트그린산업단지의 통합관제센터와 연계하여
                        실시간으로 관리하는 사항
                      </p>
                    </div>
                    <p className="text-slate-700">
                      2. 공해방지에 관한 사항
                    </p>
                    <p className="text-slate-700">
                      3. (현행과 같음)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 조문 신설 근거 */}
          <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">💡 조문 신설 근거</h4>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>현행 규정은 '위험시설 안전관리'를 선언적으로만 규정, 데이터 연계 법적 근거 부재</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>0.9% 저조한 참여율 발생, 고위험 중소기업이 안전관리 사각지대에 방치</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>법적 의무화를 통해 정부 인프라(관제센터)와 민간 위험(중소기업)의 단절 해소</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExpectedEffectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="effects" ref={ref} className="py-32 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          {/* Section Number */}
          <div className="flex items-center gap-3 mb-12">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl font-bold text-xl">
              5
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">기대효과</h2>
            <span className="text-sm text-slate-600 ml-2">* 정량적 효과 포함</span>
          </div>

          {/* Pilot Program ROI Highlight */}
          <div className="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-3xl p-12 text-white mb-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="text-center relative z-10">
              <div className="bg-white/20 backdrop-blur-xl rounded-full px-8 py-3 inline-block mb-6 border border-white/30 shadow-lg">
                <p className="text-white font-black text-base">💡 1차년도 시범사업 (2026)</p>
              </div>
              <p className="text-green-100 text-xl mb-6 font-bold">시범사업 투자 대비 효과</p>
              <div className="flex items-center justify-center gap-12 flex-wrap">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-xl"
                >
                  <p className="text-sm text-green-100 mb-2 font-medium">1년 시범 투자</p>
                  <p className="text-6xl font-black mb-2 bg-gradient-to-br from-white to-green-100 bg-clip-text text-transparent">45억</p>
                  <p className="text-sm text-green-100 mt-2 font-medium">2-3개 산단, 100-150개 기업</p>
                </motion.div>
                <ArrowRight className="w-16 h-16 animate-pulse" />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-xl"
                >
                  <p className="text-sm text-green-100 mb-2 font-medium">연간 기대 편익</p>
                  <p className="text-6xl font-black mb-2 bg-gradient-to-br from-yellow-200 to-white bg-clip-text text-transparent">25억</p>
                  <p className="text-sm text-green-100 mt-2 font-medium">사고 감소 효과</p>
                </motion.div>
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <p className="text-green-100 mb-2">시범 대상</p>
                  <p className="text-4xl font-black">100-150개</p>
                  <p className="text-sm text-green-100 mt-2">고위험 중소기업</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <p className="text-green-100 mb-2">1차년 ROI</p>
                  <p className="text-4xl font-black">55%</p>
                  <p className="text-sm text-green-100 mt-2">검증 후 전국 확대</p>
                </div>
              </div>
              <div className="mt-6 bg-blue-900/40 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <p className="text-white font-medium">
                  ✅ 성공 검증 시 → 2027-2028 단계적 전국 확대 (총 325-365억원)
                </p>
              </div>
            </div>
          </div>

          {/* 정량적/정성적 효과 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 정량적 효과 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-600" />
                정량적 효과
              </h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "시범지역 재해 50% 감소",
                    desc: "100-150개 기업 연 3-5명 생명 구조",
                    icon: "1",
                  },
                  {
                    title: "보험료 20-30% 절감",
                    desc: "참여기업 연간 300만원 절감",
                    icon: "2",
                  },
                  {
                    title: "경제적 손실 감소",
                    desc: "시범지역 연간 약 25억원 절감",
                    icon: "3",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 정성적 효과 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-blue-600" />
                정성적 효과
              </h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "패러다임 전환",
                    desc: "사후 대응 → 사전 예방 체계",
                    icon: "1",
                  },
                  {
                    title: "'속 빈 강정' 해소",
                    desc: "관제센터 100% 활용 극대화",
                    icon: "2",
                  },
                  {
                    title: "국가 경쟁력 강화",
                    desc: "안전한 산단 → 투자 유치",
                    icon: "3",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2030년 비전 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              2030년 비전: 데이터가 생명을 구하는 순간
            </h3>
            <div className="space-y-4">
              {[
                { time: "새벽 2시", event: "압력용기 이상 징후 발생", bgColor: "bg-red-600", borderColor: "border-red-400" },
                { time: "0.3초 후", event: "AI가 이상 징후 감지", bgColor: "bg-yellow-600", borderColor: "border-yellow-400" },
                { time: "1분 후", event: "관제센터 긴급 연락 → 현장 대응", bgColor: "bg-blue-600", borderColor: "border-blue-400" },
                { time: "2분 후", event: "위기 해소 완료", bgColor: "bg-green-600", borderColor: "border-green-400" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`${step.bgColor} text-white font-bold py-3 px-6 rounded-lg min-w-[120px] text-center shadow-md`}>
                    {step.time}
                  </div>
                  <div className={`flex-1 bg-slate-50 rounded-lg p-4 border-l-4 ${step.borderColor}`}>
                    <p className="text-slate-700 font-medium">{step.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SafetyProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="project" ref={ref} className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          {/* Section Number */}
          <div className="flex items-center gap-3 mb-12">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl font-bold text-xl">
              6
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              제도개선을 통해 추진할 수 있는 안전사업
            </h2>
          </div>

          {/* 사업개요 */}
          <div className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">○ 사업개요</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-blue-600 font-semibold mb-2">사업명</p>
                  <p className="text-slate-900 font-bold">
                    고위험 중소기업 스마트 안전 연계(Linkage) 지원사업
                  </p>
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-semibold mb-2">사업 기간</p>
                  <p className="text-slate-900 font-bold">
                    1단계: 2026년 (시범)<br/>
                    2-3단계: 2027-2028년 (확대)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-semibold mb-2">사업 예산</p>
                  <p className="text-slate-900 font-bold">
                    1단계: 45억원<br/>
                    <span className="text-sm text-slate-600">(조건부 확대 시 총 325-365억)</span>
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-slate-700 mb-3">
                  <span className="font-bold text-slate-900">목적:</span> 개정된 시행령에 따라
                  데이터 연계 의무가 발생한 중소기업에게 IoT 안전 센서 및 통신장비 도입 비용과
                  기술 컨설팅 지원
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                  <p className="text-green-800 font-medium">
                    💡 <span className="font-bold">시범사업 우선</span>: 2-3개 산단에서 검증 후 전국 확대로 재정 리스크 최소화
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 운영방안 */}
          <div className="mb-12">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-2xl mb-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4">○ 운영방안</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "사업 주체",
                  desc: "한국산업단지공단(KICOX) 주관",
                  icon: <Building2 className="w-8 h-8" />,
                },
                {
                  title: "재원 조달",
                  desc: "기존 정부 지원사업 연계 (신규 예산 최소화)",
                  icon: <TrendingUp className="w-8 h-8" />,
                },
                {
                  title: "운영 방식",
                  desc: "대상 확정 → 표준 제시 → 지원 매칭 → 사후관리",
                  icon: <Users className="w-8 h-8" />,
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-blue-600 mb-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 연계 사업 */}
            <div className="mt-8 bg-white rounded-xl p-8 shadow-lg">
              <h4 className="font-bold text-slate-900 mb-6">기존 정부 지원 사업과 연계</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">고용노동부 '스마트안전장비 도입 비용 지원사업'</p>
                    <p className="text-sm text-slate-600">도입 비용의 80% 지원</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">중소벤처기업부 '지능형 안전기술' 지원 정책</p>
                    <p className="text-sm text-slate-600">기술 혁신 지원사업 연계</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">고용노동부 '대·중소기업 안전보건 상생협력 사업'</p>
                    <p className="text-sm text-slate-600">대기업-중소기업 협력 지원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 기대효과 */}
          <div>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-2xl mb-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">○ 기대효과</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "제도 수용성 확보",
                  desc: "의무화(Stick) + 재정지원 80%(Carrot) 동시 제공",
                },
                {
                  title: "참여율 극대화",
                  desc: "0.9% → 100% (의무 대상 기업 기준)",
                },
                {
                  title: "기술 표준화",
                  desc: "데이터 호환성 문제 원천 차단",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border-t-4 border-purple-500">
                  <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ReferencesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-10 h-10 text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-bold">참고자료</h2>
            <span className="text-sm text-slate-400 ml-2">* 관련 통계 및 참고 자료</span>
          </div>

          {/* References Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "사고 통계",
                items: [
                  "최근 10년간 산단 중대사고 283건, 중소기업 1.7배 (부산일보)",
                  "국가산단 중대사고 97%, 20년+ 노후산단 발생 (에너지신문)",
                ],
              },
              {
                category: "정책 현황",
                items: [
                  "스마트그린산단 수혜 기업 0.9% (머니투데이)",
                  "산업집적법 시행령 제58조 (국가법령정보센터)",
                ],
              },
              {
                category: "정량 효과",
                items: [
                  "스마트 안전설비 재해율 90% 감소 (스마트팩토리아)",
                  "보험료 20-30% 절감 효과",
                ],
              },
              {
                category: "정부 지원",
                items: [
                  "고용부 스마트안전장비 80% 지원 (고용노동부)",
                  "대·중소기업 안전보건 상생협력 사업",
                ],
              },
              {
                category: "인프라 사례",
                items: [
                  "대전 스마트그린산단 통합관제센터 (전자신문)",
                  "울산미포산단 통합관제센터 (채널A)",
                ],
              },
              {
                category: "해외 사례",
                items: [
                  "독일 인더스트리 4.0: 재해율 42% 감소",
                  "싱가포르 주롱산단: 누출사고 87% 감소",
                ],
              },
            ].map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-lg font-bold text-blue-400 mb-4">{ref.category}</h3>
                <ul className="space-y-2">
                  {ref.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            법령 개정이라는<br />
            마지막 퍼즐 한 조각이<br />
            <span className="text-yellow-300">산단 안전의 패러다임</span>을 바꿉니다
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-12 text-lg">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              0.9% → 100% 참여율
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              연 50건 → 5건 사고
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              45명의 생명 구조
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="/docs/공모전 제안서_보강버전.md"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-12 py-6 rounded-full font-black text-lg shadow-2xl hover:shadow-3xl transition-all border-2 border-white"
            >
              <FileText className="w-6 h-6" />
              전체 제안서 보기
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-12 py-6 rounded-full font-black text-lg transition-all border-2 border-white/30 shadow-xl hover:bg-white/20"
            >
              <Download className="w-6 h-6" />
              PDF 다운로드
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
