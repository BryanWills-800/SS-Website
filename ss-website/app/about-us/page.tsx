import Image from "next/image";

const aboutHeroImage = "/processor-chip-circuit-board-with-copy-space-design_628331-1296.avif";

const leadership = [
  {
    name: "Lead Name",
    domain: "Semiconductor Devices",
    initials: "LN",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lead Name",
    domain: "Embedded Systems",
    initials: "LN",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lead Name",
    domain: "VLSI Design",
    initials: "LN",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lead Name",
    domain: "Signal Processing",
    initials: "LN",
    linkedin: "https://www.linkedin.com/",
  },
];

const advisors = [
  "Faculty advisors who guide the academic direction and technical depth of the society.",
  "Industry alumni who help translate campus learning into core engineering pipelines.",
  "Curriculum architects who review project tracks, workshops, and mentorship paths.",
];

export default function AboutUsPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <div className="about-hero__text">
            <h1 className="about-hero__title">About Us</h1>
            {/* <p className="about-page__label">The Vision & Network</p> */}
            <p className="about-hero__copy">
              Silicon Society exists to bridge the gap between academic theory and the core industry pipelines that shape modern electronics, semiconductors, embedded systems, and applied research.
            </p>
          </div>
          <div className="about-hero__media">
            <Image
              className="about-hero__image"
              src={aboutHeroImage}
              alt="Processor chip on a circuit board"
              width={640}
              height={420}
              priority
            />
          </div>
        </div>
      </section>

      <section className="about-section about-section--mission">
        <div className="about-section__header">
          <p className="about-page__label">The Mission</p>
          <h2 className="about-section__title">From classroom concepts to industry practice.</h2>
        </div>
        <div className="about-section__body">
          <p>
            The society anchors rigorous campus learning inside project-led,
            mentor-guided pathways. Members move from theory to hands-on work:
            reading specifications, building systems, reviewing designs, and
            understanding how technical decisions flow through real engineering
            teams.
          </p>
          <p>
            Our goal is to make core industry careers more visible, more
            approachable, and more achievable for students who want to build
            depth beyond coursework.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section__header">
          <p className="about-page__label">Leadership Team</p>
          <h2 className="about-section__title">Core leads across technical domains.</h2>
        </div>
        <div className="leadership-grid">
          {leadership.map((member) => (
            <article key={`${member.name}-${member.domain}`} className="leader-card">
              <div className="leader-card__headshot" aria-hidden="true">
                {member.initials}
              </div>
              <div className="leader-card__content">
                <h3 className="leader-card__name">{member.name}</h3>
                <p className="leader-card__domain">{member.domain}</p>
                <a
                  className="leader-card__link"
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn profile
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-section--advisory">
        <div className="about-section__header">
          <p className="about-page__label">Advisory Board</p>
          <h2 className="about-section__title">Faculty guidance, alumni perspective, stronger curriculum.</h2>
        </div>
        <div className="advisory-list">
          {advisors.map((item) => (
            <div key={item} className="advisory-list__item">
              <span className="advisory-list__marker" aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
