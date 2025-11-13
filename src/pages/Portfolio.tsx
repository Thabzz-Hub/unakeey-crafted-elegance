import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Weddings", "Corporate", "Birthdays", "Anniversaries"];

// Placeholder portfolio items - in a real app, these would be real images
const portfolioItems = [
  { id: 1, category: "Weddings", title: "Elegant Garden Wedding", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800" },
  { id: 2, category: "Corporate", title: "Annual Gala Dinner", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800" },
  { id: 3, category: "Birthdays", title: "40th Birthday Celebration", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800" },
  { id: 4, category: "Weddings", title: "Luxury Ballroom Wedding", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800" },
  { id: 5, category: "Corporate", title: "Product Launch Event", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" },
  { id: 6, category: "Anniversaries", title: "25th Anniversary Party", image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800" },
  { id: 7, category: "Birthdays", title: "Sweet Sixteen Party", image: "https://images.unsplash.com/photo-1464347744102-11db6282f854?w=800" },
  { id: 8, category: "Corporate", title: "Team Building Event", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800" },
  { id: 9, category: "Weddings", title: "Beach Wedding Ceremony", image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl text-primary-foreground/90 font-inter max-w-3xl mx-auto animate-fade-in">
            A showcase of unforgettable moments and beautifully crafted experiences
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-gold hover:bg-gold-dark text-primary font-inter"
                    : "border-gold text-foreground hover:bg-gold/10 font-inter"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-6">
                    <div className="text-sm text-gold font-inter mb-2">{item.category}</div>
                    <h3 className="font-playfair text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="font-inter text-muted-foreground text-lg">
                No events found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
