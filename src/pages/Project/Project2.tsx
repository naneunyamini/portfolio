import type { Navigate } from "../../types";
import type { ProjectContent } from "./project.types";
import ProjectTemplate from "./ProjectTemplate";

const project: ProjectContent = {
  id: 2,
  title: "mongddang",
  type: "MOVIE COMMUNITY WEB",
  demoUrl: "",
  githubUrl: "https://github.com/naneunyamini/mongddang",
  documents: [],
  summary:
    "기존 영화 정보 제공 중심 서비스에서 나아가, 영화 감상 기록과 사용자 간 소통을 중심으로 한 영화 커뮤니티 웹·모바일 플랫폼입니다. 사용자가 자신의 취향을 기록하고 공유할 수 있는 경험을 제공합니다.",
  period: "2024.07 - 2026.11",
  team: "Frontend 2명 · Backend 3명",
  role: "기획 · Frontend · UI",
  contribution: "담당 범위 입력",
  accent: "#f5d978",
  stacks: [
    "Angular 18",
    "TypeScript",
    "Ionic 8",
    "RxJS",
    "HTML5",
    "SCSS",
    "Swiper",
    "GitHub",
    "ESLint",
    "Figma",
  ],
  featureLayout: "mobile",
  overview: [
    {
      label: "Background",
      text: "영화 관람객은 작품 정보 탐색을 넘어 자신의 취향과 감상을 다른 사람들과 나누고 싶어 합니다.",
    },
    {
      label: "Problem",
      text: "기존 영화 정보 서비스는 정보 제공에 집중되어 있어 사용자 간 취향 공유와 깊이 있는 소통이 어렵습니다.",
    },
    {
      label: "Goal",
      text: "개인 맞춤형 추천과 코멘트 기능을 통해 새로운 영화를 발견하고 취향을 공유할 수 있는 커뮤니티 플랫폼 ‘몽땅’을 만들고자 했습니다.",
    },
  ],
  decisions: [
    {
      title: "온보딩 상태 관리 개선",
      situation:
        "온보딩 완료 여부와 선호 장르를 판단하는 로직이 추천 페이지와 홈 화면에 분산되어 있어, 컴포넌트마다 화면 이동 조건을 따로 관리하고 있었습니다. 이로 인해 새로고침이나 URL 직접 접근 시 의도하지 않은 화면이 노출될 가능성이 있었습니다.",
      choice:
        "온보딩 상태 판단과 완료 처리를 OnboardingService로 분리하고, Angular Route Guard를 적용해 로그인 및 온보딩 완료 여부에 따른 페이지 접근 규칙을 라우팅 계층에서 관리했습니다.",
      reason:
        "컴포넌트에 중복되어 있던 상태 판단과 화면 이동 로직을 줄이고, 온보딩 진행 상태에 따라 일관된 사용자 흐름을 제공할 수 있는 구조로 개선했습니다. 이를 통해 Angular의 서비스, 의존성 주입 및 Route Guard를 실제 사용자 흐름에 적용했습니다.",
    },
    {
      title: "API 상태 기반 사용자 피드백 개선",
      situation:
        "API 요청 중에는 영화 목록 영역이 빈 화면으로 표시되어 사용자가 로딩 중인지 데이터가 없는지 구분하기 어려웠습니다. 요청 실패 시에도 console.log와 alert()에 의존해 오류 원인이나 이후 행동을 충분히 안내하지 못했습니다.",
      choice:
        "Angular·RxJS 환경에서 API 요청 상태를 loading, success, empty, error로 구분했습니다. 로딩 중에는 영화 카드 형태의 Skeleton UI를 표시하고, 빈 결과에는 Empty State, 요청 실패에는 오류 Toast와 재시도 버튼을 제공했습니다.",
      reason:
        "API 응답 데이터만으로는 로딩 중인 상태와 빈 결과를 구분하기 어렵다고 판단했습니다. 각 상태에 맞는 UI를 제공하면 사용자가 현재 상황을 명확히 인지할 수 있고, 오류 발생 시에도 화면 흐름을 중단하는 alert() 대신 재시도라는 다음 행동을 자연스럽게 선택할 수 있다고 보았습니다",
    },
  ],
  features: [
    {
      image: "/image/mongddang-feature1.png",
      imageAlt: "선호 영화 온보딩과 맞춤 추천 화면",
      title: "취향 기반 영화 추천",
      description:
        "첫 로그인 사용자가 선호 영화를 선택하는 온보딩을 구성하고, 선택 결과에서 도출한 선호 장르를 홈 추천 콘텐츠에 반영하여 취향에 맞는 새로운 영화를 발견할 수 있는 탐색 경험을 강화했습니다.",
      tags: ["Onboarding", "Personalization", "Recommendation"],
    },
    {
      images: [
        {
          src: "/image/mongddang-feature2.png",
          alt: "mongddang 영화 탐색 화면",
        },
        {
          src: "/image/mongddang-feature4.png",
          alt: "mongddang 영화 상세 및 사용자 액션 화면",
        },
      ],
      imageAlt: "사용자 인터랙션 및 탐색 경험 개선",
      title: "영화 탐색과 사용자 액션",
      description:
        "Swiper 기반 영화 캐러셀과 배너 Autoplay, Floating Action Button을 구현하여 콘텐츠 탐색과 주요 기능 접근성을 개선하고, Angular 환경에서 UI 라이브러리 설정 및 이벤트 처리 경험을 쌓았습니다.",
      tags: ["Swiper", "Movie Detail", "User Interaction"],
    },
    {
      image: "/image/mongddang-feature3.png",
      imageAlt: "로딩, 빈 결과와 오류 처리 화면",
      title: "API 상태별 사용자 피드백",
      description:
        "API 상태에 따라 Skeleton UI, Empty State, 오류 Toast와 재시도 버튼을 제공하여, 사용자가 로딩·데이터 부재·오류 상태를 명확히 구분하고 다음 행동을 선택할 수 있도록 개선했습니다.",
      tags: ["Skeleton UI", "Empty State", "Error Handling"],
    },
  ],
  troubles: [],
  results: [
    { value: "00%", label: "렌더링 또는 성능 개선" },
    { value: "00명", label: "테스트 참여자 또는 사용자" },
    { value: "0회", label: "사용자 피드백 반영 횟수" },
  ],
  learned: "Angular와 RxJS, 팀 협업 과정에서 배운 내용을 작성합니다.",
  next: "추천 품질이나 커뮤니티 경험의 다음 개선점을 작성합니다.",
};

function Project2Demo() {
  return (
    <section
      className="demo-stage demo-stage-mobile"
      id="demo"
      style={{ backgroundColor: project.accent }}
    >
      <div className="phone-pair">
        <div className="phone-frame">
          <div className="phone-island" />
          <img src="/image/mongddang-demo1.png" alt="mongddang 홈 화면" />
        </div>
        <div className="phone-frame phone-frame-offset">
          <div className="phone-island" />
          <img src="/image/mongddang-demo2.png" alt="mongddang 홈 화면" />
          {/* 이미지 사용 시 위 div를 <img src="/image/mongddang-02.png" alt="mongddang 기록 화면" />로 교체 */}
        </div>
      </div>
      <p>mongddang 모바일 앱의 핵심 화면 두 개를 배치하세요.</p>
    </section>
  );
}

export default function Project2({ navigate }: { navigate: Navigate }) {
  return (
    <ProjectTemplate
      project={project}
      navigate={navigate}
      demo={<Project2Demo />}
    />
  );
}
