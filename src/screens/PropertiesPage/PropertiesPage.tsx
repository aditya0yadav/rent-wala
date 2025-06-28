import React, { useState } from "react";
import { HeaderSection } from "../HomePageDesktop/sections/HeaderSection";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  image: string;
  area: number;
}

export const PropertiesPage = (): JSX.Element => {
  const [properties] = useState<Property[]>([
    {
      id: 1,
      title: "Seaside Serenity Villa",
      description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with ocean views and modern amenities.",
      price: 550000,
      location: "California",
      bedrooms: 4,
      bathrooms: 3,
      type: "Villa",
      image: "/image.png",
      area: 2500,
    },
    {
      id: 2,
      title: "Metropolitan Haven",
      description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views in the heart of downtown.",
      price: 750000,
      location: "New York",
      bedrooms: 2,
      bathrooms: 2,
      type: "Apartment",
      image: "/image-1.png",
      area: 1200,
    },
    {
      id: 3,
      title: "Rustic Retreat Cottage",
      description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community with beautiful landscaping.",
      price: 425000,
      location: "Texas",
      bedrooms: 3,
      bathrooms: 3,
      type: "Cottage",
      image: "/image-2.png",
      area: 1800,
    },
    {
      id: 4,
      title: "Modern City Loft",
      description: "Contemporary 1-bedroom loft with industrial design elements and premium finishes.",
      price: 320000,
      location: "California",
      bedrooms: 1,
      bathrooms: 1,
      type: "Loft",
      image: "/image.png",
      area: 900,
    },
    {
      id: 5,
      title: "Family Suburban Home",
      description: "Spacious 5-bedroom family home with large backyard and excellent school district.",
      price: 680000,
      location: "Florida",
      bedrooms: 5,
      bathrooms: 4,
      type: "House",
      image: "/image-1.png",
      area: 3200,
    },
    {
      id: 6,
      title: "Luxury Penthouse",
      description: "Exclusive penthouse with private terrace and stunning city skyline views.",
      price: 1200000,
      location: "New York",
      bedrooms: 3,
      bathrooms: 3,
      type: "Penthouse",
      image: "/image-2.png",
      area: 2800,
    },
  ]);

  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    location: "",
    bedrooms: "",
    type: "",
  });

  const locations = [...new Set(properties.map(p => p.location))];
  const propertyTypes = [...new Set(properties.map(p => p.type))];

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters: typeof filters) => {
    let filtered = properties;

    if (currentFilters.minPrice) {
      filtered = filtered.filter(p => p.price >= parseInt(currentFilters.minPrice));
    }

    if (currentFilters.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(currentFilters.maxPrice));
    }

    if (currentFilters.location) {
      filtered = filtered.filter(p => p.location.toLowerCase().includes(currentFilters.location.toLowerCase()));
    }

    if (currentFilters.bedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= parseInt(currentFilters.bedrooms));
    }

    if (currentFilters.type) {
      filtered = filtered.filter(p => p.type.toLowerCase().includes(currentFilters.type.toLowerCase()));
    }

    setFilteredProperties(filtered);
  };

  const clearFilters = () => {
    setFilters({
      minPrice: "",
      maxPrice: "",
      location: "",
      bedrooms: "",
      type: "",
    });
    setFilteredProperties(properties);
  };

  return (
    <div className="bg-grey-08 flex flex-col items-center w-full min-h-screen">
      <div className="w-full max-w-[1920px]">
        <HeaderSection />
        
        <div className="px-4 lg:px-[8%] py-8 lg:py-16">
          {/* Page Header */}
          <div className="flex flex-col items-start gap-6 mb-12">
            <h1 className="font-['Urbanist',Helvetica] font-semibold text-white text-3xl lg:text-5xl tracking-[0] leading-[1.2] lg:leading-[72px]">
              Find Your Perfect Property
            </h1>
            <p className="font-medium text-grey-60 tracking-[0] font-['Urbanist',Helvetica] text-base lg:text-lg leading-[24px] lg:leading-[27px] max-w-3xl">
              Explore our comprehensive collection of properties. Use the filters below to find exactly what you're looking for.
            </p>
          </div>

          {/* Filters Section */}
          <Card className="bg-grey-10 rounded-xl border border-solid border-neutral-800 mb-12">
            <CardContent className="p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-['Urbanist',Helvetica] font-medium text-white text-sm">
                    Min Price ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                    className="bg-grey-08 border-neutral-800 text-white placeholder:text-grey-60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Urbanist',Helvetica] font-medium text-white text-sm">
                    Max Price ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="1000000"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                    className="bg-grey-08 border-neutral-800 text-white placeholder:text-grey-60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Urbanist',Helvetica] font-medium text-white text-sm">
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                    className="bg-grey-08 border border-neutral-800 rounded-md px-3 py-2 text-white"
                  >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Urbanist',Helvetica] font-medium text-white text-sm">
                    Min Bedrooms
                  </label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                    className="bg-grey-08 border border-neutral-800 rounded-md px-3 py-2 text-white"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Urbanist',Helvetica] font-medium text-white text-sm">
                    Property Type
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange("type", e.target.value)}
                    className="bg-grey-08 border border-neutral-800 rounded-md px-3 py-2 text-white"
                  >
                    <option value="">All Types</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="w-full bg-grey-08 border-neutral-800 text-white hover:bg-grey-15"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-8">
            <p className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-lg">
              Showing {filteredProperties.length} of {properties.length} properties
            </p>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="flex flex-col items-start gap-6 p-6 lg:p-8 bg-grey-08 rounded-xl overflow-hidden border border-solid border-neutral-800 hover:border-purple-60 transition-colors"
              >
                <img
                  className="w-full h-[250px] lg:h-[300px] object-cover rounded-lg"
                  alt={property.title}
                  src={property.image}
                />

                <CardContent className="flex flex-col items-start gap-6 p-0 w-full">
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="font-['Urbanist',Helvetica] font-semibold text-white text-xl lg:text-2xl leading-[1.2] lg:leading-9">
                        {property.title}
                      </h3>
                      <Badge className="bg-purple-60 text-white px-3 py-1 rounded-full">
                        {property.type}
                      </Badge>
                    </div>

                    <p className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-base lg:text-lg leading-[24px] lg:leading-[27px] w-full">
                      {property.description}
                    </p>

                    <div className="flex items-center gap-2 text-grey-60">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-['Urbanist',Helvetica] font-medium text-sm">
                        {property.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-start gap-2 w-full">
                    <Badge className="flex items-center gap-1 px-3 py-2 bg-grey-10 rounded-full border border-solid border-neutral-800 font-medium text-white text-sm">
                      <div className="relative w-4 h-4">
                        <img
                          className="absolute w-[14px] h-[11px] top-0.5 left-px"
                          alt="Bedroom icon"
                          src="/background-2-1.svg"
                        />
                      </div>
                      {property.bedrooms} Bed
                    </Badge>

                    <Badge className="flex items-center gap-1 px-3 py-2 bg-grey-10 rounded-full border border-solid border-neutral-800 font-medium text-white text-sm">
                      <div className="relative w-4 h-4">
                        <img
                          className="absolute w-[14px] h-[14px] top-0 left-px"
                          alt="Bathroom icon"
                          src="/background-2.svg"
                        />
                      </div>
                      {property.bathrooms} Bath
                    </Badge>

                    <Badge className="flex items-center gap-1 px-3 py-2 bg-grey-10 rounded-full border border-solid border-neutral-800 font-medium text-white text-sm">
                      <div className="relative w-4 h-4">
                        <img
                          className="absolute w-[11px] h-[12px] top-0.5 left-0.5"
                          alt="Area icon"
                          src="/subtract.svg"
                        />
                      </div>
                      {property.area} sqft
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between w-full pt-4 border-t border-neutral-800">
                    <div className="flex flex-col items-start gap-1">
                      <span className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-sm">
                        Price
                      </span>
                      <span className="font-['Urbanist',Helvetica] font-semibold text-white text-xl lg:text-2xl">
                        ${property.price.toLocaleString()}
                      </span>
                    </div>

                    <Button className="px-4 lg:px-6 py-3 bg-purple-60 rounded-lg font-['Urbanist',Helvetica] font-medium text-white text-sm lg:text-base hover:bg-purple-75 transition-colors">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <h3 className="font-['Urbanist',Helvetica] font-semibold text-white text-2xl mb-4">
                No Properties Found
              </h3>
              <p className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-lg mb-6">
                Try adjusting your filters to see more results.
              </p>
              <Button
                onClick={clearFilters}
                className="px-6 py-3 bg-purple-60 rounded-lg font-['Urbanist',Helvetica] font-medium text-white"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};