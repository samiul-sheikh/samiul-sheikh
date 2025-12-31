"use client";

import { Timeline } from "@/components/ui/timeline";

const experienceData = [
    {
        title: "2022 - Present",
        content: (
            <div className="bg-card p-6 rounded-[20px] border border-secondary">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-2xl">code</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white">Lead Developer</h4>
                        <p className="text-gray-400 text-sm">Blockdots, London</p>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Leading a team of developers to build cutting-edge web applications.
                    Architecting scalable solutions and implementing best practices for code quality and performance.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">React</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Next.js</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">TypeScript</span>
                </div>
            </div>
        ),
    },
    {
        title: "2021 - 2022",
        content: (
            <div className="bg-card p-6 rounded-[20px] border border-secondary">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-2xl">terminal</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white">Full Stack Web Developer</h4>
                        <p className="text-gray-400 text-sm">Parsons, The New School</p>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Developed and maintained full-stack applications using React, Node.js, and PostgreSQL.
                    Collaborated with design teams to implement responsive user interfaces.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Node.js</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">PostgreSQL</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">GraphQL</span>
                </div>
            </div>
        ),
    },
    {
        title: "2020 - 2021",
        content: (
            <div className="bg-card p-6 rounded-[20px] border border-secondary">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-2xl">palette</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white">UI Designer</h4>
                        <p className="text-gray-400 text-sm">House of Life, Leeds</p>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Created intuitive user interfaces and design systems.
                    Conducted user research and usability testing to improve product experience.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Figma</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Adobe XD</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Prototyping</span>
                </div>
            </div>
        ),
    },
    {
        title: "2018 - 2020",
        content: (
            <div className="bg-card p-6 rounded-[20px] border border-secondary">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-2xl">brush</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white">Junior Graphics Designer</h4>
                        <p className="text-gray-400 text-sm">Theme Junction, Bursa</p>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Designed marketing materials, social media graphics, and brand assets.
                    Collaborated with clients to deliver creative visual solutions.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Photoshop</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">Illustrator</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-primary text-xs font-medium">InDesign</span>
                </div>
            </div>
        ),
    },
];

export function ResumeSection() {
    return (
        <section id="resume" className="py-20 bg-[#050709] text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-primary">Work</span>{" "}
                        <span className="text-white">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A journey through my professional career, building digital products
                        and leading development teams.
                    </p>
                </div>

                <div className="relative w-full overflow-clip">
                    <Timeline data={experienceData} />
                </div>
            </div>
        </section>
    );
}
