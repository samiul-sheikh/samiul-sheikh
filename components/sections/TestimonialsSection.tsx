import Image from "next/image";

const testimonials = [
    {
        icon: "auto_awesome",
        company: "COMPANY",
        rating: 5,
        text: '"Taylor is a professional Designer he really helps my business by providing value to my business."',
        name: "Brandon Fraser",
        role: "Senior Software Dev, Cosmic Sport",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzj3s1puV6eTfy5WMjxLa_n3DJkmWVU-FwYNqXC0z9zqW3aimF2KA4bATiLbzOo7cbbqGRzMwA2qlXrr4w8X7ZRaYwmks1BjWHmJe3DQ8lEedLcR6DPKoREgfhzxcygnNh5Al0DdTBNyYj7d-S3J2IJf91tUgrERx5vluCOREubDGvW4M8BPca9EC-TG7bzhSb4HkhQJ0RyuS621jtvsasGlmdZgbN-VDceDCUzM9sl5sRu6Fbw4yY1B76rMs-ArCjjrA5iqw4YZs",
    },
    {
        icon: "bolt",
        company: "COSMIC",
        rating: 5,
        text: '"Amazing work! The attention to detail and creative solutions provided were outstanding."',
        name: "Tim Bailey",
        role: "SEO Specialist, Theme Junction",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbzOX7YyO9iARqJnYZj2rQm0EpMnHQp2xPH_asrDc3E2TBHXWDMfxE-fj0Tfm_hDQFHdSbNG0Y5-XQCI7DOMwg8A8tjB0mNv99BvI_OJ8iOoYXdbWfOvz0g65AUlZmzirVMbGr7IYpuDB5SC8J2MPSjZzxUKvuRWWPzrlKCntfnXqoOEshkeeZH354LKfAivqbcY8u0N3eKcHgiNMZdMrm3EXStWlCpnnEjcMI9PKGIHU2xkFGkFCIURHs2G4v28RDZj9go61sc9E",
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
