import HeroSlider from "../components/home/HeroSlider";
import AboutIntro from "../components/home/AboutIntro";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ClientsSection from "../components/home/ClientsSection";
import CTAStrip from "../components/common/CTAStrip";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutIntro />
      <ServicesSection />
      <TestimonialsSection />
      <ProjectsSection />
      <ClientsSection />
      <CTAStrip />
    </>
  );
}
