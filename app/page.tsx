import { Header, Footer, ScrollToTop } from "@/components/layout";
import {
  HeroSection,
  ServicesSection,
  WorksSection,
  ResumeSection,
  EducationSection,
  SkillsSection,
  TestimonialsSection,
  BlogsSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorksSection />
        <ResumeSection />
        <EducationSection />
        <SkillsSection />
        <TestimonialsSection />
        <BlogsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
