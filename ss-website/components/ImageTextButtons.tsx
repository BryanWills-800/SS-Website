"use client";

import Image from "next/image";
import { useState } from "react";

const pastProjects = [
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



export default function ImageTextButton() {
    const [selectedContent, setSelectedContent] = useState<string | null>(null);
    const [previewContent, setPreviewContent] = useState<string | null>(null);

    const activeContent = previewContent ?? selectedContent ?? "image";
    const selectedProject = pastProjects.find((p) => p.id === activeContent);
    const toggleSelectedContent = (projectId: string) => {
        setSelectedContent((current) => (current === projectId ? null : projectId));
    };

    return (
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 p-6">
            <div className="flex flex-col justify-center items-start space-y-2">
                <h2 className="mb-2 font-bold text-xl">
                    Select content
                </h2>

                {pastProjects.map((project) => (
                    <button
                        key={project.id}
                        type="button"
                        onClick={() => toggleSelectedContent(project.id)}
                        onMouseEnter={() => setPreviewContent(project.id)}
                        onMouseLeave={() => setPreviewContent(null)}
                        onFocus={() => setPreviewContent(project.id)}
                        onBlur={() => setPreviewContent(null)}
                        className={`px-4 py-2 rounded text-white transition-colors ${activeContent === project.id
                            ? "bg-green-600 font-semibold"
                            : "bg-green-500 hover:bg-green-600"
                            }`}
                    >
                        {project.title}
                    </button>
                ))}
            </div>

            {/* Right side - Dynamic Project Area */}
            <div className="flex justify-center items-center w-full aspect-[640/420]">
                {activeContent === "image" && (
                    <Image
                        src="/image_chip.avif"
                        loading="eager"
                        alt="RISC-V Core"
                        width={640}
                        height={420}
                        className="w-full h-full object-contain"
                    />
                )}

                {selectedProject && (
                    <div className="flex flex-col justify-center items-start p-6 border-2 border-red-500 w-full h-full">
                        <span className="font-medium text-zinc-500 text-xs uppercase tracking-wider">{selectedProject.metaText}</span>
                        <h3 className="mt-1 font-bold text-xl">{selectedProject.title}</h3>
                        <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-base">{selectedProject.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {selectedProject.tags.map((tag) => (
                                <span key={tag} className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 border border-zinc-200 dark:border-zinc-700 rounded text-xs">{tag}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}