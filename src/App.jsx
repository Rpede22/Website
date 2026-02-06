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
              I&apos;m a computer science student, interested in software development. I am able to program in a variety of programming languages and handle great amounts of data, 
              meaning that I can write code to solve problems and analyse data for insights. In general, I am a curious and innovative person that breaks down problems into smaller, manageable parts, 
              and then uses logical and creative thinking to solve them. I am particularly interested in AI and Machine Learning, because of how it can be used to solve complex problems and overall make life easier.
              <br />
              <br />
              I know my way around a lot of different programming languages, but I am eager to learn more and expand my skillset. As a person, I am a hard worker and i work just aswell alone as I do in a team. I am very structured and organized when it comes to my work, and I always strive to deliver high quality results.
              <br />
              <br />
              In my free time, I enjoy playing video games with my friends, going for the occasional run or a trip to the padel court. Other than that, I also like to explore the world with my girlfriend, whether it's a weekend trip or a longer vacation.
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
                    Responsible for onboarding and training other crew members and performing assessments of them to give constructive feedback. In addition, I was responsible to maintain the high quality standard, regarding both the food and the service.
                  </p>

                  <div className="item-tags">
                    <span className="item-tag">Quality assurance</span>
                    <span className="item-tag">Training of new employees</span>
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
                    My first part time job, where I learned what it means to be a team player and how to handle customer interactions. Including what it means to provide good service and how to communicate effectively.
                  </p>

                  <div className="item-tags">
                    <span className="item-tag">Customer Service</span>
                    <span className="item-tag">Team Player</span>
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

              <ProjectLink href="https://github.com/Rpede22/Website" />
            </div>

            <div className="item-card">
              <h3>Two Deep Learning Projects</h3>
              <p className="muted">
                Two similar projects focused on image classification using deep learning. The first project is a simple implementation of a convulutional neural network for classifying Cats and Dogs. The second project is a more complex implementation, where we ourselves implemented the linear and Conv2d layers, and trained the network to classify between patients with pneumonia and healthy patients, based on X-ray images of their lungs.
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
                Reinforcement learning project where we made 3 different custom environments. The first environment was a simple mountainclimb, where with each move upwards the agent had a chance to fall all the way down. The second was a slotmachinechain, where at each step the agent had the chance to gamble for a higher reward, with the risk of losing some of the reward. The third environment was a branching tree, where the reward was random at each leaf. We then made 4 agents each with their own twist, to train on each of the environments.
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
                For our Bachelor's project, we developed three different capture the flag challenges, each containerized using docker and then deployed to a test server. The first challenge was a simple website with a SQL injection vulnerability, where the flag was hidden in a small database on a website. The second challenge is a website that uses JSON Web Tokens for session management, but the implementation is flawed, making users able to forge their own tokens and impersonate other users. The third challenge is a file inclusion vulnerability, where users can find clues in the source code and then use those clues to include a file that contrains the flag.
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
                A small prototype for a task sharing application, that follows the principles of microservices architecture. The prototype contains only the backend, which is implemented in Jolie and exposes a REST API. The backend is responsible for handling user authentication, task management and sharing of tasks between users. The data is stored in a SQLite database.
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
                A database mimicking a warehouse management system, implemented using PostgreSQL. The database is designed to handle inventory management and order processing.
              </p>

              <div className="item-tags">
                <span className="item-tag">PostgreSQL</span>
              </div>

              <ProjectLink href="https://github.com/Rpede22/Warehouse-Database" />
            </div>

            <div className="item-card">
              <h3>Pacman</h3>
              <p className="muted">
                A simple object oriented implementation of the classic game Pacman. The implementation comes to life using JavaFX, and features a fully playable game, where the player can control Pacman to eat all the dots, while avoiding the ghosts. The game also features power pellets that allow Pacman to eat the ghosts for a short period of time.
              </p>

              <div className="item-tags">
                <span className="item-tag">Java</span>
                <span className="item-tag">JavaFX</span>
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
