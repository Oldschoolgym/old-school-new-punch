import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Calendar, MessageSquare, Users } from "lucide-react";

const bookingMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    action: "(555) 123-4567",
    cta: "Call Now"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us your details",
    action: "info@oldschoolboxinggym.com",
    cta: "Send Email"
  },
  {
    icon: MessageSquare,
    title: "Walk In",
    description: "Visit us in person",
    action: "No appointment needed for first visit",
    cta: "Get Directions"
  }
];

const BookingSection = () => {
  return (
    <section id="booking" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Ready To Fight?
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-gradient-gold">
            Book Your Session
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started is easy. Choose your preferred method below and take 
            the first step towards becoming the fighter you were meant to be.
          </p>
        </div>

        {/* Booking Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {bookingMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gold animate-fade-up group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display text-foreground tracking-wide">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {method.description}
                </p>
                <p className="text-foreground font-medium">
                  {method.action}
                </p>
                <Button variant="goldOutline" className="w-full">
                  {method.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What to Expect */}
        <Card className="bg-background/30 border-primary/20 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-display text-gradient-gold">
                  Your First Session
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you book your first session, you'll get a complimentary 
                  fitness assessment and a one-on-one introduction to our training 
                  methodology. No experience necessary — just bring your determination.
                </p>
                <ul className="space-y-3">
                  {[
                    "Free fitness assessment",
                    "Introduction to boxing basics",
                    "Meet your potential coaches",
                    "Tour of our facilities",
                    "Discuss your goals"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-display text-foreground">6 Days</p>
                  <p className="text-sm text-muted-foreground">Per Week</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-display text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border/50 text-center col-span-2">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-lg font-display text-foreground">Downtown Location</p>
                  <p className="text-sm text-muted-foreground">123 Fighter's Lane, Boxing District</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;
