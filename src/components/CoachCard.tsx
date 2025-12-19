import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award } from "lucide-react";

interface CoachCardProps {
  name: string;
  title: string;
  image: string;
  experience: string;
  specialty: string;
  achievements?: string[];
}

const CoachCard = ({ name, title, image, experience, specialty, achievements }: CoachCardProps) => {
  return (
    <Card className="group bg-card border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-gold">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Experience Badge */}
        <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-display tracking-wider">
          {experience}
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Name & Title */}
        <div>
          <h3 className="text-2xl font-display text-gradient-gold tracking-wide">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm uppercase tracking-widest">
            {title}
          </p>
        </div>

        {/* Specialty */}
        <div className="flex items-center gap-2 text-foreground/80">
          <Award className="w-4 h-4 text-primary" />
          <span className="text-sm">{specialty}</span>
        </div>

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="pt-4 border-t border-border/50 space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Trophy className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CoachCard;
