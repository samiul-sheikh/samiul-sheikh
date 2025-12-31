import Image from "next/image";
import Link from "next/link";

const works = [
    {
        category: "Ecommerce",
        title: "Eshoppper",
        description: "Premium e-commerce web application. Design user related all pages. Web Technologies (TypeScript, Tailwind CSS, Framer motion, React JS, Redux Toolkit, RTK Query",
        image: "https://drive.google.com/uc?export=view&id=1c_L6huRrabGINOymfzDIgGD094TAV0OG",
        liveUrl: "https://eshoppers-bd.onrender.com",
        tags: ["Branding", "Graphic Design", "User Stories"],
        features: [
            "We provide the most reasonable.",
            "Finish Work Before Deadline.",
            "The certified materials in a timely.",
        ],
        imageFirst: false,
    },
    {
        category: "Service",
        title: "Compass Architects",
        description: "Architecture firm official website developed with Wordpress CMS and necessary plugins.",
        image: "https://drive.google.com/uc?export=view&id=1loICxdox4aP-WTUrU6tZ4tj0y1CFyGaM",
        tags: ["Wordpress"],
        liveUrl: "https://compassarchi.com/",
        features: [
            "We provide the most reasonable.",
            "Finish Work Before Deadline.",
            "The certified materials in a timely.",
        ],
        imageFirst: true,
    },
    // {
    //     category: "Apps",
    //     title: "Sebastian",
    //     description: "Project was about precision and information. That's all. Our design team helps clients achieve their marketing target and branding that appeals to a website.",
    //     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNopkpkTWbSN0c0U1Ox1JpN76gGVM-AW5Ar_QIVCykivqQq2SUcpkXIVW_hH0XXHbt_S-Qu_qOGoQ6PXxqvYSrwsebb3mXkZf3AtXbCtD8oKCasp6AH7guxLWp3hqUfG_pZMtSHwi4mQeO-3l5qMREBWgBeygUAvk53Ygi-cLPfx4FaU1MdCpKVvxj_V8NsMNCCVhMkHjpTqHIwq9-LlERNySyF4W7tPr5IcaeYeCwRLWY0BBwaPXR5FdnfJ9IIuDjU--Z8hhrDb0",
    //     tags: ["Dashboard", "Development", "User Stories"],
    //     features: [
    //         "We provide the most reasonable.",
    //         "Finish Work Before Deadline.",
    //         "The certified materials in a timely.",
    //     ],
    //     imageFirst: false,
    // },
    // {
    //     category: "Branding",
    //     title: "Mochnix",
    //     description: "Project was about precision and information. That's all. Our design team helps clients achieve their marketing target and branding that appeals to a website.",
    //     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7s80H78vLkU7_hJV_MrBYcvWAYS2e8AsytKNdtAsDsD3KIWnDpoZFLx--WlTvecWNMDL2CjoE6KLWx0WbFbQI7-snupy3xCmXbupCzfNmgBNnzCT0KNu07wt51MkhRARSu9ssHatslVgVlXTmLz8KA3xGUgHI35ONnSDpjOfvY1ZBTayq_Vh68nPCuXaiqdahb0vS-HCA_9qwOVcW-ZL5UNFyYH5IzvETpsJg2b4kjrOhcPdnhehVa_LKvmFduQlISQseQ2ezATs",
    //     tags: ["Illustration", "IOS", "User Stories"],
    //     features: [
    //         "We provide the most reasonable.",
    //         "Finish Work Before Deadline.",
    //         "The certified materials in a timely.",
    //     ],
    //     imageFirst: true,
    // },
];

export function WorksSection() {
    return (
        <section id="works" className="py-20 bg-[#050709]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-primary">My Recent</span>{" "}
                        <span className="text-white">Works</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We put your ideas and thus your wishes in the form of a unique web project
                        that inspires you and your customers.
                    </p>
                </div>

                <div className="space-y-24">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-12 items-center bg-card p-8 md:p-12 rounded-[30px] border border-secondary hover:border-primary/50 transition-colors duration-300"
                        >
                            {/* Content */}
                            <div className={`space-y-6 ${work.imageFirst ? "order-2" : "order-2 lg:order-1"}`}>
                                <span className="text-primary font-medium text-sm tracking-wider uppercase">
                                    {work.category}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">
                                    {work.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {work.description}
                                </p>

                                <ul className="space-y-3 text-gray-300">
                                    {work.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <span className="material-symbols-outlined text-primary text-base">
                                                check
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {work.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-1.5 rounded-full bg-secondary text-white text-xs font-medium border border-transparent hover:border-primary hover:bg-secondary/70 transition-all cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    {work.liveUrl && (
                                        <Link
                                            href={work.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors group"
                                        >
                                            View Live Project
                                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                                arrow_outward
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Image */}
                            <div className={`group rounded-2xl overflow-hidden relative ${work.imageFirst ? "order-1" : "order-1 lg:order-2"}`}>
                                <div className="bg-gradient-to-br from-secondary to-black rounded-2xl p-4 md:p-8">
                                    <div className="relative h-[300px] md:h-[400px]">
                                        <Image
                                            src={work.image}
                                            alt={`${work.title} Project`}
                                            fill
                                            className="object-cover rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats repeater */}
                <div className="container mx-auto px-6 mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-10">
                        <div className="flex items-center gap-3">
                            <span className="text-5xl font-bold text-gradient-blue">7+</span>
                            <span className="text-sm text-gray-400">
                                Years of <br />Experience
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-5xl font-bold text-gradient-blue">50+</span>
                            <span className="text-sm text-gray-400">
                                Project <br />Completed
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-5xl font-bold text-gradient-blue">100+</span>
                            <span className="text-sm text-gray-400">
                                Happy <br />Clients
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-5xl font-bold text-gradient-blue">5</span>
                            <span className="text-sm text-gray-400">
                                Years of <br />Experience
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
