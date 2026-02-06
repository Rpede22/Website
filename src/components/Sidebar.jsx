function IconGitHub(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.42 7.86 10.95.58.11.8-.26.8-.58v-2.1c-3.2.71-3.88-1.27-3.88-1.27-.53-1.39-1.3-1.76-1.3-1.76-1.06-.75.08-.74.08-.74 1.17.08 1.78 1.23 1.78 1.23 1.04 1.82 2.73 1.29 3.4.99.11-.77.41-1.29.74-1.58-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.45-2.35 1.2-3.18-.12-.3-.52-1.52.11-3.17 0 0 .97-.32 3.18 1.21.92-.26 1.9-.39 2.88-.4.98.01 1.97.14 2.89.4 2.2-1.53 3.17-1.21 3.17-1.21.64 1.65.24 2.87.12 3.17.74.83 1.2 1.89 1.2 3.18 0 4.52-2.69 5.52-5.25 5.81.42.37.79 1.1.79 2.22v3.29c0 .32.21.7.81.58A11.27 11.27 0 0 0 23.25 12C23.25 5.62 18.27.5 12 .5z"
      />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5C3.88 3.5 3 4.38 3 5.47c0 1.08.88 1.97 1.98 1.97h.02C6.1 7.44 7 6.55 7 5.47 7 4.38 6.1 3.5 5 3.5h-.02zM3.5 21h3V9h-3v12zM9 9h2.9v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V21H9V9z"
      />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  );
}

function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2c-3.31 0-6 2.69-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 5.5 12 5.5s2.5 1.12 2.5 2.5S13.38 10.5 12 10.5z"
      />
    </svg>
  );
}

export default function Sidebar({ navItems, activeId }) {
  return (
    <aside className="sidebar">
      {/* Fixed top: profile picture (does NOT scroll) */}
      <div className="sidebar-top">
        <img
          className="profile-photo"
          src="/me.jpg"
          alt="Portrait of Rasmus Burkarl Pedersen"
        />
      </div>

      {/* Everything below scrolls when needed */}
      <div className="sidebar-scroll">
        <nav className="side-nav">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={isActive ? "active" : ""}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="sidebar-divider" />

        <div className="contact-list">
          <a
            className="contact-link"
            href="https://github.com/Rpede22"
            target="_blank"
            rel="noreferrer"
          >
            <IconGitHub className="contact-icon" />
            <span>GitHub</span>
          </a>

          <a
            className="contact-link"
            href="https://www.linkedin.com/in/rasmus-burkarl-pedersen/"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedIn className="contact-icon" />
            <span>LinkedIn</span>
          </a>

          <a className="contact-link" href="mailto:burkarl@outlook.dk">
            <IconMail className="contact-icon" />
            <span>burkarl@outlook.dk</span>
          </a>
        </div>

        <div className="sidebar-spacer" />

        <div className="location">
          <IconPin className="location-pin" />
          <span>Aarhus, Denmark</span>
        </div>
      </div>
    </aside>
  );
}
