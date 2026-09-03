import type { Navigate } from "../../types";
import type { ProjectContent } from "./project.types";
import ProjectTemplate from "./ProjectTemplate";

const project: ProjectContent = {
  id: 3,
  title: "moodin",
  type: "HEALTHCARE MOBILE APP",
  demoUrl: "",
  githubUrl: "",
  documents: [
    { label: "Project Deck", url: "/pdf/moodin.pdf" },
    { label: "USER Flow", url: "/pdf/userflow.pdf" },
  ],
  summary:
    "HRV·GSR 생체신호와 자가진단을 함께 활용하는 스트레스 관리 서비스를 기획하고, 측정·진단·결과 확인·해소법 추천으로 이어지는 핵심 사용자 흐름을 Flutter 프로토타입으로 구현했습니다.센서 및 분석 API 연동 전 단계까지 진행했으며, 사용자가 측정 상태와 결과에 따른 다음 행동을 직관적으로 이해할 수 있도록 화면 구조와 상태별 피드백을 설계했습니다.",
  period: "2025.07 - 2026.10",
  team: "기획·Frontend 4명",
  role: "기획 · Frontend · UI",
  contribution: "담당 범위 입력",
  accent: "#a8ca78",
  stacks: [
    "Flutter",
    "Dart",
    "XGBoost",
    "RandomForest",
    "NeuroKit2",
    "Figma",
    "GitHub",
  ],
  featureLayout: "mobile",
  overview: [
    {
      label: "Background",
      text: "현대인의 정신건강 문제는 증가하고 있지만, 자신의 스트레스 상태를 자각하고 관리하는 비율은 오히려 낮아지고 있습니다.",
    },
    {
      label: "Problem",
      text: "기존 스트레스 관리 서비스는 단일·간접 지표에 의존해 측정 정확도와 신뢰도가 낮고, 개인 맞춤형 관리와 한국적 스트레스 특성을 충분히 반영하지 못했습니다.",
    },
    {
      label: "Goal",
      text: "HRV와 GSR 생체신호를 결합해 스트레스를 객관적으로 측정하고, 자가진단과 개인별 해소법까지 제공하는 통합 스트레스 관리 서비스를 만들고자 했습니다.",
    },
  ],
  decisions: [
    {
      title: "측정부터 관리까지 끊기지 않는 흐름 설계",
      situation:
        "생체신호 측정 결과만 숫자로 제공하면 사용자가 자신의 상태를 해석하거나 이후 행동을 결정하기 어렵다고 판단했습니다.",
      choice:
        "자가진단 → 생체신호 측정 → 측정 중 피드백 → 4단계 결과 → 단계별 해소법으로 사용자 흐름을 구성했습니다. 높은 스트레스 단계에서는 화병 자가진단으로 연결되는 조건부 흐름을 추가했습니다",
      reason:
        "측정값 확인에서 경험을 끝내지 않고, 결과 해석과 다음 행동까지 하나의 흐름으로 연결하기 위해서입니다.",
    },
    {
      title: "측정 대기 시간을 하나의 UI 상태로 표현",
      situation:
        "생체신호 측정에는 대기 시간이 필요하지만, 변화 없는 화면에서는 사용자가 측정이 정상적으로 진행되는지 판단하기 어려웠습니다.",
      choice:
        "측정 전·측정 중·완료 상태를 구분하고, 로딩 표시와 안내 문구를 통해 현재 진행 상황을 보여주도록 구성했습니다.",
      reason:
        "사용자가 중복으로 버튼을 누르거나 측정을 중단하는 것을 방지하고, 시스템의 현재 상태를 예측할 수 있게 하기 위해서입니다.",
    },
  ],
  features: [
    {
      image: "/image/moodin-feature1.png",
      imageAlt: "moodin 자가진단 문항 화면",
      title: "종합 진단을 위한 단계형 측정 흐름",
      description:
        "로그인 이후 자가진단 → 생체신호 측정 → 종합 결과 순서로 이어지는 단계형 사용자 흐름을 구현했습니다. HRV·GSR과 같은 생체신호만으로는 파악하기 어려운 사용자의 주관적인 상태를 함께 수집하여, 스트레스 수준을 보다 종합적으로 판단할 수 있도록 설계했습니다. 문항별 응답과 진행 상태를 화면에 표시하고, 모든 문항에 응답한 경우에만 생체신호 측정 단계로 이동하도록 사용자 흐름을 구현했습니다.",
      tags: ["Survey", "State", "Mobile UX"],
    },
    {
      images: [
        {
          src: "/image/moodin-feature2.png",
          alt: "moodin 생체신호 측정 과정 화면",
        },
        {
          src: "/image/moodin-feature3.png",
          alt: "moodin 4단계 측정 결과 화면",
        },
      ],
      imageAlt: "moodin 생체신호 측정 결과 화면",
      title: "생체신호 측정 과정과 4단계 결과 시각화",
      description:
        "HRV·GSR 측정을 전제로 측정 전·진행 중·완료 화면을 구현하고, 분석 결과를 4단계 스트레스 수준으로 구분해 색상과 설명 문구로 시각화했습니다. 점수만 제시하지 않고 현재 상태의 의미와 다음 행동을 함께 안내했습니다.",
      tags: ["Visualization", "Loading", "Feedback"],
    },
    {
      image: "/image/moodin-feature4.png",
      imageAlt: "moodin 조건별 맞춤 화면",
      title: "결과에 따른 조건부 사용자 흐름",
      description:
        "자가진단과 생체신호 측정 결과를 바탕으로 스트레스 수준을 4단계로 구분하고, 단계별 색상·설명·다음 행동을 다르게 표현했습니다. 높은 스트레스 단계에서는 화병 자가진단으로, 그 외 단계에서는 상태에 맞는 스트레스 해소법으로 연결되는 조건부 사용자 흐름을 설계했습니다.",
      tags: ["Conditional UI", "TanStack Query", "Flow"],
    },
  ],
  troubles: [],
  results: [
    { value: "00%", label: "API 요청 또는 성능 개선" },
    { value: "00명", label: "사용성 테스트 참여자" },
    { value: "0회", label: "프로토타입 개선 횟수" },
  ],
  learned: "개인 프로젝트에서 우선순위를 정하고 검증한 과정을 작성합니다.",
  next: "데이터 정확도와 개인화 경험의 향후 개선점을 작성합니다.",
};

function Project3Demo() {
  return (
    <section
      className="demo-stage demo-stage-mobile"
      id="demo"
      style={{ backgroundColor: project.accent }}
    >
      <div className="phone-pair">
        <div className="phone-frame">
          <div className="phone-island" />
          <img src="/image/moodin-demo1.png" alt="mongddang 홈 화면" />
        </div>
        <div className="phone-frame phone-frame-offset">
          <div className="phone-island" />
          <img src="/image/moodin-demo2.png" alt="mongddang 홈 화면" />
          {/* 이미지 사용 시 위 div를 <img src="/image/mongddang-02.png" alt="mongddang 기록 화면" />로 교체 */}
        </div>
      </div>
      <p>mongddang 모바일 앱의 핵심 화면 두 개를 배치하세요.</p>
    </section>
  );
}

export default function Project3({ navigate }: { navigate: Navigate }) {
  return (
    <ProjectTemplate
      project={project}
      navigate={navigate}
      demo={<Project3Demo />}
    />
  );
}
