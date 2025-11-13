import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="text-gold font-inter text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              The Unakeey Story
            </h2>
            <p className="text-muted-foreground font-inter text-lg mb-6">
              "Unakeey" is more than just a name—it's a legacy. Born from the loving nickname given by her mother, Creative Director Unarine Makumule has transformed this term of endearment into a symbol of excellence in luxury event planning.
            </p>
            <p className="text-muted-foreground font-inter text-lg mb-8">
              We believe every event should be a masterpiece, reflecting the unique story and style of those we serve. With meticulous attention to detail and an unwavering commitment to excellence, we transform visions into unforgettable experiences.
            </p>
            <Link to="/about">
              <Button className="bg-gold hover:bg-gold-dark text-primary font-inter">
                Learn More About Us
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-in">
            <div className="bg-gold/10 p-8 rounded-lg text-center">
              <div className="text-4xl font-playfair font-bold text-gold mb-2">100+</div>
              <div className="text-sm font-inter text-muted-foreground">Events Planned</div>
            </div>
            <div className="bg-gold/10 p-8 rounded-lg text-center">
              <div className="text-4xl font-playfair font-bold text-gold mb-2">98%</div>
              <div className="text-sm font-inter text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="bg-gold/10 p-8 rounded-lg text-center">
              <div className="text-4xl font-playfair font-bold text-gold mb-2">5+</div>
              <div className="text-sm font-inter text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-gold/10 p-8 rounded-lg text-center">
              <div className="text-4xl font-playfair font-bold text-gold mb-2">9</div>
              <div className="text-sm font-inter text-muted-foreground">Provinces Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
