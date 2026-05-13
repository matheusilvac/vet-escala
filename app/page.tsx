import { AboutSection } from "@/components/landing/about-section";
import { AudienceSection } from "@/components/landing/audience-section";
import { CTASection } from "@/components/landing/cta-section";
import { FAQSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { MethodSection } from "@/components/landing/method-section";
import { Navbar } from "@/components/landing/navbar";
import { PartnersSection } from "@/components/landing/partners-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { ResultsSection } from "@/components/landing/results-section";
import { ServicesSection } from "@/components/landing/services-section";
import { SolutionSection } from "@/components/landing/solution-section";
import { WhatsAppFab } from "@/components/landing/whatsapp-fab";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2F4F6]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <MethodSection />
      <ResultsSection />
      <AudienceSection />
      <CTASection />
      <AboutSection />
      <PartnersSection />
      <FAQSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
