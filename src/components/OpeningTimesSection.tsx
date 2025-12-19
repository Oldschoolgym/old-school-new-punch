import { Card, CardContent } from "@/components/ui/card";
import { Clock, Dumbbell, Users } from "lucide-react";

const schedule = [
  { day: "Monday", hours: "6:00 AM - 10:00 PM", classes: "All Classes" },
  { day: "Tuesday", hours: "6:00 AM - 10:00 PM", classes: "All Classes" },
  { day: "Wednesday", hours: "6:00 AM - 10:00 PM", classes: "All Classes" },
  { day: "Thursday", hours: "6:00 AM - 10:00 PM", classes: "All Classes" },
  { day: "Friday", hours: "6:00 AM - 9:00 PM", classes: "All Classes" },
  { day: "Saturday", hours: "8:00 AM - 6:00 PM", classes: "Open Gym & Sparring" },
  { day: "Sunday", hours: "9:00 AM - 4:00 PM", classes: "Open Gym Only" }
];

const classTypes = [
  {
    icon: Users,
    name: "Beginners Boxing",
    times: "Mon, Wed, Fri - 6:30 PM",
    duration: "60 min"
  },
  {
    icon: Dumbbell,
    name: "Advanced Training",
    times: "Tue, Thu - 7:00 PM",
    duration: "90 min"
  },
  {
    icon: Users,
    name: "Women's Only",
    times: "Mon, Wed - 5:00 PM",
    duration: "60 min"
  },
  {
    icon: Dumbbell,
    name: "Sparring Sessions",
    times: "Sat - 10:00 AM",
    duration: "120 min"
  }
];

const OpeningTimesSection = () => {
  // Get current day for highlighting
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section id="hours" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            When We Train
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-gradient-gold">
            Opening Times
          </h2>
          <p className="text-muted-foreground text-lg">
            The gym never sleeps. Find the perfect time that fits your schedule 
            and commit to your training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Weekly Schedule */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-display text-foreground tracking-wide">
                  Weekly Hours
                </h3>
              </div>
              <div className="space-y-3">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                      item.day === today
                        ? "bg-primary/10 border border-primary/30"
                        : "bg-background/30 hover:bg-background/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-display text-lg tracking-wide ${
                        item.day === today ? "text-primary" : "text-foreground"
                      }`}>
                        {item.day}
                      </span>
                      {item.day === today && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                          TODAY
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-foreground font-medium">{item.hours}</p>
                      <p className="text-muted-foreground text-sm">{item.classes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Class Schedule */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Dumbbell className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-display text-foreground tracking-wide">
                  Class Schedule
                </h3>
              </div>
              <div className="space-y-4">
                {classTypes.map((classItem, index) => (
                  <div
                    key={classItem.name}
                    className="group p-5 rounded-lg bg-background/30 hover:bg-background/50 border border-transparent hover:border-primary/30 transition-all animate-fade-up"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <classItem.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-lg text-foreground tracking-wide">
                          {classItem.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mt-1">
                          {classItem.times}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {classItem.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-8 p-4 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-sm text-foreground/80">
                  <span className="text-accent font-semibold">Pro Tip:</span> Private 
                  one-on-one sessions available by appointment. Contact us to book 
                  your personal training slot.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OpeningTimesSection;
