import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import TagList from "@/components/ui/TagList";

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
    <article className="card flex flex-col">
      <div className="flex justify-between items-center w-full">
        <span className="copy-meta">{project.metaText}</span>
      </div>
      <h3 className="heading-card mt-2 text-xl">{project.title}</h3>
      <p className="copy-small mt-2">{project.description}</p>
      <TagList tags={project.tags} className="mt-4" />
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="page">
      <PageHero
        titleId="projects-hero-title"
        label="Innovation & Engineering"
        title="Our Projects"
        image={{ src: "/image_chip.avif", alt: "Processor chip design" }}
        imageLoading="eager"
      >
        Explore the hardware designs, embedded systems, silicon research, and digital core pipelines engineered by members of Silicon Society.
      </PageHero>

      <PageSection
        id="current"
        titleId="current-projects-title"
        label="Active Development"
        title="Current Projects"
        className="divider-bottom"
      >
        <div className="card-grid">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PageSection>

      <PageSection
        id="past"
        titleId="past-work-title"
        label="Archive & Milestones"
        title="Past Work"
        className="divider-top"
      >
        <div className="card-grid">
          {pastProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PageSection>
    </div>
  );
}
