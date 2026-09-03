import type { Navigate } from "../../types";
import "./About.css";

export default function About({ navigate }: { navigate: Navigate }) {
  return (
    <main className="page-shell about-page">
      <nav className="page-tabs" aria-label="포트폴리오 메뉴">
        <button onClick={() => navigate("home")}>Home</button>
        <button className="active">About me</button>
        <button onClick={() => navigate("project")}>Projects</button>
      </nav>
      <header className="about-heading">
        <p className="section-kicker">ABOUT ME</p>
        <h2>
          사용자와 팀을
          <br />
          연결하는 개발자
        </h2>
        <p>
          새로운 기술을 익히는 데 그치지 않고,
          <br />왜 필요한지 이해하며 팀과 함께 사용자에게 근거 있는 화면을
          만드는 과정을 좋아합니다.
        </p>
      </header>
      <section className="about-layout">
        <article className="about-story">
          <span className="section-kicker">MY STORY</span>
          <div className="about-story-list">
            <section>
              <b>01 · USER EXPERIENCE</b>
              <h2>사용자의 불편함을 발견하면 근거 있는 화면으로 답합니다.</h2>
              <p>
                사용자가 정보를 이해하기 어려운 지점을 먼저 관찰하고, 레퍼런스
                분석을 바탕으로 직관적인 UI를 제안합니다. 작은 인터랙션과 정보
                표현의 차이까지 고민해 서비스의 체감 품질을 높입니다.
              </p>
            </section>
            <section>
              <b>02 · INITIATIVE</b>
              <h2>기록과 주도로 팀의 개발 속도를 높입니다.</h2>
              <p>
                먼저 의견과 레퍼런스를 제시해 논의의 출발점을 만들고, 결정
                사항을 문서화해 팀의 공통 기준으로 남깁니다. 아이디어를 구체적인
                기획과 개발 결과로 연결합니다.
              </p>
            </section>
            <section>
              <b>03 · COLLABORATION</b>
              <h2>팀의 맥락을 읽고 협업을 설계합니다.</h2>
              <p>
                서로 다른 의견 속에서 일정과 우선순위를 함께 살피고, 모두가
                납득할 수 있는 기준을 만듭니다. 기획과 디자인의 맥락을 팀의
                합의와 일관된 사용자 경험으로 연결합니다.
              </p>
            </section>
          </div>
        </article>
        <article className="about-card about-values">
          <span className="section-kicker">I VALUE</span>
          <ul>
            <li>
              <b>01</b>
              <span><strong>사용자의 불편을 관찰하고 근거 있는 UI로 해결</strong></span>
            </li>
            <li>
              <b>02</b>
              <span><strong>기록을 바탕으로 실행을 주도</strong></span>
            </li>
            <li>
              <b>03</b>
              <span><strong>팀의 맥락을 읽고 의견을 조율</strong></span>
            </li>
          </ul>
        </article>
        <article className="about-card about-stack">
          <span className="section-kicker">TECH STACK</span>
          <div>
            <b>Frontend</b>
            <p>React · TypeScript · JavaScript · Next.js · Tailwind CSS · Shadcn UI</p>
          </div>
          <div>
            <b>Tools</b>
            <p>GitHub · Figma · Notion · Storybook · Vercel</p>
          </div>
        </article>
        <article className="about-card about-timeline">
          <span className="section-kicker">TRAINING</span>
          <div>
            <time>2026</time>
            <p><b>코드잇 스프린트</b><br />프론트엔드 단기심화 과정</p>
          </div>
          <div>
            <time>2024</time>
            <p><b>홍익대학교 메타버스 융합SW 아카데미</b><br />웹 프로그래밍</p>
          </div>
        </article>
      </section>
      <section className="about-cta" aria-label="학력, 자격증 및 채널">
        <article>
          <span className="section-kicker">EDUCATION</span>
          <h3>학력</h3>
          <p>홍익대학교 소프트웨어융합학과</p>
          <small>2022.03 - 2027.02 (졸업 예정)</small>
        </article>
        <article>
          <span className="section-kicker">CERTIFICATE</span>
          <h3>자격증</h3>
          <p>정보처리기사</p>
          <small>한국산업인력공단 ｜ 2025.12.24</small>
        </article>
        <article className="about-channels">
          <span className="section-kicker">CHANNEL</span>
          <h3>GitHub + Blog</h3>
          <div>
            <a href="https://github.com/naneunyamini" target="_blank" rel="noreferrer">
              GitHub <span>↗</span>
            </a>
            <a href="https://velog.io/@minp02/posts" target="_blank" rel="noreferrer">
              Blog <span>↗</span>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
