import AboutSection from "@/components/HomePageSections/AboutSection";
import ContactSection from "@/components/HomePageSections/ContactSection";
import CTASection from "@/components/HomePageSections/CTASection";
import FloatingWhatsAppButton from "@/components/HomePageSections/FloatingWhatsAppButton";
import Footer from "@/components/HomePageSections/Footer";
import Header from "@/components/HomePageSections/Header";
import HeroSection from "@/components/HomePageSections/HeroSection";
import ProductCategoriesSection from "@/components/HomePageSections/ProductCategoriesSection";
import WhyChooseUs from "@/components/HomePageSections/WhyChooseUs";


export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <ProductCategoriesSection />
        <AboutSection />
        <WhyChooseUs />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
