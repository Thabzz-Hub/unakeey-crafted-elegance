import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Unakeey Events</h3>
            <p className="text-sm text-primary-foreground/80 font-inter">
              Your Vision, Our Artistry. Crafted with Class, Curated for You.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/unakeeyeventsandco"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@unakeeyevents.co.za"
                className="hover:text-gold transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+27123456789"
                className="hover:text-gold transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80 font-inter">
              <li>Event Planning & Management</li>
              <li>Venue & Vendor Finding</li>
              <li>Digital Invites & Programs</li>
              <li>Onsite Coordination</li>
              <li>Bespoke Gift Packages</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80 mb-4 font-inter">
              Subscribe to our newsletter for event tips and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-gold hover:bg-gold-dark text-primary font-inter">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60 font-inter">
          <p>© 2024 Unakeey Events and Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
