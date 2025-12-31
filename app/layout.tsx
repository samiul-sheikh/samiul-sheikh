import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Samiul Sheikh - Personal Portfolio",
  description: "Next-Level Web Developer breaking down complex user experience problems to create integrity-focused solutions.",
  keywords: ["web developer", "portfolio", "react", "next.js", "frontend developer"],
  authors: [{ name: "Samiul Sheikh" }],
  openGraph: {
    title: "Samiul Sheikh - Personal Portfolio",
    description: "Next-Level Web Developer breaking down complex user experience problems to create integrity-focused solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${sora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
