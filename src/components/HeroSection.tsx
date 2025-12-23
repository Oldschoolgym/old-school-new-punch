import heroImage from "@/assets/hero-boxing.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logoImg from "@/assets/old school logo.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div 
            className="inline-block animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <img src="/assets/old school logo.png">
            </span>
          </div>

          {/* Title */}
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display text-gradient-gold leading-none animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Old School
            <br />
            Boxing Gym
          </h1>

          {/* Motivational Intro */}
          <p 
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-primary font-semibold">Champions are not born — they are forged.</span>
            {" "}Step into the ring where legends trained and discover the fighter within. 
            Whether you're throwing your first punch or perfecting your craft, 
            we bring the grit of old-school training with modern techniques to unlock your full potential.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button 
              variant="gold" 
              size="xl"
              onClick={() => scrollToSection("booking")}
            >
              Start Your Journey
            </Button>
            <Button 
              variant="goldOutline" 
              size="xl"
              onClick={() => scrollToSection("coaches")}
            >
              Meet Our Coaches
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("coaches")}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
