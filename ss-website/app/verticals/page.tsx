import React from "react";
import Image from "next/image";

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
    <div className="verticals-page">
      {/* Verticals Hero */}
      <section className="verticals-hero" aria-labelledby="verticals-hero-title">
        <div className="verticals-hero__content">
          <div className="verticals-hero__text">
            <p className="verticals-page__label">Technical Domains</p>
            <h1 id="verticals-hero-title" className="verticals-hero__title">
              Specialized Divisions
            </h1>
            <p className="verticals-hero__copy">
              Silicon Society is organized into three core technical verticals, providing structured learning tracks, hands-on project labs, and specialized mentorship.
            </p>
          </div>
          <div className="verticals-hero__media">
            <Image
              className="verticals-hero__image"
              src="/processor-chip-circuit-board-with-copy-space-design_628331-1296.avif"
              alt="Silicon chip layout preview"
              width={640}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* Vertical Sections */}
      {verticalsData.map((vert) => (
        <section
          key={vert.id}
          id={vert.id}
          className={`verticals-section verticals-section--${vert.id}`}
          aria-labelledby={`${vert.id}-title`}
        >
          <div className="verticals-section__header">
            <p className="verticals-page__label">{vert.label}</p>
            <h2 id={`${vert.id}-title`} className="verticals-section__title">
              {vert.title}
            </h2>
            <p className="verticals-section__subtitle">
              {vert.subtitle}
            </p>
          </div>

          <div className="verticals-section__body">
            <p className="verticals-section__description">{vert.description}</p>
            
            <div className="verticals-section__focus">
              <h3 className="verticals-section__subheading">Core Focus Areas</h3>
              <div className="verticals-focus-list">
                {vert.focusAreas.map((area) => (
                  <div key={area} className="verticals-focus-list__item">
                    <span className="verticals-focus-list__marker" aria-hidden="true" />
                    <p className="verticals-focus-list__text">{area}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="verticals-section__tools">
              <h3 className="verticals-section__subheading">Tools & Technologies</h3>
              <div className="verticals-tools-grid">
                {vert.toolsAndTech.map((tool) => (
                  <span
                    key={tool}
                    className="verticals-tools-grid__badge"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
