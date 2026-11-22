import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import TagList from "@/components/ui/TagList";

interface VerticalInfo {
  id: string;
  title: string;
  subtitle: string;
  label: string;
  description: string;
  focusAreas: string[];
  toolsAndTech: string[];
}

const verticalsData: VerticalInfo[] = [
  {
    id: "digital",
    title: "Digital Division",
    subtitle: "RTL Design, Computer Architecture, & Digital ICs",
    label: "Core Architecture",
    description:
      "The Digital Division focuses on logic synthesis, processor architectures, hardware description languages (Verilog/SystemVerilog), and FPGA prototyping. Members build custom ISA pipelines, memory controllers, and digital acceleration modules.",
    focusAreas: [
      "RISC-V & Custom Architecture Design",
      "RTL Synthesis & Static Timing Analysis (STA)",
      "FPGA Prototyping (Xilinx / Vivado)",
      "SystemVerilog Verification & UVM Frameworks",
    ],
    toolsAndTech: ["Verilog", "SystemVerilog", "Vivado", "ModelSim", "Yosys", "RISC-V"],
  },
  {
    id: "analog",
    title: "Analog Division",
    subtitle: "Mixed-Signal Circuits, RF Engineering, & PCB Layout",
    label: "Silicon & Signals",
    description:
      "The Analog Division works at the transistor level and board level. From designing low-noise amplifiers and data converters (ADC/DAC) to multi-layer high-speed PCB layouts, this division bridges physical phenomena with electronic processing.",
    focusAreas: [
      "Transistor-level Circuit Simulation & Biasing",
      "RF Front-End Amplifiers & Filters",
      "High-Speed PCB Schematic & Layout Design",
      "Power Management ICs (PMIC) & Voltage Regulators",
    ],
    toolsAndTech: ["Cadence Virtuoso", "LTspice", "KiCad", "Spectre", "Altium Designer"],
  },
  {
    id: "research",
    title: "Research Division",
    subtitle: "Emerging Semiconductor Tech & Applied Science",
    label: "Frontier Science",
    description:
      "The Research Division investigates next-generation hardware paradigms, including neuromorphic compute, bio-inspired chips, quantum computing interfaces, and photonics. We publish papers, explore open-source EDA tools, and collaborate with academic labs.",
    focusAreas: [
      "Neuromorphic Computing & Spiking Neural Nets",
      "Open-Source EDA & SkyWater 130nm PDK Workflows",
      "Hardware Security & Side-Channel Analysis",
      "Edge AI Hardware Accelerators",
    ],
    toolsAndTech: ["Python", "OpenLane", "SkyWater PDK", "PyTorch", "GDSIITools"],
  },
];

export default function VerticalsPage() {
  return (
    <div className="page">
      <PageHero
        titleId="verticals-hero-title"
        label="Technical Domains"
        title="Specialized Divisions"
        image={{ src: "/image_chip.avif", alt: "Silicon chip layout preview" }}
        imageLoading="eager"
      >
        Silicon Society is organized into three core technical verticals, providing structured learning tracks, hands-on project labs, and specialized mentorship.
      </PageHero>

      {verticalsData.map((vert) => (
        <PageSection
          key={vert.id}
          id={vert.id}
          titleId={`${vert.id}-title`}
          label={vert.label}
          title={vert.title}
          subtitle={vert.subtitle}
          className="divider-bottom"
          bodyClassName="space-y-6"
        >
          <p>{vert.description}</p>

          <div className="mt-4">
            <h3 className="heading-mini mb-3">Core Focus Areas</h3>
            <div className="gap-3 grid">
              {vert.focusAreas.map((area) => (
                <div key={area} className="card card--compact flex gap-3">
                  <span className="dot dot--sm mt-1.5" aria-hidden="true" />
                  <p className="copy-small">{area}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="heading-mini mb-3">Tools & Technologies</h3>
            <TagList tags={vert.toolsAndTech} size="lg" />
          </div>
        </PageSection>
      ))}
    </div>
  );
}
