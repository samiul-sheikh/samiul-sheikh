import Image from "next/image";

const blogs = [
    {
        title: "The Role Of Technology In Modern...",
        date: "Oct 01, 2023",
        category: "Business",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL2koHNW-ccxcRD6FYXVrDyASkM_WyXwV8pQQIoR7lQaKK44znxo0WrMHvP-7LSIdfX0N_-VGNIZvJ8SDBiwo4JYy7Mj3ZE31IDPzacmm4XxqquL6S-OOBVywZIut_X5B8g02ICePNQubhzFzD6J7Qr-n77nXrPDMNBogLQRXqNZm1fQYFTPcoiXm-zw-b09ICK3mjh6R2svFSZu6vD8nwtpDwS7u5u-4D75jrabjHBP4Pi5tn93A1GKWAOcFRETNsL5HoRJppPNE",
    },
    {
        title: "The Role Of Technology In Modern...",
        date: "Nov 01, 2023",
        category: "Development",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-1hs40HrIG2J1Nu81VHDjczAxC-yU0ZF434M_-7vu8LouTjz65cPVTBq0gTR918bCCNKjVaRW64P_Xc4Kmyxlh_gvTBdF3-yydqilwEWUugIo0jS5Kblf5d9puMEBlUWlC_sjszyyEl_GivJzaPj9KGAOkvqOroKM1CtNjTlzIFNmLUoozMcMus8LJCF8J9x-3xHDrOqGTelCqaH2hyNIWxzM_nULVEkBBFZz0rrKqiSpOncJ2ZWXvfYu_vzuqfTjGvgmZIQlmPI",
    },
    {
        title: "Digital Marketo To Their New Off...",
        date: "Dec 01, 2023",
        category: "Portfolio",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlo-d77GpxmURVDEcMdqA3uCzLOjVJU06ZtgPK16bHhYJrwCx9rTXCgV_R9PLqhSCuJfz44jGADP-tqwlcs1zwtzbhVLfZfIutifWIs5CQXJ3Ts7LVM8wDu4cRZ7TOxVkj2u33nwSmj-Jif2M2xB6cbYiKkVnCAkH9wnovoKLgH60h9obQB_KHYCEdBI1sYKo_xIQJ1-YBhRaWYgKk_Thmg7Y10M45gi7sj1A0Kp5Dz6HMQrK4VFSaURaaIII9uQuPznumfYlwfHg",
    },
];

export function BlogsSection() {
    return (
        <section className="py-20 bg-[#050709]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-primary">Recent</span>{" "}
                        <span className="text-white">Blogs</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We put your ideas and thus your wishes in the form of a unique web project
                        that inspires you and your customers.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="group bg-card rounded-2xl overflow-hidden border border-gray-800 hover:border-primary transition-all cursor-pointer"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full uppercase font-bold">
                                    {blog.category}
                                </span>
                            </div>

                            <div className="p-6">
                                <div className="flex gap-4 text-xs text-gray-400 mb-3">
                                    <span>{blog.date}</span>
                                    <span>Comment</span>
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                                    {blog.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
