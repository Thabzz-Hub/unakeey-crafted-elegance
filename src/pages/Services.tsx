import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Search, Mail, Users, Gift } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Calendar,
    title: "Event Planning & Management",
    description: "Comprehensive planning from concept to flawless execution. We handle every detail, from initial consultation to post-event follow-up.",
    features: [
      "Concept development and theme creation",
      "Budget planning and management",
      "Timeline creation and coordination",
      "Vendor liaison and contract negotiation",
      "Risk assessment and contingency planning",
    ],
  },
  {
    icon: Search,
    title: "Venue & Event Vendor Finding",
    description: "Curated selection of premium venues and trusted vendors across South Africa, perfectly matched to your event vision and requirements.",
    features: [
      "Venue sourcing and site visits",
      "Vendor research and recommendations",
      "Contract negotiation and management",
      "Quality assurance and vetting",
      "Coordination between multiple vendors",
    ],
  },
  {
    icon: Mail,
    title: "Digital Event Invite & Program",
    description: "Custom digital designs that set the perfect tone for your event, from save-the-dates to detailed programs.",
    features: [
      "Custom invitation design",
      "Digital program creation",
      "RSVP management system",
      "Guest communication coordination",
      "Brand-consistent design elements",
    ],
  },
  {
    icon: Users,
    title: "Onsite Event Coordination",
    description: "Professional day-of coordination ensuring seamless execution and allowing you to enjoy your event stress-free.",
    features: [
      "Complete event day management",
      "Vendor coordination and supervision",
      "Timeline execution and oversight",
      "Problem-solving and troubleshooting",
      "Guest assistance and support",
    ],
  },
  {
    icon: Gift,
    title: "Bespoke Gift Packages",
    description: "Personalized gift curation that adds a special touch to your events, from corporate gifts to wedding favors.",
    features: [
      "Custom gift selection and sourcing",
      "Branded packaging and presentation",
      "Budget-conscious options",
      "Delivery coordination",
      "Personalization and customization",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 font-inter max-w-3xl mx-auto animate-fade-in">
            Tailored luxury event solutions designed to transform your vision into reality
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:border-gold transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-gold" size={32} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-playfair text-3xl mb-3">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="font-inter text-lg">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-playfair text-xl font-semibold mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gold mr-3 mt-1">✓</span>
                        <span className="font-inter text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="font-playfair text-3xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-muted-foreground font-inter text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your event vision and create something extraordinary together
            </p>
            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold-dark text-primary font-inter text-lg px-8 py-6">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
