"use client";

import { CometCard } from "@/components/ui/comet-card";

const services = [
    {
        number: "01",
        icon: "terminal",
        title: "Web Development",
        description: "Building responsive, high-performance websites using modern frameworks like React, Next.js, and Vue.js with clean, maintainable code.",
        gradient: "from-blue-500 to-cyan-400",
    },
    {
        number: "02",
        icon: "smartphone",
        title: "Mobile App Development",
        description: "Creating cross-platform mobile applications using React Native and Flutter that deliver native-like experiences on iOS and Android.",
        gradient: "from-purple-500 to-pink-400",
    },
    {
        number: "03",
        icon: "database",
        title: "Backend Development",
        description: "Designing robust server-side solutions with Node.js, Python, and PostgreSQL, including RESTful APIs and GraphQL services.",
        gradient: "from-green-500 to-emerald-400",
    },
    {
        number: "04",
        icon: "cloud",
        title: "Cloud Solutions",
        description: "Deploying and managing applications on AWS, Google Cloud, and Azure with CI/CD pipelines and containerization using Docker.",
        gradient: "from-orange-500 to-amber-400",
    },
    {
        number: "05",
        icon: "speed",
        title: "Performance Optimization",
        description: "Analyzing and improving website performance, Core Web Vitals, SEO optimization, and delivering lightning-fast user experiences.",
        gradient: "from-red-500 to-rose-400",
    },
    {
        number: "06",
        icon: "security",
        title: "Security & DevOps",
        description: "Implementing secure authentication, encryption, and automated testing pipelines to ensure robust and reliable applications.",
        gradient: "from-indigo-500 to-violet-400",
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-[#050709]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-primary">My Quality</span>{" "}
                        <span className="text-white">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Transforming ideas into powerful digital experiences with cutting-edge
                        technology and pixel-perfect attention to detail.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service) => (
                        <CometCard key={service.number} rotateDepth={12} translateDepth={15}>
                            <div className="group relative p-8 rounded-[20px] bg-card border border-secondary h-full min-h-[280px] flex flex-col">
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="flex flex-col gap-5 relative z-10">
                                    {/* Header with number and icon */}
                                    <div className="flex justify-between items-start">
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-bold text-lg`}>
                                            {service.number}
                                        </span>
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                                            <span className="material-symbols-outlined text-white text-2xl">
                                                {service.icon}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Bottom link */}
                                    <div className="pt-4 border-t border-gray-800">
                                        <span className="inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-primary transition-colors cursor-pointer">
                                            Learn more
                                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                                arrow_forward
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CometCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
