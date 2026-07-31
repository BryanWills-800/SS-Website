import React from "react";
import Image from "next/image";

interface RecruitmentStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
}

const recruitmentSteps: RecruitmentStep[] = [
  {
    id: "step-1",
    stepNumber: 1,
    title: "Step 1: Interest Form",
    description:
      "Fill out the online application form specifying your preferred technical vertical (Digital, Analog, or Research).",
  },
  {
    id: "step-2",
    stepNumber: 2,
    title: "Step 2: Technical Taskround",
    description:
      "Solve a foundational problem set or mini-project based on logic design, circuit analysis, or basic programming depending on your chosen division.",
  },
  {
    id: "step-3",
    stepNumber: 3,
    title: "Step 3: Peer Discussion & Interview",
    description:
      "A informal technical interview and interaction with domain leads to discuss your interests, project ideas, and enthusiasm.",
  },
];

function RecruitmentStepItem({ step }: { step: RecruitmentStep }) {
  return (
    <div className="joinus-steps__item">
      <span className="joinus-steps__marker" aria-hidden="true" />
      <div className="joinus-steps__content">
        <h3 className="joinus-steps__title">{step.title}</h3>
        <p className="joinus-steps__description">{step.description}</p>
      </div>
    </div>
  );
}

export default function JoinUsPage() {
  return (
    <div className="joinus-page">
      {/* Join Us Hero */}
      <section className="joinus-hero" aria-labelledby="join-hero-title">
        <div className="joinus-hero__content">
          <div className="joinus-hero__text">
            <p className="joinus-page__label">Recruitment & Membership</p>
            <h1 id="join-hero-title" className="joinus-hero__title">
              Join Silicon Society
            </h1>
            <p className="joinus-hero__copy">
              Become part of BITS Pilani&apos;s premier student organization dedicated to semiconductors, hardware architecture, embedded systems, and silicon research.
            </p>
          </div>
          <div className="joinus-hero__media">
            <Image
              className="joinus-hero__image"
              src="/processor-chip-circuit-board-with-copy-space-design_628331-1296.avif"
              alt="Circuit design lab"
              width={640}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section id="process" className="joinus-section joinus-section--process" aria-labelledby="process-title">
        <div className="joinus-section__header">
          <p className="joinus-page__label">How to Apply</p>
          <h2 id="process-title" className="joinus-section__title">
            Recruitment Process
          </h2>
        </div>

        <div className="joinus-section__body">
          <div className="joinus-steps">
            {recruitmentSteps.map((step) => (
              <RecruitmentStepItem key={step.id} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Info Section */}
      <section id="apply" className="joinus-section joinus-section--apply" aria-labelledby="apply-title">
        <div className="joinus-section__header">
          <p className="joinus-page__label">Applications Open</p>
          <h2 id="apply-title" className="joinus-section__title">
            Ready to Build Hardware?
          </h2>
        </div>

        <div className="joinus-section__body">
          <p className="joinus-section__description">
            Recruitment drives are held at the beginning of each semester. Whether you are a beginner eager to learn digital logic or an experienced student working on chip design, all interested BITSians are encouraged to apply!
          </p>
          <div className="joinus-section__cta">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noreferrer"
              className="joinus-button"
            >
              Fill Recruitment Interest Form →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
