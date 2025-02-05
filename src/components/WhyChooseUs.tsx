"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
    {
        title: "Collaborative Jamming",
        description:
            "Play and create music together in real time. Whether you're in a band, collaborating with producers, or just jamming with friends, our platform lets you sync and compose effortlessly.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Collaborative Jamming
            </div>
        ),
    },
    {
        title: "Real-Time Sound Sync",
        description:
            "Hear changes as they happen. Adjust your mix, fine-tune instruments, and collaborate remotely with live sound updates. No more waiting—experience music creation instantly.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] animate-[pulse_3s_infinite] flex items-center justify-center text-white">
                Real-Time Sound Sync
            </div>
        ),
    },
    {
        title: "Music Version Control",
        description:
            "Keep track of every edit, every take, and every mix. Our platform ensures that you're always working on the latest version of your project while preserving past edits, so you never lose a great idea.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Music Version Control
            </div>
        ),
    },
    {
        title: "Endless Creativity",
        description:
            "Never run out of inspiration! Access a vast library of samples, loops, and virtual instruments. Experiment with AI-generated compositions or collaborate with musicians worldwide to keep the creativity flowing.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Endless Creativity
            </div>
        ),
    },
    {
        title: "AI-Powered Music Suggestions",
        description:
            "Get AI-driven recommendations for melodies, chord progressions, and arrangements tailored to your style. Enhance your creativity with smart suggestions that fit your musical vision.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
                AI-Powered Music Suggestions
            </div>
        ),
    },
    {
        title: "Multi-Track Recording",
        description:
            "Record multiple instruments and vocals simultaneously with zero latency. Our platform allows seamless layer recording so you can build complex tracks with precision.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--rose-500))] flex items-center justify-center text-white">
                Multi-Track Recording
            </div>
        ),
    },
    {
        title: "Cloud-Based Storage",
        description:
            "Save and access your music projects from anywhere. Our cloud storage ensures that your files are secure, easily shareable, and always available when inspiration strikes.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
                Cloud-Based Storage
            </div>
        ),
    },
    {
        title: "Live Performance Mode",
        description:
            "Transform your music into a live experience with built-in tools for DJing, looping, and live remixing. Perform anywhere with real-time audio effects and controls.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--fuchsia-500),var(--violet-500))] animate-[pulse_2s_infinite] flex items-center justify-center text-white">
                Live Performance Mode
            </div>
        ),
    },
];
const WhyChooseUs = () => {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    );
};

export default WhyChooseUs;
