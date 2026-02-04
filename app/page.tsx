import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import HeroSection from '@/components/hero/HeroSection';
import ServicesSection from '@/components/services/ServicesSection';
import AboutSection from '@/components/about/AboutSection';
import ContactSection from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
