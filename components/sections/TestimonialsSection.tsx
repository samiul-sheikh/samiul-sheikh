import Image from "next/image";

const testimonials = [
    {
        icon: "auto_awesome",
        company: "Compass Architects",
        rating: 5,
        text: '"Samiul Sheikh is a professional Designer he really helps my business by providing value to my business."',
        name: "Khairul Hasan Dollon",
        role: "Fonder & CEO",
        image: "/image/testimonial/dollon.jpg"
    },
    {
        icon: "bolt",
        company: "Carvers Workshop",
        rating: 5,
        text: '"Amazing work! The attention to detail and creative solutions provided were outstanding."',
        name: "Redwanul Sarder Tarek",
        role: "Managing Director",
        image: "/image/testimonial/tarek.jpg"
    },
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 bg-[#050709]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-primary">My Client&apos;s</span>{" "}
                            <span className="text-white">Stories</span>
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Empowering people in a new digital journey with my super services
                        </p>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-w-[320px] bg-card p-8 rounded-2xl border border-gray-800 snap-center hover:border-primary transition-all"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-2 text-white font-bold">
                                        <span className="material-symbols-outlined text-primary">
                                            {testimonial.icon}
                                        </span>
                                        {testimonial.company}
                                    </div>
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="text-primary text-xl mb-4">
                                    {"★".repeat(testimonial.rating)}
                                </div>

                                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                    {testimonial.text}
                                </p>

                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
