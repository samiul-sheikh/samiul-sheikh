const education = [
    {
        period: "2016 -2020",
        title: "B.Sc. in Software Engineering",
        institution: "American International University–Bangladesh (AIUB)",
        icon: "school",
        gradient: "from-primary to-blue-600",
        description: "Comprehensive program covering visual communication, typography, and digital design tools.",
    },
    {
        period: "2012 - 2014",
        title: "Higher Secondary Certificate",
        institution: "Rangpur Government College",
        icon: "code",
        gradient: "from-purple-500 to-pink-500",
        description: "Advanced studies in software architecture, algorithms, and cloud computing technologies.",
    },
    {
        period: "2010 - 2011",
        title: "Secondary School Certificate |",
        institution: "Rabaitary S.B.M.L High School",
        icon: "terminal",
        gradient: "from-green-500 to-emerald-500",
        description: "Intensive program covering HTML, CSS, JavaScript, and modern web frameworks.",
    },
];

export function EducationSection() {
    return (
        <section id="education" className="py-20 bg-[#050709] text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-primary">My</span>{" "}
                        <span className="text-white">Education</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A journey of continuous learning and skill development in design and technology.
                    </p>
                </div>

                {/* Horizontal Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-card p-8 rounded-[20px] border border-secondary hover:border-primary transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <span className="material-symbols-outlined text-white text-2xl">
                                    {item.icon}
                                </span>
                            </div>

                            {/* Period Badge */}
                            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold mb-4">
                                {item.period}
                            </span>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4">{item.institution}</p>
                            {/* <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
