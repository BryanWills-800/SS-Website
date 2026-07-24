import React from "react";
import Image from "next/image";

export default function JoinUsPage() {
  return (
    <div className="about-page">
      {/* Join Us Hero */}
      <section className="about-hero" aria-labelledby="join-hero-title">
        <div className="about-hero__content">
          <div className="about-hero__text">
            <p className="about-page__label">Recruitment & Membership</p>
            <h1 id="join-hero-title" className="about-hero__title">
              Join Silicon Society
            </h1>
            <p className="about-hero__copy">
              Become part of BITS Pilani&apos;s premier student organization dedicated to semiconductors, hardware architecture, embedded systems, and silicon research.
            </p>
          </div>
          <div className="about-hero__media">
            <Image
              className="about-hero__image"
              src="/processor-chip-circuit-board-with-copy-space-design_628331-1296.avif"
              alt="Circuit design lab"
              width={640}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section id="process" className="about-section about-section--mission" aria-labelledby="process-title">
        <div className="about-section__header">
          <p className="about-page__label">How to Apply</p>
          <h2 id="process-title" className="about-section__title">
            Recruitment Process
          </h2>
        </div>

        <div className="about-section__body">
          <div className="advisory-list">
            <div className="advisory-list__item">
              <span className="advisory-list__marker" aria-hidden="true" />
              <div>
                <h3 className="leader-card__name" style={{ fontSize: "1.1rem" }}>Step 1: Interest Form</h3>
                <p className="leader-card__domain" style={{ marginTop: "0.25rem" }}>
                  Fill out the online application form specifying your preferred technical vertical (Digital, Analog, or Research).
                </p>
              </div>
            </div>
            <div className="advisory-list__item">
              <span className="advisory-list__marker" aria-hidden="true" />
              <div>
                <h3 className="leader-card__name" style={{ fontSize: "1.1rem" }}>Step 2: Technical Taskround</h3>
                <p className="leader-card__domain" style={{ marginTop: "0.25rem" }}>
                  Solve a foundational problem set or mini-project based on logic design, circuit analysis, or basic programming depending on your chosen division.
                </p>
              </div>
            </div>
            <div className="advisory-list__item">
              <span className="advisory-list__marker" aria-hidden="true" />
              <div>
                <h3 className="leader-card__name" style={{ fontSize: "1.1rem" }}>Step 3: Peer Discussion & Interview</h3>
                <p className="leader-card__domain" style={{ marginTop: "0.25rem" }}>
                  A informal technical interview and interaction with domain leads to discuss your interests, project ideas, and enthusiasm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Info Section */}
      <section id="apply" className="about-section about-section--advisory" aria-labelledby="apply-title">
        <div className="about-section__header">
          <p className="about-page__label">Applications Open</p>
          <h2 id="apply-title" className="about-section__title">
            Ready to Build Hardware?
          </h2>
        </div>

        <div className="about-section__body">
          <p>
            Recruitment drives are held at the beginning of each semester. Whether you are a beginner eager to learn digital logic or an experienced student working on chip design, all interested BITSians are encouraged to apply!
          </p>
          <div style={{ marginTop: "2rem" }}>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noreferrer"
              className="leader-card__link"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.75rem",
                borderRadius: "0.5rem",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Fill Recruitment Interest Form →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
