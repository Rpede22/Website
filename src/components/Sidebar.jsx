function IconGithub(props) {
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
        d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.48 1s2.5 1.12 2.5 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1.02 1.83-2.2 3.77-2.2C19.4 8 22 10.1 22 14.6V24h-4v-8.2c0-1.96-.04-4.48-2.73-4.48-2.73 0-3.15 2.13-3.15 4.34V24h-4V8Z"
      />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  );
}

export default function Sidebar({ navItems, activeId }) {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img className="profile-photo" src="/me.jpg" alt="Portrait" />
      </div>

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

      <div className="contact-list" aria-label="Contact links">
        <a
          className="contact-link"
          href="https://github.com/Rpede22"
          target="_blank"
          rel="noreferrer"
        >
          <IconGithub className="contact-icon" />
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
    </aside>
  );
}
