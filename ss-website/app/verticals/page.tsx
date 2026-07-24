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
    <div className="about-page">
      {/* Verticals Hero */}
      <section className="about-hero" aria-labelledby="verticals-hero-title">
        <div className="about-hero__content">
          <div className="about-hero__text">
            <p className="about-page__label">Technical Domains</p>
            <h1 id="verticals-hero-title" className="about-hero__title">
              Specialized Divisions
            </h1>
            <p className="about-hero__copy">
              Silicon Society is organized into three core technical verticals, providing structured learning tracks, hands-on project labs, and specialized mentorship.
            </p>
          </div>
          <div className="about-hero__media">
            <Image
              className="about-hero__image"
              src="/processor-chip-circuit-board-with-copy-space-design_628331-1296.avif"
              alt="Silicon chip layout preview"
              width={640}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* Vertical Sections */}
      {verticalsData.map((vert, idx) => (
        <section
          key={vert.id}
          id={vert.id}
          className={`about-section ${idx !== 0 ? "about-section--advisory" : "about-section--mission"}`}
          aria-labelledby={`${vert.id}-title`}
        >
          <div className="about-section__header">
            <p className="about-page__label">{vert.label}</p>
            <h2 id={`${vert.id}-title`} className="about-section__title">
              {vert.title}
            </h2>
            <p className="leader-card__domain" style={{ marginTop: "0.5rem", fontWeight: 600 }}>
              {vert.subtitle}
            </p>
          </div>

          <div className="about-section__body">
            <p>{vert.description}</p>
            
            <div style={{ marginTop: "1.5rem" }}>
              <h3 className="site-footer__heading" style={{ marginBottom: "0.75rem" }}>Core Focus Areas</h3>
              <div className="advisory-list">
                {vert.focusAreas.map((area) => (
                  <div key={area} className="advisory-list__item" style={{ padding: "0.75rem 1rem" }}>
                    <span className="advisory-list__marker" aria-hidden="true" />
                    <p style={{ margin: 0, fontSize: "0.95rem" }}>{area}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 className="site-footer__heading" style={{ marginBottom: "0.75rem" }}>Tools & Technologies</h3>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {vert.toolsAndTech.map((tool) => (
                  <span
                    key={tool}
                    className="site-nav__link"
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.85rem",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      background: "rgba(255, 255, 255, 0.05)",
                    }}
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
