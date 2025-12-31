import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#050709] pt-12 pb-8 border-t border-gray-900">
            <div className="container mx-auto px-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-8">
                    S
                </div>

                <nav className="flex justify-center gap-8 text-sm font-medium text-white mb-8">
                    <Link href="#services" className="hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="#works" className="hover:text-primary transition-colors">
                        Services
                    </Link>
                    <Link href="#resume" className="hover:text-primary transition-colors">
                        Portfolios
                    </Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} All rights reserved by{" "}
                    <span className="text-primary font-medium">Samiul Sheikh</span>
                </p>
            </div>
        </footer>
    );
}
