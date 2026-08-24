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
    title: "Step 2: Technical Task Round",
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
    <div className="join-us-steps__item">
      <span className="join-us-steps__marker" aria-hidden="true" />
      <div className="join-us-steps__content">
        <h3 className="join-us-steps__title">{step.title}</h3>
        <p className="join-us-steps__description">{step.description}</p>
      </div>
    </div>
  );
}

export default function joinUsPage() {
  return (
    <div className="join-us-page">
      {/* Join Us Hero */}
      <section className="join-us-hero" aria-labelledby="join-hero-title">
        <div className="join-us-hero__content">
          <div className="join-us-hero__text">
            <p className="join-us-page__label">Recruitment & Membership</p>
            <h1 id="join-hero-title" className="join-us-hero__title">
              Join Silicon Society
            </h1>
            <p className="join-us-hero__copy">
              Become part of BITS Pilani&apos;s premier student organization dedicated to semiconductors, hardware architecture, embedded systems, and silicon research.
            </p>
          </div>
          <div className="join-us-hero__media">
            <Image
              className="join-us-hero__image"
              src="/image_chip.avif"
              loading="eager"
              alt="Circuit design lab"
              width={640}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section id="process" className="join-us-section join-us-section--process" aria-labelledby="process-title">
        <div className="join-us-section__header">
          <p className="join-us-page__label">How to Apply</p>
          <h2 id="process-title" className="join-us-section__title">
            Recruitment Process
          </h2>
        </div>

        <div className="join-us-section__body">
          <div className="join-us-steps">
            {recruitmentSteps.map((step) => (
              <RecruitmentStepItem key={step.id} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Info Section */}
      <section id="apply" className="join-us-section join-us-section--apply" aria-labelledby="apply-title">
        <div className="join-us-section__header">
          <p className="join-us-page__label">Applications Open</p>
          <h2 id="apply-title" className="join-us-section__title">
            Ready to Build Hardware?
          </h2>
        </div>

        <div className="join-us-section__body">
          <p className="join-us-section__description">
            Recruitment drives are held at the beginning of each semester. Whether you are a beginner eager to learn digital logic or an experienced student working on chip design, all interested BITSians are encouraged to apply!
          </p>
          <div className="join-us-section__cta">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noreferrer"
              className="join-us-button"
            >
              Fill Recruitment Interest Form →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
