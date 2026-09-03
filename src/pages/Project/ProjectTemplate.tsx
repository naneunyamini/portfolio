import type { ReactNode } from "react";
import type { Navigate } from "../../types";
import type { ProjectContent } from "./project.types";

const projectLinks = [
  { id: 1, title: "sosoeat" },
  { id: 2, title: "mongddang" },
  { id: 3, title: "moodin" },
] as const;

export default function ProjectTemplate({
  project,
  navigate,
  demo,
  sectionFour,
}: {
  project: ProjectContent;
  navigate: Navigate;
  demo: ReactNode;
  sectionFour?: ReactNode;
}) {
  const nextId = project.id === 3 ? 1 : project.id + 1;
  const nextTitle = projectLinks[nextId - 1].title;
  const availableDocuments = project.documents?.filter((document) => document.url) ?? [];

  return (
    <main className="page-shell project-page">
      <nav className="page-tabs" aria-label="포트폴리오 메뉴">
        <button onClick={() => navigate("home")}>Home</button>
        <button onClick={() => navigate("about")}>About me</button>
        <button className="active">Projects</button>
      </nav>
      <div className="project-switcher" aria-label="프로젝트 선택">
        {projectLinks.map((item) => (
          <button
            key={item.id}
            className={item.id === project.id ? "active" : ""}
            onClick={() => navigate("project", item.id)}
          >
            0{item.id} {item.title}
          </button>
        ))}
      </div>

      <header className="project-hero">
        <div className="project-index">
          PROJECT 0{project.id} · {project.type}
        </div>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        {(project.demoUrl || project.githubUrl || availableDocuments.length > 0) && (
          <div className="project-actions">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Live demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
            {availableDocuments.map((document) => (
              <a key={document.url} href={document.url} target="_blank" rel="noreferrer">
                {document.label} ↗
              </a>
            ))}
          </div>
        )}
        <dl className="project-meta">
          <div>
            <dt>기간</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>인원</dt>
            <dd>{project.team}</dd>
          </div>
          <div>
            <dt>담당</dt>
            <dd>{project.role}</dd>
          </div>
          {/* <div>
            <dt>기여도</dt>
            <dd>{project.contribution}</dd>
          </div> */}
        </dl>
      </header>

      {demo}

      <section className="project-section overview-section">
        <div className="section-heading">
          <span>01</span>
          <div>
            <p className="section-kicker">OVERVIEW</p>
            <h2>프로젝트를 시작한 이유</h2>
          </div>
        </div>
        <div className="overview-grid">
          {project.overview.map((item) => (
            <article key={item.label}>
              <b>{item.label}</b>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section">
        <div>
          <p className="section-kicker">TECH STACK</p>
          <h2>사용 기술</h2>
        </div>
        <div className="stack-list">
          {project.stacks.map((stack) => (
            <span key={stack}>{stack}</span>
          ))}
        </div>
        {/* <p className="stack-guide">
          각 기술을 선택한 이유는 이 프로젝트 파일에서 실제 내용으로 교체하세요.
        </p> */}
      </section>

      <section className="project-section decision-section">
        <div className="section-heading">
          <span>02</span>
          <div>
            <p className="section-kicker">IMPLEMENTATION</p>
            <h2>구현 과정과 판단 근거</h2>
          </div>
        </div>
        <div className="decision-grid">
          {project.decisions.map((item, index) => (
            <article key={item.title}>
              <span>DECISION 0{index + 1}</span>
              <h3>{item.title}</h3>
              <div>
                <b>상황</b>
                <p>{item.situation}</p>
              </div>
              <div>
                <b>선택</b>
                <p>{item.choice}</p>
              </div>
              <div>
                <b>근거</b>
                <p>{item.reason}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`feature-section ${project.featureLayout === "showcase" ? "feature-section-showcase" : ""} ${project.featureLayout === "mobile" ? "feature-section-mobile" : ""}`}
      >
        <div className="section-heading">
          <span>03</span>
          <div>
            <p className="section-kicker">KEY FEATURES</p>
            <h2>핵심 기능과 화면</h2>
          </div>
        </div>
        {project.featureLayout === "mobile" ? (
          <div className="mobile-feature-list">
            {project.features.map((item, index) => {
              const images =
                item.images ??
                (item.image
                  ? [{ src: item.image, alt: item.imageAlt ?? item.title }]
                  : []);
              return (
                <article className="mobile-feature-item" key={item.title}>
                  <div className="mobile-feature-stage">
                    <div className="phone-pair">
                      {images.length ? (
                        images.map((image) => (
                          <div className="phone-frame" key={image.src}>
                            <div className="phone-island" />
                            <img src={image.src} alt={image.alt} />
                          </div>
                        ))
                      ) : (
                        <div className="phone-frame">
                          <div className="phone-island" />
                          <div
                            className={`mobile-feature-slot mobile-slot-${index + 1}`}
                          >
                            <small>SCREEN 0{index + 1}</small>
                            <strong>{item.imageAlt ?? item.title}</strong>
                            <span>모바일 이미지 영역</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="feature-showcase-copy">
                    <span>FEATURE 0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.tags && (
                      <ul>
                        {item.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : project.featureLayout === "showcase" ? (
          <div className="feature-showcase">
            {project.features.map((item, index) => (
              <article className="feature-showcase-item" key={item.title}>
                <div className="feature-showcase-media">
                  <div className="feature-window-bar">
                    <i />
                    <i />
                    <i />
                    <span>MY PAGE · 0{index + 1}</span>
                  </div>
                  {item.image ? (
                    <img src={item.image} alt={item.imageAlt ?? item.title} />
                  ) : (
                    <div className="feature-image-slot">
                      <span>SCREEN 0{index + 1}</span>
                      <strong>{item.imageAlt ?? `${item.title} 화면`}</strong>
                      <small>실제 기능 이미지로 교체하는 영역</small>
                    </div>
                  )}
                </div>
                <div className="feature-showcase-copy">
                  <span>FEATURE 0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.tags && (
                    <ul>
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="feature-grid">
            {project.features.map((item, index) => (
              <article key={item.title}>
                <div
                  className={`feature-placeholder ${index === 1 ? "warm" : index === 2 ? "dark" : ""}`}
                >
                  0{index + 1}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      {sectionFour ?? (project.troubles.length > 0 ? (
        <section className="trouble-section">
          <div className="trouble-heading">
            <span>04</span>
            <div>
              <p className="section-kicker">TROUBLESHOOTING</p>
              <h2>문제를 해결한 과정</h2>
            </div>
          </div>
          <div className="trouble-list">
            {project.troubles.map((item, index) => (
              <article key={item.title}>
                <header>
                  <span>ISSUE 0{index + 1}</span>
                  <h3>{item.title}</h3>
                </header>
                <div className="trouble-flow">
                  <div>
                    <b>Problem</b>
                    <p>{item.problem}</p>
                  </div>
                  <i>→</i>
                  <div>
                    <b>Analysis</b>
                    <p>{item.analysis}</p>
                  </div>
                  <i>→</i>
                  <div>
                    <b>Solution</b>
                    <p>{item.solution}</p>
                  </div>
                  <i>→</i>
                  <div>
                    <b>Result</b>
                    <p>{item.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null)}

      {/* <section className="result-section">
        <div>
          <p className="section-kicker">RESULT & REVIEW</p>
          <h2>
            성과와 회고를
            <br />
            담는 자리
          </h2>
        </div>
        <div className="result-cards">
          {project.results.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
        <div className="review-copy">
          <b>What I learned</b>
          <p>{project.learned}</p>
          <b>What&apos;s next</b>
          <p>{project.next}</p>
        </div>
      </section> */}

      <button
        className="project-next"
        onClick={() => navigate("project", nextId)}
      >
        <span>NEXT PROJECT · 0{nextId}</span>
        <b>{nextTitle} 살펴보기</b>
        <i>↗</i>
      </button>
    </main>
  );
}
