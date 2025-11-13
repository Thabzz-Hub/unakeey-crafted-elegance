import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    event: "Wedding",
    text: "Unakeey Events transformed our wedding day into a fairytale. Every detail was perfect, and their attention to our vision was exceptional.",
    rating: 5,
  },
  {
    name: "David Mokoena",
    event: "Corporate Gala",
    text: "Professional, creative, and flawlessly executed. Our annual gala was a resounding success thanks to Unarine and her team.",
    rating: 5,
  },
  {
    name: "Lebo Khumalo",
    event: "Birthday Celebration",
    text: "From the invitations to the venue decor, everything was absolutely stunning. Unakeey Events made my 40th birthday unforgettable.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/80 font-inter text-lg max-w-2xl mx-auto">
            Don't just take our word for it—hear from those who've experienced the Unakeey difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-primary-foreground/10 border-primary-foreground/20 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-gold text-gold" size={20} />
                  ))}
                </div>
                <p className="text-primary-foreground/90 font-inter mb-6">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-playfair font-semibold text-primary-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gold font-inter">{testimonial.event}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
