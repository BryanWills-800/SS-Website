import React from "react";
import Image from "next/image";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: "In Progress" | "Completed" | "Active Research";
  date: string;
}

const currentProjects: ProjectItem[] = [
  {
    id: "riscv-core",
    title: "32-Bit RISC-V Processor Core",
    category: "Digital Division",
    description:
      "Design and implementation of a 5-stage pipelined 32-bit RISC-V RV32I core with hazard detection, branch prediction, and synthesizable Verilog modules.",
    tags: ["Verilog", "FPGA", "RISC-V", "SystemVerilog"],
    status: "In Progress",
    date: "Spring 2026",
  },
  {
    id: "smart-embedded-node",
    title: "IoT Environmental Sensing Node",
    category: "Analog & Embedded",
    description:
      "Ultra-low power wireless sensor node utilizing custom PCB design, sub-GHz transceiver, and precision analog front-end for ambient monitoring.",
    tags: ["PCB Design", "KiCad", "Embedded C", "STM32"],
    status: "In Progress",
    date: "Spring 2026",
  },
  {
    id: "neuromorphic-sim",
    title: "Spiking Neural Network Hardware Accelerator",
    category: "Research Division",
    description:
      "Simulating bio-inspired spike-timing-dependent plasticity (STDP) mechanisms targeting neuromorphic hardware substrates.",
    tags: ["Python", "PyTorch", "Neuromorphic", "FPGA"],
    status: "Active Research",
    date: "Winter 2025 - Present",
  },
];

const pastProjects: ProjectItem[] = [
  {
    id: "custom-dsp",
    title: "Fixed-Point Audio DSP Unit",
    category: "Digital Division",
    description:
      "Hardware accelerator for digital signal processing algorithms including 1024-point FFT and FIR audio filters implemented on Xilinx Artix-7.",
    tags: ["DSP", "FPGA", "Xilinx", "MATLAB"],
    status: "Completed",
    date: "Fall 2025",
  },
  {
    id: "low-noise-amp",
    title: "2.4GHz CMOS Low-Noise Amplifier (LNA)",
    category: "Analog Division",
    description:
      "Custom schematic design and parasitic layout extraction for a 2.4GHz RF LNA in 180nm CMOS technology targeting low noise figure and high gain.",
    tags: ["Cadence Virtuoso", "CMOS", "RF IC", "Analog Layout"],
    status: "Completed",
    date: "Summer 2025",
  },
  {
    id: "autonomous-rover-controller",
    title: "Real-Time Embedded Controller for Autonomous Rover",
    category: "Embedded Systems",
    description:
      "Dual-core RTOS microcontroller system orchestrating motor control, CAN-bus telemetry, and obstacle avoidance sensor fusion.",
    tags: ["FreeRTOS", "C++", "CAN Bus", "Sensor Fusion"],
    status: "Completed",
    date: "Spring 2025",
  },
];

export default function ProjectsPage() {
  return (
    <div className="about-page">
      {/* Projects Hero */}
      <section className="about-hero" aria-labelledby="projects-hero-title">
        <div className="about-hero__content">
          <div className="about-hero__text">
            <p className="about-page__label">Innovation & Engineering</p>
            <h1 id="projects-hero-title" className="about-hero__title">
              Our Projects
            </h1>
            <p className="about-hero__copy">
              Explore the hardware designs, embedded systems, silicon research, and digital core pipelines engineered by members of Silicon Society.
            </p>
          </div>
          <div className="about-hero__media">
            <Image
              className="about-hero__image"
              src="/processor-chip-circuit-board-with-copy-space-design_628331-1296.avif"
              alt="Processor chip design"
              width={640}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="current" className="about-section about-section--mission" aria-labelledby="current-projects-title">
        <div className="about-section__header">
          <p className="about-page__label">Active Development</p>
          <h2 id="current-projects-title" className="about-section__title">
            Current Projects
          </h2>
        </div>

        <div className="about-section__body">
          <div className="leadership-grid">
            {currentProjects.map((project) => (
              <article key={project.id} className="leader-card" style={{ flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                  <span className="home-newsbulletin__item__date">{project.category} • {project.status}</span>
                </div>
                <h3 className="leader-card__name" style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
                  {project.title}
                </h3>
                <p className="leader-card__domain">{project.description}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="site-nav__link"
                      style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: "0.375rem",
                        fontSize: "0.75rem",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        background: "rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past Work Section */}
      <section id="past" className="about-section about-section--advisory" aria-labelledby="past-work-title">
        <div className="about-section__header">
          <p className="about-page__label">Archive & Milestones</p>
          <h2 id="past-work-title" className="about-section__title">
            Past Work
          </h2>
        </div>

        <div className="about-section__body">
          <div className="leadership-grid">
            {pastProjects.map((project) => (
              <article key={project.id} className="leader-card" style={{ flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                  <span className="home-newsbulletin__item__date">{project.category} • {project.date}</span>
                </div>
                <h3 className="leader-card__name" style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>
                  {project.title}
                </h3>
                <p className="leader-card__domain">{project.description}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="site-nav__link"
                      style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: "0.375rem",
                        fontSize: "0.75rem",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        background: "rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
