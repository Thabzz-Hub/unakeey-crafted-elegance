import { Link } from "react-router-dom";
import { Calendar, Search, Mail, Users, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Calendar,
    title: "Event Planning & Management",
    description: "Comprehensive planning from concept to flawless execution",
  },
  {
    icon: Search,
    title: "Venue & Vendor Finding",
    description: "Curated selection of premium venues and trusted vendors",
  },
  {
    icon: Mail,
    title: "Digital Invites & Programs",
    description: "Custom digital designs that set the tone for your event",
  },
  {
    icon: Users,
    title: "Onsite Coordination",
    description: "Professional day-of coordination and management",
  },
  {
    icon: Gift,
    title: "Bespoke Gift Packages",
    description: "Personalized gift curation for your special occasions",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision to life with meticulous attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-gold transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <service.icon className="text-gold" size={24} />
                </div>
                <CardTitle className="font-playfair text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button className="bg-gold hover:bg-gold-dark text-primary font-inter text-lg px-8 py-6">
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
