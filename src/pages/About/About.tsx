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
          사용자와 기술을
          <br />
          연결하는 기획자
        </h2>
        <p>
          사용자와 운영자의 문제를 발견하고,
          <br />왜 필요한지 정의한 뒤 팀과 함께 실행 가능한 서비스로 만드는
          과정을 좋아합니다.
        </p>
      </header>
      <section className="about-layout">
        <article className="about-story">
          <span className="section-kicker">MY STORY</span>
          <div className="about-story-list">
            <section>
              <b>01 · USER-CENTERED PLANNING</b>
              <h2>사용자의 불편을 구체적인 개선 과제로 바꿉니다.</h2>
              <p>
                사용자와 운영자의 흐름을 직접 살펴보며 불편이 발생하는 지점을
                찾습니다. 피드백과 QA 결과를 바탕으로 문제의 원인과 기대효과를
                정리하고, 더 나은 서비스 경험을 위한 개선 방향을 제안합니다.
              </p>
            </section>

            <section>
              <b>02 · PLANNING TO EXECUTION</b>
              <h2>아이디어를 실행 가능한 기획과 기능으로 연결합니다.</h2>
              <p>
                개발 경험을 바탕으로 요구사항과 사용자 흐름을 구체화하고, 기술적
                구현 가능성까지 고려해 기획합니다. 아이디어를 화면과
                프로토타입으로 빠르게 구현하며 기획의 실효성을 검증합니다.
              </p>
            </section>

            <section>
              <b>03 · COLLABORATION</b>
              <h2>서로 다른 관점을 조율해 팀의 공통 기준을 만듭니다.</h2>
              <p>
                사용자, 운영자, 기획자, 개발자의 관점을 함께 살피며 일정과
                우선순위를 조율합니다. 논의와 결정 사항을 문서화하고, 모두가
                같은 방향에서 실행할 수 있도록 명확한 기준으로 정리합니다.
              </p>
            </section>
          </div>
        </article>
        <article className="about-card about-values">
          <span className="section-kicker">I VALUE</span>
          <ul>
            <li>
              <b>01</b>
              <span>
                <strong>사용자의 불편을 관찰하고 근거 있는 UI로 해결</strong>
              </span>
            </li>
            <li>
              <b>02</b>
              <span>
                <strong>기록을 바탕으로 실행을 주도</strong>
              </span>
            </li>
            <li>
              <b>03</b>
              <span>
                <strong>팀의 맥락을 읽고 의견을 조율</strong>
              </span>
            </li>
          </ul>
        </article>
        <article className="about-card about-stack">
          <span className="section-kicker">TECH STACK</span>
          <div>
            <b>Frontend</b>
            <p>
              React · TypeScript · JavaScript · Next.js · Tailwind CSS · Shadcn
              UI
            </p>
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
            <p>
              <b>코드잇 스프린트</b>
              <br />
              프론트엔드 단기심화 과정
            </p>
          </div>
          <div>
            <time>2024</time>
            <p>
              <b>홍익대학교 메타버스 융합SW 아카데미</b>
              <br />웹 프로그래밍
            </p>
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
            <a
              href="https://github.com/naneunyamini"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span>↗</span>
            </a>
            <a
              href="https://velog.io/@minp02/posts"
              target="_blank"
              rel="noreferrer"
            >
              Blog <span>↗</span>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
