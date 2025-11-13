import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Target, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Unakeey Events
          </h1>
          <p className="text-xl text-primary-foreground/90 font-inter max-w-3xl mx-auto animate-fade-in">
            Where personal touch meets professional excellence
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-center mb-12 animate-fade-in">
              The Origin of "Unakeey"
            </h2>
            <div className="prose prose-lg max-w-none font-inter text-muted-foreground space-y-6 animate-fade-in">
              <p>
                Every great brand has a story, and ours begins with a mother's love. "Unakeey" is the affectionate nickname that Creative Director Unarine Makumule's mother has called her since childhood—a term of endearment that embodies warmth, care, and personal connection.
              </p>
              <p>
                Just as this name represents something deeply personal and meaningful, so too does our approach to event planning. We don't just organize events; we create experiences that reflect the unique stories, dreams, and personalities of those we serve.
              </p>
              <p>
                Founded with a vision to bring luxury and sophistication to event planning across South Africa, Unakeey Events and Co. has grown from this personal foundation into a premier event planning service that serves clients nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-gold/50 animate-fade-in">
              <CardContent className="pt-8">
                <Target className="text-gold mb-4" size={40} />
                <h3 className="font-playfair text-3xl font-bold mb-4">Our Vision</h3>
                <p className="font-inter text-muted-foreground text-lg">
                  To be South Africa's leading curator of luxury event experiences, setting the standard for sophistication, creativity, and seamless execution in the events industry.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gold/50 animate-fade-in" style={{ animationDelay: "150ms" }}>
              <CardContent className="pt-8">
                <Heart className="text-gold mb-4" size={40} />
                <h3 className="font-playfair text-3xl font-bold mb-4">Our Mission</h3>
                <p className="font-inter text-muted-foreground text-lg">
                  To translate our clients' dreams into seamless, sophisticated, and deeply personal realities. We are committed to delivering experiences that exceed expectations and create lasting memories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Unakeey Difference */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12 animate-fade-in">
            The Unakeey Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Award,
                title: "Creative Director's Eye",
                description: "Unarine's artistic vision and attention to detail ensure every event is a masterpiece",
              },
              {
                icon: Users,
                title: "Meticulous Management",
                description: "From concept to execution, we handle every detail with precision and care",
              },
              {
                icon: Heart,
                title: "Deeply Personal Service",
                description: "Like the name Unakeey itself, we bring warmth and personal touch to every event",
              },
              {
                icon: Target,
                title: "Legacy of Excellence",
                description: "Building a reputation for sophistication and flawless execution across South Africa",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center hover:border-gold transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8">
                  <item.icon className="text-gold mx-auto mb-4" size={40} />
                  <h3 className="font-playfair text-xl font-bold mb-3">{item.title}</h3>
                  <p className="font-inter text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Director */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Meet Unarine Makumule
            </h2>
            <p className="text-lg text-primary-foreground/90 font-inter mb-6">
              Creative Director & Founder
            </p>
            <div className="prose prose-lg max-w-none text-primary-foreground/80 font-inter space-y-4">
              <p>
                With a keen eye for design and an unwavering commitment to excellence, Unarine Makumule has transformed her passion for creating beautiful experiences into Unakeey Events and Co.
              </p>
              <p>
                Her approach combines artistic vision with meticulous planning, ensuring that every event not only looks stunning but runs flawlessly. Unarine's personal touch—embodied in the very name "Unakeey"—ensures that clients receive service that is both professional and deeply personal.
              </p>
              <p>
                Serving clients across all nine provinces of South Africa, Unarine has built a reputation for sophistication, creativity, and seamless execution that makes dreams come true.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6 animate-fade-in">
            Nationwide Service Delivery
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-3xl mx-auto animate-fade-in">
            Based in South Africa, we proudly serve clients across all nine provinces, bringing luxury event planning and coordination to every corner of the country.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
