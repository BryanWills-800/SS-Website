import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    title: "Form Submission",
    description:
      "Submit the online application, indicating your preferred technical track — Digital or Analog.",
  },
  {
    id: "step-2",
    stepNumber: 2,
    title: "Orientation",
    description:
      "Join the orientation session to understand the program structure, expectations, and available resources.",
  },
  {
    id: "step-3",
    stepNumber: 3,
    title: "Task",
    description:
      "View YouTube lectures covering fundamental concepts needed for the society.",
  },
  {
    id: "step-4",
    stepNumber: 4,
    title: "Group Discussions",
    description:
      "Do GDs from your seniors relevent to the material that is provided in the task",
  },
];

function RecruitmentStepItem({ step }: { step: RecruitmentStep }) {
  return (
    <div className="join-us-steps__item">
      <span className="join-us-steps__marker" aria-hidden="true" />
      <div className="join-us-steps__content">
        <h3 className="join-us-steps__title">Step {step.stepNumber}: {step.title}</h3>
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

      {/* Learning Resources */}

      {false &&
        <section id="resources" className="join-us-section join-us-section--resources" aria-labelledby="resources-title">
          <div className="join-us-section__header">
            <p className="join-us-page__label">Learning Resources</p>
            <h2 id="resources-title" className="join-us-section__title">
              Supplementary Courses
            </h2>
          </div>
          <div className="join-us-section__body">
            <p className="join-us-section__description">
              Explore curated video courses to build a solid foundation in digital design, VLSI, and electronic devices.
            </p>
            <Link href="/learning-resources" className="join-us-button">
              View Courses →
            </Link>
          </div>
        </section>
      }
    </div>
  );
}
