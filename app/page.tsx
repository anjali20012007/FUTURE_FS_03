import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F7E8D0] min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ContactSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
