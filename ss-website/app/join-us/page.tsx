import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";

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
    <div className="card flex gap-4">
      <span className="dot mt-2" aria-hidden="true" />
      <div className="min-w-0">
        <h3 className="heading-card">Step {step.stepNumber}: {step.title}</h3>
        <p className="copy-small mt-1">{step.description}</p>
      </div>
    </div>
  );
}

export default function JoinUsPage() {
  return (
    <div className="page">
      <PageHero
        titleId="join-hero-title"
        label="Recruitment & Membership"
        title="Join Silicon Society"
        image={{ src: "/image_chip.avif", alt: "Circuit design lab" }}
        imageLoading="eager"
      >
        Become part of BITS Pilani&apos;s premier student organization dedicated to semiconductors, hardware architecture, embedded systems, and silicon research.
      </PageHero>

      <PageSection
        id="process"
        titleId="process-title"
        label="How to Apply"
        title="Recruitment Process"
        className="divider-bottom"
      >
        <div className="stack">
          {recruitmentSteps.map((step) => (
            <RecruitmentStepItem key={step.id} step={step} />
          ))}
        </div>
      </PageSection>

      <PageSection
        id="apply"
        titleId="apply-title"
        label="Applications Open"
        title="Ready to Build Hardware?"
        className="divider-top"
      >
        <p>
          Recruitment drives are held at the beginning of each semester. Whether you are a beginner eager to learn digital logic or an experienced student working on chip design, all interested BITSians are encouraged to apply!
        </p>
        <div className="mt-6">
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Fill Recruitment Interest Form →
          </a>
        </div>
      </PageSection>

      {/* Learning Resources — hidden until /learning-resources exists */}
      {false && (
        <PageSection
          id="resources"
          titleId="resources-title"
          label="Learning Resources"
          title="Supplementary Courses"
        >
          <p>
            Explore curated video courses to build a solid foundation in digital design, VLSI, and electronic devices.
          </p>
          <Link href="/learning-resources" className="btn">
            View Courses →
          </Link>
        </PageSection>
      )}
    </div>
  );
}
