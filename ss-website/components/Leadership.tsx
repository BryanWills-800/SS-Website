import Image from "next/image";

export type LeaderProfile = {
  name: string;
  role: string;
  initials: string;
  linkedin: string;
  /** path under /public, e.g. "/leaders/jane-doe.jpeg". Initials are shown until you add one. */
  photo?: string;
};

// Big outlined text that sits behind the section. Rows alternate in offset (see leadership.css).
const BACKDROP_ROW_TEXT = "Silicon Society Silicon Society";
const BACKDROP_ROWS = 20; // more than a desktop shows; extra rows are clipped, and fill tall mobile layouts

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="currentColor" />
      <circle cx="7" cy="7.2" r="1.7" fill="#fff" />
      <rect x="5.4" y="10" width="3.2" height="9" fill="#fff" />
      <path
        d="M10.6 10h3v1.3c.5-.9 1.6-1.5 2.9-1.5 2.4 0 3.5 1.5 3.5 4v5.2h-3.2v-4.6c0-1.2-.4-2-1.5-2s-1.6.8-1.6 2v4.6h-3.1z"
        fill="#fff"
      />
    </svg>
  );
}

function Profile({ leader }: { leader: LeaderProfile }) {
  return (
    <article className="profile">
      {leader.photo ? (
        <Image
          className="profile__photo"
          src={leader.photo}
          alt={leader.name}
          width={270}
          height={270}
        />
      ) : (
        <div className="profile__photo profile__photo--placeholder" aria-hidden="true">
          {leader.initials}
        </div>
      )}
      <p className="profile__role">{leader.role}</p>
      <h3 className="profile__name">{leader.name}</h3>
      <a
        className="profile__linkedin"
        href={leader.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label={`${leader.name} on LinkedIn`}
      >
        <LinkedInIcon />
      </a>
    </article>
  );
}

export default function Leadership({ leaders }: { leaders: LeaderProfile[] }) {
  return (
    <section id="leadership" className="leadership" aria-labelledby="leadership-title">
      <div className="leadership__backdrop" aria-hidden="true">
        {Array.from({ length: BACKDROP_ROWS }, (_, i) => (
          <span key={i} className="leadership__backdrop-row">
            {BACKDROP_ROW_TEXT}
          </span>
        ))}
      </div>

      <h2 id="leadership-title" className="leadership__title">
        Leadership
      </h2>

      <div className="leadership__card">
        <div className="leadership__grid">
          {leaders.map((leader, i) => (
            <Profile key={`${leader.name}-${i}`} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
