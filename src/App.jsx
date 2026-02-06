import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Section from "./components/Section.jsx";
import { useScrollSpy } from "./hooks/useScrollSpy.js";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";

const NAV_ITEMS = [
  { id: "about", label: "About me" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "competences", label: "Competences" },
];

function ProjectLink({ href }) {
  return (
    <a
      className="project-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="project-link-icon" aria-hidden />
      <span>View on GitHub</span>
    </a>
  );
}


export default function App() {
  const sectionIds = NAV_ITEMS.map((x) => x.id);
  const activeId = useScrollSpy(sectionIds, { offsetPx: 150 });

  // scroll reveal (light)
  useRevealOnScroll({ rootMargin: "0px 0px -12% 0px" });

  return (
    <>
      <Header />

      <div className="content-wrapper">
        <Sidebar navItems={NAV_ITEMS} activeId={activeId} />

        <main>
          <Section id="about" title="About me">
            <p>
              I&apos;m am a computer science student, interested in software development. 
              I am able to program in a variety of programming languages and handle great amounts of data, 
              meaning that I can write code to solve problems and analyse data for insights. 
              In general, I am a curious and innovative person that breaks down problems into smaller, manageable parts, 
              and then uses logical and creative thinking to solve them. 
              And I am particularly interested in how AI and Machine Learning can help the user.
            </p>
          </Section>

          <Section id="career" title="Career">
            <div className="stack">

              <div className="entry">
                <div className="entry-left">
                  <div className="entry-date">Nov 2020 – June 2022</div>
                  <div className="entry-sub">Crew worker and Trainer</div>
                </div>

                <div className="entry-right">
                  <h3>McDonalds, Gjesing</h3>
                  <p className="muted">
                    Placeholder.
                  </p>

                  <div className="item-tags">
                    <span className="item-tag">Quality assurance</span>
                  </div>
                </div>
              </div>

              <div className="entry">
                <div className="entry-left">
                  <div className="entry-date">Jan 2015 – Nov 2020</div>
                  <div className="entry-sub">Crew worker</div>
                </div>

                <div className="entry-right">
                  <h3>McDonalds, Varde</h3>
                  <p className="muted">
                    Placeholder.
                  </p>

                  <div className="item-tags">
                    <span className="item-tag">Customer Service</span>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="projects" title="Projects">
            <div className="item-card">
              <h3>Personal Portfolio Website</h3>
              <p className="muted">
                A modern, responsive portfolio website built with React. Features
                smooth scrolling navigation, dynamic section highlighting, and
                subtle animations.
              </p>

              <div className="item-tags">
                <span className="item-tag">React</span>
                <span className="item-tag">Vite</span>
                <span className="item-tag">Node.js</span>
              </div>

              <ProjectLink href="https://github.com/yourname/portfolio" />
            </div>

            <div className="item-card">
              <h3>Two Deep Learning Projects</h3>
              <p className="muted">
                Placeholder.
              </p>

              <div className="item-tags">
                <span className="item-tag">Python</span>
                <span className="item-tag">PyTorch</span>
                <span className="item-tag">NumPy</span>
              </div>

              <ProjectLink href="https://github.com/Rpede22/Deep-learning-projects" />
            </div>

            <div className="item-card">
              <h3>Reinforcement learning</h3>
              <p className="muted">
                Placeholder.
              </p>

              <div className="item-tags">
                <span className="item-tag">Python</span>
                <span className="item-tag">Numpy</span>
              </div>

              <ProjectLink href="https://github.com/Rpede22/Reinforcement-learning-project" />
            </div>

            <div className="item-card">
              <h3>Bachelor's Project</h3>
              <p className="muted">
                Placeholder.
              </p>

              <div className="item-tags">
                <span className="item-tag">PhP</span>
                <span className="item-tag">Docker</span>
                <span className="item-tag">Python</span>
                <span className="item-tag">SQLite</span>
              </div>

              <ProjectLink href="https://github.com/Rpede22/Bachelor-Project" />
            </div>

            <div className="item-card">
              <h3>TaskShareApp</h3>
              <p className="muted">
                Placeholder.
              </p>

              <div className="item-tags">
                <span className="item-tag">Jolie</span>
                <span className="item-tag">REST API</span>
                <span className="item-tag">SQLite</span>
              </div>

              <ProjectLink href="https://github.com/Rpede22/TaskShareApp" />
            </div>

            <div className="item-card">
              <h3>Warehouse Database</h3>
              <p className="muted">
                Placeholder.
              </p>

              <div className="item-tags">
                <span className="item-tag">PostgreSQL</span>
              </div>

              <ProjectLink href="https://github.com/Rpede22/Warehouse-Database" />
            </div>

            <div className="item-card">
              <h3>Pacman</h3>
              <p className="muted">
                Placeholder.
              </p>

              <div className="item-tags">
                <span className="item-tag">Java</span>
              </div>

              <ProjectLink href="https://github.com/Rpede22/Pacman" />
            </div>
          </Section>

          <Section id="education" title="Education">
            <div className="stack">

              <div className="entry">
                <div className="entry-left">
                  <div className="entry-date">Sep 2025 – Jun 2027</div>
                  <div className="entry-sub">Master's degree</div>
                </div>

                <div className="entry-right">
                  <h3>University of Southern Denmark, Odense</h3>
                  <p className="muted">Computer Science</p>
                </div>
              </div>

              <div className="entry">
                <div className="entry-left">
                  <div className="entry-date">Sep 2022 – Jun 2025</div>
                  <div className="entry-sub">Bachelor's degree</div>
                </div>

                <div className="entry-right">
                  <h3>University of Southern Denmark, Odense</h3>
                  <p className="muted">Computer Science</p>
                </div>
              </div>

              <div className="entry">
                <div className="entry-left">
                  <div className="entry-date">Aug 2017 – Jun 2020</div>
                  <div className="entry-sub">STX</div>
                </div>

                <div className="entry-right">
                  <h3>Rybners Gymnasium, Esbjerg</h3>
                  <p className="muted">Physics A, Mathematics A, Chemistry A</p>
                </div>
              </div>
            </div>
          </Section>

          <Section id="competences" title="Competences">
            <div className="stack">

              {/* Languages */}
              <div className="entry">
                <div className="entry-left">
                  <div className="entry-date">Languages</div>
                </div>

                <div className="entry-right">
                  <ul className="muted">
                    <li>Danish — Native proficiency</li>
                    <li>English — Full professional proficiency</li>
                  </ul>
                </div>
              </div>

              {/* Programming Languages */}
              <div className="entry">
                <div className="entry-left">
                  <div className="entry-date">Programming Languages</div>
                </div>

                <div className="entry-right">
                  <ul className="muted">
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>R</li>
                    <li>Jolie</li>
                    <li>HTML</li>
                    <li>PHP</li>
                    <li>JavaScript (React, Node.js)</li>
                    <li>Databases: PostgreSQL, MySQL, SQLite</li>
                  </ul>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="entry">
                <div className="entry-left">
                  <div className="entry-date">Tools & Technologies</div>
                </div>

                <div className="entry-right">
                  <ul className="muted">
                    <li>Git</li>
                    <li>Linux</li>
                    <li>Docker</li>
                    <li>LaTeX</li>
                    <li>Microsoft Office</li>
                  </ul>
                </div>
              </div>

            </div>
          </Section>

        </main>
      </div>
    </>
  );
}
