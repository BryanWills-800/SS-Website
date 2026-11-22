import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import Leadership, { type LeaderProfile } from "@/components/Leadership";

const aboutHeroImage = "/image_chip.avif";

// Add a `photo` (e.g. "/leaders/lead-name.jpeg", file in /public) to replace the initials.
const leadership: LeaderProfile[] = [
  {
    name: "Lead Name",
    role: "Semiconductor Devices",
    initials: "LN",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lead Name",
    role: "Embedded Systems",
    initials: "LN",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lead Name",
    role: "VLSI Design",
    initials: "LN",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lead Name",
    role: "Signal Processing",
    initials: "LN",
    linkedin: "https://www.linkedin.com/",
  },
];

const advisors = [
  "Faculty advisors who guide the academic direction and technical depth of the society.",
  "Industry alumni who help translate campus learning into core engineering pipelines.",
  "Curriculum architects who review project tracks, workshops, and mentorship paths.",
];

export default function AboutUs() {
  return (
    <section id="about-us" className="page" aria-labelledby="about-us-title">
      <PageHero
        as="div"
        headingLevel="h2"
        tall
        titleId="about-us-title"
        title="About Us"
        image={{ src: aboutHeroImage, alt: "Processor chip on a circuit board" }}
      >
        Silicon Society BITS Pilani is a student-led community focused on technology, design, and innovation in the field of semiconductors and hardware systems.
        We aim to cultivate a culture of exploration, collaboration, and technical excellence by providing students with a platform to learn, build, and innovate beyond the boundaries of academic coursework.
        Through workshops, technical sessions, hands-on projects, and industry-oriented initiatives, we encourage students to engage with emerging technologies and develop practical skills in hardware design and innovation.
      </PageHero>

      {/* mx-auto centres these sections; the other pages' sections sit left-aligned */}
      <PageSection
        id="mission"
        titleId="mission-title"
        label="The Mission"
        title="From classroom concepts to industry practice."
        className="divider-bottom mx-auto"
      >
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
      </PageSection>

      <Leadership leaders={leadership} />

      <PageSection
        id="advisory"
        titleId="advisory-title"
        label="Advisory Board"
        title="Faculty guidance, alumni perspective, stronger curriculum."
        className="divider-top mx-auto"
      >
        <div className="stack">
          {advisors.map((item) => (
            <div key={item} className="card copy-body flex gap-4">
              <span className="dot mt-2" aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </section>
  );
}
