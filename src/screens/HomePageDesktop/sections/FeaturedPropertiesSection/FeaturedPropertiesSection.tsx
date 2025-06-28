import React from "react";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedPropertiesSection = (): JSX.Element => {
  const properties = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Luxury Villa in DLF Phase 4",
      description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with modern amenities...",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,500 sq ft",
      location: "Gurgaon, Haryana",
      price: "₹2,50,00,000",
      type: "Villa",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Modern Apartment in Connaught Place",
      description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views in downtown Delhi...",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      location: "Delhi, NCR",
      price: "₹1,75,00,000",
      type: "Apartment",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Premium Townhouse in Sector 62",
      description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community with modern amenities...",
      bedrooms: 3,
      bathrooms: 3,
      area: "1,800 sq ft",
      location: "Noida, UP",
      price: "₹1,25,00,000",
      type: "Townhouse",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 space-y-4 lg:space-y-0">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our handpicked selection of featured properties. Each listing offers 
              a glimpse into exceptional homes and investments available through Rentwala.
            </p>
          </div>
          <Link to="/properties">
            <Button variant="outline" className="group transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card key={property.id} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg overflow-hidden hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary-600 text-white animate-bounce-in">
                    {property.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                    Featured
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1 group-hover:text-primary-600 transition-colors duration-300" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {property.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center group-hover:text-primary-600 transition-colors duration-300">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center group-hover:text-primary-600 transition-colors duration-300">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center group-hover:text-primary-600 transition-colors duration-300">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-2xl font-bold text-primary-600 animate-pulse-slow">{property.price}</p>
                  </div>
                  <Button className="bg-primary-600 hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};