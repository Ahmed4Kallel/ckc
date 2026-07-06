import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedWorksSection from "@/components/sections/FeaturedWorksSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import JournalSection from "@/components/sections/JournalSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <FeaturedWorksSection />
        <HowWeWorkSection />
        <ReviewsSection />
        <JournalSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
