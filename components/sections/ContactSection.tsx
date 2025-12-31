import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-[#050709]">
            <div className="container mx-auto px-6">
                <div className="bg-card rounded-[30px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 border border-secondary">
                    {/* Form Side */}
                    <div className="flex-1 bg-black/30 p-8 rounded-3xl border border-gray-800">
                        <h2 className="text-4xl font-bold mb-2">
                            <span className="text-primary">Let&apos;s work</span>{" "}
                            <span className="text-white">together!</span>
                        </h2>
                        <p className="text-gray-400 text-sm mb-8">
                            I design and code beautifully simple things and I love what I do.
                            Just simple like that!
                        </p>

                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <Input
                                    type="text"
                                    placeholder="First name"
                                    className="bg-input border-gray-800 text-white rounded-lg p-3 h-12 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-500"
                                />
                                <Input
                                    type="text"
                                    placeholder="Last name"
                                    className="bg-input border-gray-800 text-white rounded-lg p-3 h-12 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-500"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <Input
                                    type="email"
                                    placeholder="Email address"
                                    className="bg-input border-gray-800 text-white rounded-lg p-3 h-12 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-500"
                                />
                                <Input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="bg-input border-gray-800 text-white rounded-lg p-3 h-12 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-500"
                                />
                            </div>

                            <select className="bg-input border border-gray-800 text-gray-400 rounded-lg p-3 w-full h-12 focus:ring-1 focus:ring-primary focus:border-primary outline-none text-sm">
                                <option>Select an option</option>
                                <option>Web Development</option>
                                <option>Custom Software Development</option>
                                <option>Digital Marketing</option>
                                <option>Others</option>
                            </select>

                            <Textarea
                                placeholder="Message"
                                rows={4}
                                className="bg-input border-gray-800 text-white rounded-lg p-3 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-500 resize-none"
                            />

                            <Button
                                type="submit"
                                className="bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all mt-4 h-12"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info Side */}
                    <div className="lg:w-1/3 space-y-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-xl">phone</span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Phone</p>
                                <h4 className="text-white font-bold text-lg hover:text-primary transition-colors cursor-pointer">
                                    +88 01784097404
                                </h4>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-xl">email</span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <h4 className="text-white font-bold text-lg hover:text-primary transition-colors cursor-pointer">
                                    sheikh.samiul1971@gmail.com
                                </h4>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-xl">
                                    location_on
                                </span>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Address</p>
                                <h4 className="text-white font-bold text-lg">
                                    Dhaka, Bangladesh
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
