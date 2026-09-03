import type { Navigate } from "../../types";
import type { ProjectContent } from "./project.types";
import ProjectTemplate from "./ProjectTemplate";

const project: ProjectContent = {
  id: 1,
  title: "sosoeat",
  type: "COMMUNITY WEB APP",
  summary:
    "1인 가구를 위한 지역 기반 모임 서비스로, 식사 모임과 공동구매를 연결하는 커뮤니티 플랫폼입니다. 배달비 부담, 혼밥의 외로움, 식재료 낭비 등 일상 속 불편함을 해결하는 것을 목표로 합니다.",
  period: "2026.03 - 2026.04",
  team: "Frontend 5명",
  role: "기획 · Frontend · UI",
  demoUrl: "https://sosoeat.vercel.app/home",
  githubUrl: "https://github.com/naneunyamini/sosoeat-refactoring",
  documents: [{ label: "Project Deck", url: "/pdf/sosoeat.pdf" }],
  contribution: "담당 범위 입력",
  accent: "#a9c7ec",
  stacks: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "react-easy-crop",
    "Zustand",
    "TanStack Query",
    "GitHub",
    "Figma",
  ],
  overview: [
    {
      label: "Background",
      text: "1인 가구가 빠르게 증가하면서 혼자 식사하고 음식을 주문하는 생활이 일상화되었습니다.",
    },
    {
      label: "Problem",
      text: "1인 가구는 높은 최소 주문 금액과 남는 음식에 부담을 느끼지만, 이를 함께 나눌 사람을 찾기 어렵습니다.",
    },
    {
      label: "Goal",
      text: "지역 기반 모임을 통해 음식과 비용을 나누고, 소소한 만남이 지속적인 관계로 이어지는 경험을 제공합니다.",
    },
  ],
  featureLayout: "showcase",
  decisions: [
    {
      title: "URL을 단일 상태 출처로 활용한 마이페이지 재설계",
      situation:
        "마이페이지 진입 시 모든 탭의 데이터를 요청하고, 활성 탭을 URL과 클라이언트 상태에서 각각 관리해 불필요한 요청과 상태 동기화 문제가 발생했습니다.",
      choice:
        "Server Component가 searchParams를 해석하도록 변경해 URL을 활성 탭의 단일 상태 출처로 사용했습니다. 활성 탭의 첫 페이지만 서버에서 prefetch해 HydrationBoundary로 전달하고, 탭 내비게이션과 무한 스크롤 등 상호작용이 필요한 영역만 Client Component와 React Query가 담당하도록 분리했습니다.",
      reason:
        "초기 데이터 로딩과 지속적인 사용자 상호작용의 책임을 구분하면 서버·클라이언트 간 중복 요청을 제거할 수 있습니다. 또한 URL만으로 화면 상태를 재현할 수 있어 새로고침과 뒤로 가기에서도 일관된 사용자 경험을 제공할 수 있다고 판단했습니다.",
    },
    {
      title: "AI 리뷰와 사람 리뷰의 역할 분리",
      situation:
        "반복적인 구조 규칙 위반까지 리뷰어가 직접 확인하면서 PR 병합이 지연되고 후속 개발이 대기하는 문제가 있었습니다.",
      choice:
        "FSD·Public API·React Compiler·보안 등 7개 영역의 11개 규칙을 우선순위별로 설계해 AI가 1차로 검사하도록 했습니다. AI는 파일·라인·근거·수정 방향만 제시하고, 승인과 차단은 사람이 판단하도록 경계를 설정했습니다.",
      reason:
        "반복적인 규칙 검사는 자동화하되 핵심 로직과 병합 여부는 사람이 검토해야 리뷰 속도를 높이면서 AI의 잘못된 판단이 개발 과정에 직접적인 영향을 주는 것을 방지할 수 있다고 판단했습니다.",
    },
  ],
  features: [
    {
      title: "프로필 조회·수정과 이미지 크롭",
      description:
        "사용자 정보 조회·수정 API를 연동하고, react-easy-crop을 활용해 프로필 이미지를 확대·이동·크롭할 수 있도록 구현했습니다. 선택한 이미지의 미리보기부터 수정 결과 반영까지 하나의 편집 흐름으로 연결했습니다.",
      image: "/image/sosoeat-feature1.png",
      imageAlt: "프로필 편집과 이미지 크롭 화면",
      tags: ["User API", "react-easy-crop", "Image preview"],
    },
    {
      title: "활동 데이터 집계와 시각화",
      description:
        "참여·개설 모임과 작성 게시글 데이터를 집계해 사용자의 활동을 한눈에 확인할 수 있도록 구성했습니다. 수치 요약과 탭별 목록을 연결해 활동 현황에서 상세 내역으로 자연스럽게 이동하도록 설계했습니다.",
      image: "/image/frame.png",
      imageAlt: "참여 모임·개설 모임·게시글 활동 요약 화면",
      tags: ["TanStack Query", "Activity summary", "Infinite scroll"],
    },
    {
      title: "모임·즐겨찾기 상태 동기화",
      description:
        "모임 상태 변경과 즐겨찾기 결과가 마이페이지 목록에 즉시 반영되도록 서버 상태와 UI를 동기화했습니다. 무한 스크롤 중에도 변경된 카드 상태가 일관되게 유지되도록 React Query가 상호작용 이후의 데이터를 관리하게 했습니다.",
      image: "/image/sosoeat-feature3.png",
      imageAlt: "모임 상태와 즐겨찾기가 반영된 목록 화면",
      tags: ["Server state", "Cache sync", "Favorites"],
    },
  ],
  troubles: [
    {
      title: "이미지 미리보기의 Object URL 정리 누락",
      problem:
        "프로필·모임·게시글 이미지 미리보기에서 Object URL의 생성과 해제 로직이 여러 이벤트에 분산되어 있었고, 컴포넌트 언마운트 시 URL 해제가 보장되지 않았습니다.",
      analysis:
        "각 기능의 이미지 처리 흐름을 비교해 파일 교체와 제거 시점에는 일부 해제 로직이 있지만, 화면 이탈 경로에는 공통된 cleanup이 없다는 점을 확인했습니다",
      solution:
        "useEffect cleanup을 기반으로 한 useObjectUrl 공통 훅으로 생성과 해제 책임을 통합했습니다. 파일 교체·제거·언마운트 상황에서 revokeObjectURL이 호출되는지도 단위 테스트로 검증했습니다.",
      result:
        "Object URL 정리 누락으로 인한 메모리 누수 가능성을 줄이고, 기능별로 달랐던 이미지 미리보기 구현을 하나의 생명주기 규칙으로 통일했습니다.",
    },
    {
      title: "FSD 경계 위반으로 발생한 500 오류 재발 방지",
      problem:
        "FSD 내부 경로를 직접 참조하거나 서버 전용 함수가 잘못 노출되는 구조가 실제 500 오류로 이어진 사례가 발생했습니다.",
      analysis:
        "오류가 발생한 파일의 import 경로와 Public API 노출 범위를 확인해, 기능 자체가 아니라 모듈 경계와 서버·클라이언트 책임 위반이 원인임을 파악했습니다.",
      solution:
        "관련 참조 구조를 수정하고 해당 사례를 48시간 이내 ESLint와 AI 리뷰 규칙에 반영했습니다. FSD 내부 경로 직접 참조와 서버 전용 함수 노출을 Critical 항목으로 지정했습니다.",
      result:
        "동일한 구조적 문제가 코드 작성 단계에서는 ESLint, PR 단계에서는 AI 리뷰를 통해 발견되도록 하여 같은 유형의 오류가 다시 병합될 가능성을 줄였습니다.",
    },
  ],
  results: [
    { value: "00%", label: "성능 또는 사용성 개선 지표" },
    { value: "00명", label: "테스트 참여자 또는 사용자" },
    { value: "0회", label: "배포·개선 또는 반복 횟수" },
  ],
  learned: "기술, 협업, 일정 관리 측면에서 배운 내용을 작성합니다.",
  next: "다시 진행한다면 개선하고 싶은 부분과 발전 방향을 작성합니다.",
};

function Project1Demo() {
  return (
    <section
      className="demo-stage"
      id="demo"
      aria-label="sosoeat 데모 이미지 영역"
      style={{ backgroundColor: project.accent }}
    >
      <div className="demo-browser">
        <div className="browser-top">
          <i />
          <i />
          <i />
          <span>sosoeat.demo</span>
        </div>
        <div className="demo-app demo-app-image">
          <img src="/image/sosoeat-demo.png" alt="sosoeat 데모 화면" />
        </div>
      </div>
      <p>sosoeat의 대표 화면이나 핵심 사용자 흐름 이미지·GIF를 배치하세요.</p>
    </section>
  );
}

export default function Project1({ navigate }: { navigate: Navigate }) {
  return (
    <ProjectTemplate
      project={project}
      navigate={navigate}
      demo={<Project1Demo />}
    />
  );
}
