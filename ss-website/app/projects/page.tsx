import React from "react";
import Image from "next/image";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metaText: string;
}

const currentProjects: ProjectItem[] = [
  {
    id: "riscv-core",
    title: "32-Bit RISC-V Processor Core",
    category: "Digital Division",
    description:
      "Design and implementation of a 5-stage pipelined 32-bit RISC-V RV32I core with hazard detection, branch prediction, and synthesizable Verilog modules.",
    tags: ["Verilog", "FPGA", "RISC-V", "SystemVerilog"],
    metaText: "Digital Division • In Progress",
  },
  {
    id: "smart-embedded-node",
    title: "IoT Environmental Sensing Node",
    category: "Analog & Embedded",
    description:
      "Ultra-low power wireless sensor node utilizing custom PCB design, sub-GHz transceiver, and precision analog front-end for ambient monitoring.",
    tags: ["PCB Design", "KiCad", "Embedded C", "STM32"],
    metaText: "Analog & Embedded • In Progress",
  },
  {
    id: "neuromorphic-sim",
    title: "Spiking Neural Network Hardware Accelerator",
    category: "Research Division",
    description:
      "Simulating bio-inspired spike-timing-dependent plasticity (STDP) mechanisms targeting neuromorphic hardware substrates.",
    tags: ["Python", "PyTorch", "Neuromorphic", "FPGA"],
    metaText: "Research Division • Active Research",
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
    metaText: "Digital Division • Fall 2025",
  },
  {
    id: "low-noise-amp",
    title: "2.4GHz CMOS Low-Noise Amplifier (LNA)",
    category: "Analog Division",
    description:
      "Custom schematic design and parasitic layout extraction for a 2.4GHz RF LNA in 180nm CMOS technology targeting low noise figure and high gain.",
    tags: ["Cadence Virtuoso", "CMOS", "RF IC", "Analog Layout"],
    metaText: "Analog Division • Summer 2025",
  },
  {
    id: "autonomous-rover-controller",
    title: "Real-Time Embedded Controller for Autonomous Rover",
    category: "Embedded Systems",
    description:
      "Dual-core RTOS microcontroller system orchestrating motor control, CAN-bus telemetry, and obstacle avoidance sensor fusion.",
    tags: ["FreeRTOS", "C++", "CAN Bus", "Sensor Fusion"],
    metaText: "Embedded Systems • Spring 2025",
  },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span className="project-card__category">{project.metaText}</span>
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card__tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      {/* Projects Hero */}
      <section className="projects-hero" aria-labelledby="projects-hero-title">
        <div className="projects-hero__content">
          <div className="projects-hero__text">
            <p className="projects-page__label">Innovation & Engineering</p>
            <h1 id="projects-hero-title" className="projects-hero__title">
              Our Projects
            </h1>
            <p className="projects-hero__copy">
              Explore the hardware designs, embedded systems, silicon research, and digital core pipelines engineered by members of Silicon Society.
            </p>
          </div>
          <div className="projects-hero__media">
            <Image
              className="projects-hero__image"
              src="/image_chip.avif"
              loading="eager"
              alt="Processor chip design"
              width={640}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="current" className="projects-section projects-section--current" aria-labelledby="current-projects-title">
        <div className="projects-section__header">
          <p className="projects-page__label">Active Development</p>
          <h2 id="current-projects-title" className="projects-section__title">
            Current Projects
          </h2>
        </div>

        <div className="projects-section__body">
          <div className="projects-grid">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Work Section */}
      <section id="past" className="projects-section projects-section--past" aria-labelledby="past-work-title">
        <div className="projects-section__header">
          <p className="projects-page__label">Archive & Milestones</p>
          <h2 id="past-work-title" className="projects-section__title">
            Past Work
          </h2>
        </div>

        <div className="projects-section__body">
          <div className="projects-grid">
            {pastProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
