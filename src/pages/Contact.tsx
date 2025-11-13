import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted",
      description: "Thank you! We'll be in touch within 24 hours to discuss your event.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Let's Create Something Beautiful
          </h1>
          <p className="text-xl text-primary-foreground/90 font-inter max-w-3xl mx-auto animate-fade-in">
            Book your consultation today and let's bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardContent className="pt-6">
                  <Mail className="text-gold mb-4" size={24} />
                  <h3 className="font-playfair text-xl font-bold mb-2">Email Us</h3>
                  <a href="mailto:info@unakeeyevents.co.za" className="text-muted-foreground hover:text-gold transition-colors font-inter">
                    info@unakeeyevents.co.za
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Phone className="text-gold mb-4" size={24} />
                  <h3 className="font-playfair text-xl font-bold mb-2">Call Us</h3>
                  <a href="tel:+27123456789" className="text-muted-foreground hover:text-gold transition-colors font-inter">
                    +27 12 345 6789
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Instagram className="text-gold mb-4" size={24} />
                  <h3 className="font-playfair text-xl font-bold mb-2">Follow Us</h3>
                  <a 
                    href="https://instagram.com/unakeeyeventsandco" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-gold transition-colors font-inter"
                  >
                    @unakeeyeventsandco
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <MapPin className="text-gold mb-4" size={24} />
                  <h3 className="font-playfair text-xl font-bold mb-2">Service Area</h3>
                  <p className="text-muted-foreground font-inter">
                    Nationwide delivery across South Africa
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Clock className="text-gold mb-4" size={24} />
                  <h3 className="font-playfair text-xl font-bold mb-2">Business Hours</h3>
                  <p className="text-muted-foreground font-inter">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: By appointment
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "150ms" }}>
              <Card className="border-gold/50">
                <CardContent className="pt-8">
                  <h2 className="font-playfair text-3xl font-bold mb-6">Book Your Consultation</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-inter font-medium mb-2">Full Name *</label>
                        <Input required placeholder="Your full name" className="font-inter" />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-medium mb-2">Email Address *</label>
                        <Input required type="email" placeholder="your@email.com" className="font-inter" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-inter font-medium mb-2">Phone Number *</label>
                        <Input required type="tel" placeholder="+27 ..." className="font-inter" />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-medium mb-2">Event Type *</label>
                        <Select required>
                          <SelectTrigger className="font-inter">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="birthday">Birthday</SelectItem>
                            <SelectItem value="anniversary">Anniversary</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-inter font-medium mb-2">Event Date</label>
                        <Input type="date" className="font-inter" />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-medium mb-2">Estimated Guest Count</label>
                        <Input type="number" placeholder="Number of guests" className="font-inter" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-inter font-medium mb-2">Budget Range</label>
                        <Select>
                          <SelectTrigger className="font-inter">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under50k">Under R50,000</SelectItem>
                            <SelectItem value="50k-100k">R50,000 - R100,000</SelectItem>
                            <SelectItem value="100k-200k">R100,000 - R200,000</SelectItem>
                            <SelectItem value="200k-500k">R200,000 - R500,000</SelectItem>
                            <SelectItem value="over500k">Over R500,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-medium mb-2">Event Location/Venue</label>
                        <Input placeholder="City or venue name" className="font-inter" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-inter font-medium mb-2">Preferred Services</label>
                      <div className="space-y-2 font-inter">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Event Planning & Management
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Venue & Vendor Finding
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Digital Invites & Programs
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Onsite Coordination
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Bespoke Gift Packages
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-inter font-medium mb-2">Tell Us About Your Vision *</label>
                      <Textarea 
                        required 
                        placeholder="Describe your dream event, theme ideas, special requirements, or any other details you'd like to share..."
                        className="min-h-32 font-inter"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-primary font-inter text-lg py-6">
                      Submit Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
