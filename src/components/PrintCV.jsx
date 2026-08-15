import { PROGRAMMING_SKILLS } from "../App.jsx";

function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.42 7.86 10.95.58.11.8-.26.8-.58v-2.1c-3.2.71-3.88-1.27-3.88-1.27-.53-1.39-1.3-1.76-1.3-1.76-1.06-.75.08-.74.08-.74 1.17.08 1.78 1.23 1.78 1.23 1.04 1.82 2.73 1.29 3.4.99.11-.77.41-1.29.74-1.58-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.45-2.35 1.2-3.18-.12-.3-.52-1.52.11-3.17 0 0 .97-.32 3.18 1.21.92-.26 1.9-.39 2.88-.4.98.01 1.97.14 2.89.4 2.2-1.53 3.17-1.21 3.17-1.21.64 1.65.24 2.87.12 3.17.74.83 1.2 1.89 1.2 3.18 0 4.52-2.69 5.52-5.25 5.81.42.37.79 1.1.79 2.22v3.29c0 .32.21.7.81.58A11.27 11.27 0 0 0 23.25 12C23.25 5.62 18.27.5 12 .5z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.47c0 1.08.88 1.97 1.98 1.97h.02C6.1 7.44 7 6.55 7 5.47 7 4.38 6.1 3.5 5 3.5h-.02zM3.5 21h3V9h-3v12zM9 9h2.9v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V21H9V9z" />
    </svg>
  );
}

const PRINT_PROJECTS = [
  {
    title: "Personal Dashboard",
    href: "https://github.com/Rpede22/Personal-Dashboard",
    desc:
      "Local-only Next.js + Electron desktop app aggregating 8+ APIs (NHL, Strava, Blizzard, iCloud CalDAV, …).",
    tags: "TypeScript · Next.js · Electron · SQLite · Prisma",
  },
  {
    title: "Cross-platform Budget App",
    href: "https://github.com/Rpede22/Budget",
    desc:
      ".NET / Avalonia desktop budget tool with clean UI and charted overviews of income and expenses.",
    tags: "C# · .NET · Avalonia",
  },
  {
    title: "Bachelor's Project — CTF",
    href: "https://github.com/Rpede22/Bachelor-Project",
    desc:
      "Three dockerised CTF challenges: SQL injection, JWT forgery, file-inclusion vulnerabilities.",
    tags: "PHP · Docker · Python · SQLite",
  },
  {
    title: "Deep Learning — Medical Imaging",
    href: "https://github.com/Rpede22/Deep-learning-projects",
    desc:
      "CNN cat/dog classifier and a from-scratch Conv2d implementation classifying pneumonia from X-rays.",
    tags: "Python · PyTorch · NumPy",
  },
];

export default function PrintCV() {
  return (
    <div className="print-cv" aria-hidden>
      <h1 className="pcv-name">Rasmus Burkarl Pedersen</h1>

      <div className="pcv-contact">
        <span className="pcv-item">
          <IconPhone />
          <span>60 46 32 26</span>
        </span>
        <span className="pcv-item">
          <IconMail />
          <span>burkarl@outlook.dk</span>
        </span>
        <span className="pcv-item">
          <IconPin />
          <span>Aarhus, Denmark</span>
        </span>
        <span className="pcv-item">
          <IconGitHub />
          <span>Rpede22</span>
        </span>
        <span className="pcv-item">
          <IconLinkedIn />
          <span>rasmus-burkarl-pedersen</span>
        </span>
      </div>

      <div className="pcv-profile">
        <h2>Profile</h2>
        <p>
          I am a computer science student, interested in IT, AI and software
          development. I am able to program in a variety of coding languages
          and handle great amounts of data, meaning that I can write code and
          analyse data. Furthermore, I am a curious and innovative person that
          breaks down large problems into smaller, manageable parts, and then
          uses logical and creative thinking to solve them.
        </p>
      </div>

      <div className="pcv-grid">
        <div className="pcv-col">
          <h2 className="pcv-sect">Experience</h2>

          <div className="pcv-entry">
            <div className="pcv-place">Odder Forsyning</div>
            <div className="pcv-role">Junior IT Support</div>
            <div className="pcv-date">April 2026 – Present</div>
            <ul className="pcv-bullets">
              <li>
                Ad-hoc IT support on network infrastructure and utility control
                systems
              </li>
              <li>On-site troubleshooting to keep unattended systems running</li>
              <li>
                Diagnosing connectivity issues across distributed field sites
              </li>
            </ul>
          </div>

          <div className="pcv-entry">
            <div className="pcv-place">McDonald's</div>
            <div className="pcv-role">Crew member and Crew trainer</div>
            <div className="pcv-date">January 2015 – July 2022</div>
            <ul className="pcv-bullets">
              <li>Responsible for delivering friendly service</li>
              <li>Responsible for maintaining standards and quality</li>
              <li>
                Responsible for supporting the manager with leadership tasks
              </li>
              <li>
                Onboarding and training new crew, giving constructive feedback
              </li>
              <li>Working together as a team to realise daily goals</li>
            </ul>
          </div>

          <h2 className="pcv-sect">Education</h2>

          <div className="pcv-entry">
            <div className="pcv-place">SDU – University of Southern Denmark</div>
            <div className="pcv-role">Master's in Computer Science</div>
            <div className="pcv-date">2025 – 2027</div>
          </div>

          <div className="pcv-entry">
            <div className="pcv-place">SDU – University of Southern Denmark</div>
            <div className="pcv-role">Bachelor's in Computer Science</div>
            <div className="pcv-date">2022 – 2025</div>
          </div>

          <div className="pcv-entry">
            <div className="pcv-place">Rybners Almene Gymnasium</div>
            <div className="pcv-role">
              Mathematics, Chemistry and Physics
            </div>
            <div className="pcv-date">2017 – 2020</div>
          </div>
        </div>

        <div className="pcv-col">
          <h2 className="pcv-sect">Competences</h2>
          <div className="pcv-skills">
            {PROGRAMMING_SKILLS.map((s) => (
              <div className="pcv-skill" key={s.name}>
                <span className="pcv-skill-name">{s.name}</span>
                <span className="pcv-skill-bar">
                  <span
                    className="pcv-skill-fill"
                    style={{ width: `${s.level}%` }}
                  />
                </span>
              </div>
            ))}
          </div>

          <h2 className="pcv-sect pcv-sect-gap">Tools</h2>
          <p className="pcv-tools">
            .NET · Git · Linux · Docker · LaTeX · Microsoft Office
          </p>

          <h2 className="pcv-sect pcv-sect-gap">Languages</h2>
          <ul className="pcv-lang">
            <li>
              Danish<span className="pcv-lang-sub">Native language</span>
            </li>
            <li>
              English
              <span className="pcv-lang-sub">
                Full professional proficiency
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pcv-projects-section">
        <h2 className="pcv-sect">Projects</h2>
        <div className="pcv-projects">
          {PRINT_PROJECTS.map((p) => (
            <div className="pcv-project" key={p.title}>
              <div className="pcv-project-top">
                <h3>{p.title}</h3>
                <a
                  className="pcv-project-link"
                  href={p.href}
                  aria-label={`${p.title} on GitHub`}
                >
                  <IconGitHub />
                </a>
              </div>
              <p className="pcv-project-desc">{p.desc}</p>
              <div className="pcv-project-tags">{p.tags}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
