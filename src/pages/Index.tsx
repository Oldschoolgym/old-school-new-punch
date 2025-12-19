import HeroSection from "@/components/HeroSection";
import CoachesSection from "@/components/CoachesSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import OpeningTimesSection from "@/components/OpeningTimesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CoachesSection />
      <GallerySection />
      <BookingSection />
      <OpeningTimesSection />
      <Footer />
    </main>
  );
};

export default Index;
