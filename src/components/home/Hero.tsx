import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-event.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury event setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          Unakeey Events and Co.
        </h1>
        <p className="text-xl md:text-2xl text-gold font-inter mb-4">
          Your Vision, Our Artistry
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/90 font-inter mb-8">
          Crafted with Class, Curated for You
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-gold hover:bg-gold-dark text-primary font-inter text-lg px-8 py-6">
              Book a Consultation
            </Button>
          </Link>
          <Link to="/services">
            <Button className="bg-primary-foreground text-primary font-inter text-lg px-8 py-6">
              View Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
