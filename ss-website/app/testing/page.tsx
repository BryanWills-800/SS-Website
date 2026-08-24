import TestImageTextButtons, { type TestImageTextButtonsItem } from "@/components/TestImageTextButtons";

const demoItems: TestImageTextButtonsItem[] = [
    {
        id: "custom-dsp",
        buttonLabel: "Fixed-Point Audio DSP Unit",
        title: "Fixed-Point Audio DSP Unit",
        description:
            "Hardware accelerator for digital signal processing algorithms including 1024-point FFT and FIR audio filters implemented on Xilinx Artix-7.",
        tags: ["DSP", "FPGA", "Xilinx", "MATLAB"],
        metaText: "Digital Division • Fall 2025",
    },
    {
        id: "low-noise-amp",
        buttonLabel: "2.4GHz CMOS Low-Noise Amplifier (LNA)",
        title: "2.4GHz CMOS Low-Noise Amplifier (LNA)",
        description:
            "Custom schematic design and parasitic layout extraction for a 2.4GHz RF LNA in 180nm CMOS technology targeting low noise figure and high gain.",
        tags: ["Cadence Virtuoso", "CMOS", "RF IC", "Analog Layout"],
        metaText: "Analog Division • Summer 2025",
    },
    {
        id: "autonomous-rover-controller",
        buttonLabel: "Real-Time Embedded Controller for Autonomous Rover",
        title: "Real-Time Embedded Controller for Autonomous Rover",
        description:
            "Dual-core RTOS microcontroller system orchestrating motor control, CAN-bus telemetry, and obstacle avoidance sensor fusion.",
        tags: ["FreeRTOS", "C++", "CAN Bus", "Sensor Fusion"],
        metaText: "Embedded Systems • Spring 2025",
    },
];

export default function Testing() {
    return (
        <div className="bg-zinc-450 min-h-screen">
            <TestImageTextButtons items={demoItems} />
            <TestImageTextButtons items={demoItems} />
            <TestImageTextButtons items={demoItems} />
            <TestImageTextButtons items={demoItems} />
            <TestImageTextButtons items={demoItems} />
        </div>
    );
}