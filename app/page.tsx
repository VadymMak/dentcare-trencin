import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import TeamSection from '@/components/sections/TeamSection';
import PricingSection from '@/components/sections/PricingSection';
import BookingSection from '@/components/sections/BookingSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';
import ChatWidget from '@/components/widgets/ChatWidget';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyUsSection />
      <TeamSection />
      <PricingSection />
      <BookingSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </>
  );
}
