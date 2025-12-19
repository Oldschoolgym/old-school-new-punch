import CoachCard from "./CoachCard";

const coaches = [
  {
    name: "Marcus 'Iron Fist' Johnson",
    title: "Head Coach",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=600&fit=crop&crop=face",
    experience: "25+ Years",
    specialty: "Technical Boxing & Footwork",
    achievements: [
      "Former WBC Middleweight Champion",
      "Trained 3 World Champions",
      "Olympic Boxing Coach 2012"
    ]
  },
  {
    name: "Elena 'Thunder' Rodriguez",
    title: "Women's Boxing Coach",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&h=600&fit=crop&crop=face",
    experience: "15+ Years",
    specialty: "Speed & Power Training",
    achievements: [
      "4x National Champion",
      "USA Boxing Certified Coach",
      "Youth Development Specialist"
    ]
  },
  {
    name: "Tommy 'The Tank' O'Brien",
    title: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=600&fit=crop&crop=face",
    experience: "20+ Years",
    specialty: "Fight Camp Preparation",
    achievements: [
      "Former Pro Heavyweight Boxer",
      "NSCA Certified Trainer",
      "Combat Sports Specialist"
    ]
  }
];

const CoachesSection = () => {
  return (
    <section id="coaches" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Learn From The Best
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-gradient-gold">
            Meet Your Coaches
          </h2>
          <p className="text-muted-foreground text-lg">
            Our world-class coaches bring decades of ring experience, championship 
            pedigree, and a passion for developing fighters at every level.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={coach.name}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <CoachCard {...coach} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
