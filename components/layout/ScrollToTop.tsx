"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, MessageCircle } from "lucide-react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`fixed bottom-8 right-8 flex flex-col gap-3 z-50 transition-all
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
            {/* WhatsApp Button */}
            <Link
                href="https://wa.me/8801784097404?text=Hello%20Samiul,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-12 h-12 bg-green-500 text-white rounded-full
                           flex items-center justify-center shadow-lg
                           hover:bg-green-600 transition-all hover:scale-110"
            >
                <MessageCircle size={22} />
            </Link>

            {/* Scroll To Top Button */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-12 h-12 bg-primary text-white rounded-full
                           flex items-center justify-center shadow-lg
                           hover:bg-blue-700 transition-all hover:scale-110"
            >
                <ArrowUp size={22} />
            </button>
        </div>
    );
}
