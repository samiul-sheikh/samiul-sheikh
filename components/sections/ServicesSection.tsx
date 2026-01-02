"use client";

import { CometCard } from "@/components/ui/comet-card";
import {
    Code2,
    Database,
    Globe,
    Plug,
    Zap,
    ShieldCheck,
} from "lucide-react";

const services = [
    {
        number: "01",
        icon: Code2,
        title: "Frontend Development",
        description:
            "Building responsive and high-performance websites using modern frameworks like React and Next.js.",
        gradient: "from-blue-500 to-cyan-400",
    },
    {
        number: "02",
        icon: Database,
        title: "Backend Development",
        description:
            "Developing secure and scalable server-side applications with well-structured APIs, databases, and business logic.",
        gradient: "from-green-500 to-emerald-400",
    },
    {
        number: "03",
        icon: Globe,
        title: "WordPress Development",
        description:
            "Creating fast and SEO-friendly WordPress websites with custom themes, plugins, and flexible content management.",
        gradient: "from-purple-500 to-pink-400",
    },
    {
        number: "04",
        icon: Plug,
        title: "API Integration",
        description:
            "Integrating third-party and custom APIs using REST and GraphQL for secure and seamless system communication.",
        gradient: "from-orange-500 to-amber-400",
    },
    {
        number: "05",
        icon: Zap,
        title: "Performance Optimization",
        description:
            "Optimizing website speed, Core Web Vitals, SEO performance, and overall user experience across all devices.",
        gradient: "from-red-500 to-rose-400",
    },
    {
        number: "06",
        icon: ShieldCheck,
        title: "Security & DevOps",
        description:
            "Applying security best practices, authentication, and reliable deployment workflows.",
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
                                        <div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                                        >
                                            <service.icon size={22} className="text-white" />
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
