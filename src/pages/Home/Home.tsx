import type { Navigate } from "../../types";
import "./Home.css";

export default function Home({ navigate }: { navigate: Navigate }) {
  return (
    <main className="page-shell home-page">
      <section className="profile-hero">
        <img
          className="profile-photo"
          src="/image/profile.JPG"
          alt="박지민 프로필 사진"
        />
        <div className="profile-copy">
          <h1>박지민</h1>
          <strong>Education Service PM</strong>
          <p>
            사용하기 편하고 오래 운영될 수 있는 서비스를 기획하고 구현합니다.
            <br />
            작은 불편을 놓치지 않고, 기획과 개발을 연결하는 서비스 기획자입니다.
          </p>
        </div>
      </section>

      <nav className="page-tabs" aria-label="포트폴리오 메뉴">
        <button className="active" onClick={() => navigate("home")}>
          Home
        </button>
        <button onClick={() => navigate("about")}>About me</button>
        <button onClick={() => navigate("project")}>Projects</button>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </nav>

      <section className="bento-grid" aria-label="포트폴리오 하이라이트">
        <button className="bento bento-intro" onClick={() => navigate("about")}>
          <span className="folder-tab" />
          <span className="card-label">ABOUT ME</span>
          <h2>
            사용자의 불편을 발견하고
            <br />
            근거 있는 화면으로 답합니다.
          </h2>
          <i>소개 보기 →</i>
        </button>
        <article className="bento bento-role">
          <span className="card-label">CORE STRENGTHS</span>
          <div className="tool-words">
            <b>사용자 중심</b>
            <b>문제 정의</b>
            <b>UX 설계</b>
            <b>근거 기반</b>
            <b>기획</b>
            <b>실행력</b>
            <b>관찰</b>
            <b>맥락 이해</b>
            <b>조율</b>
            <b>주도성</b>
            <b>기록</b>
          </div>
        </article>
        <button
          className="bento bento-collaboration"
          onClick={() => navigate("project", 3)}
        >
          <span className="card-label">PROJECT 03 · HEALTHCARE</span>
          <h3>moodin</h3>
          <h4>스트레스 진단부터 맞춤 관리까지 연결하는 헬스케어 플랫폼</h4>
          <small>moodin 프로젝트 보기 →</small>
        </button>
        <a
          className="bento bento-feature"
          href="https://sosoeat.vercel.app/home"
          target="_blank"
          rel="noreferrer"
        >
          <div className="feature-ui">
            <span className="feature-nav" />
            <div>
              <img src="/image/sosoeat-demo.png" alt="sosoeat 소개 화면" />
            </div>
          </div>
          <span className="feature-meta">PROJECT 01 · FEATURED PROJECT</span>
          <h2>sosoeat</h2>
          <p>1인 가구를 위한 지역 기반 모임 서비스</p>
          <i className="round-arrow">↗</i>
        </a>
        <article className="bento bento-tools">
          <span className="card-label">TECH STACK</span>
          <div className="tool-words">
            <b>React</b>
            <b>TypeScript</b>
            <b>JavaScript</b>
            <b>Next.js</b>
            <b>Tailwind CSS</b>
            <b>Shadcn UI</b>
            <b>Git</b>
            <b>Figma</b>
            <b>Storybook</b>
            <b>Vercel</b>
          </div>
        </article>
        <button
          className="bento bento-learning"
          onClick={() => navigate("project", 2)}
        >
          <span className="card-label">PROJECT 02 · COMMUNITY</span>
          <h3>
            자신의 취향을 탐색하고
            <br />
            공유하는 커뮤니티 플랫폼
          </h3>
          <div className="progress">
            <i />
          </div>
          <small>mongddang 프로젝트 보기 →</small>
        </button>
      </section>
    </main>
  );
}
