import React, { useState } from "react";
import { Search, MapPin, Bed, Bath, Square, Filter, SlidersHorizontal, Grid, List, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

interface Property {
  id: number;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  location: string;
  price: number;
  priceFormatted: string;
  type: string;
  status: string;
  featured: boolean;
  images: string[];
}

export const PropertiesPage = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const properties: Property[] = [
    {
      id: 1,
      title: "Luxury Villa in DLF Phase 4",
      description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with modern amenities and premium finishes...",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,500 sq ft",
      location: "Gurgaon, Haryana",
      price: 25000000,
      priceFormatted: "₹2,50,00,000",
      type: "Villa",
      status: "For Sale",
      featured: true,
      images: ["https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"]
    },
    {
      id: 2,
      title: "Modern Apartment in Connaught Place",
      description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views in the heart of Delhi...",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      location: "Delhi, NCR",
      price: 17500000,
      priceFormatted: "₹1,75,00,000",
      type: "Apartment",
      status: "For Sale",
      featured: true,
      images: ["https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"]
    },
    {
      id: 3,
      title: "Premium Townhouse in Sector 62",
      description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community with world-class amenities...",
      bedrooms: 3,
      bathrooms: 3,
      area: "1,800 sq ft",
      location: "Noida, UP",
      price: 12500000,
      priceFormatted: "₹1,25,00,000",
      type: "Townhouse",
      status: "For Sale",
      featured: true,
      images: ["https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"]
    },
    {
      id: 4,
      title: "Contemporary Loft in Cyber City",
      description: "Modern loft with industrial design elements and premium finishes in the business district of Gurgaon...",
      bedrooms: 1,
      bathrooms: 1,
      area: "900 sq ft",
      location: "Gurgaon, Haryana",
      price: 8500000,
      priceFormatted: "₹85,00,000",
      type: "Loft",
      status: "For Sale",
      featured: false,
      images: ["https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"]
    },
    {
      id: 5,
      title: "Spacious Family Home in Greater Kailash",
      description: "Spacious family home with large garden, perfect for growing families in one of Delhi's premium localities...",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,200 sq ft",
      location: "Delhi, NCR",
      price: 45000000,
      priceFormatted: "₹4,50,00,000",
      type: "House",
      status: "For Sale",
      featured: true,
      images: ["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"]
    },
    {
      id: 6,
      title: "Luxury Penthouse in Sector 50",
      description: "Exclusive penthouse with panoramic city views, premium amenities, and private terrace in Noida...",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,100 sq ft",
      location: "Noida, UP",
      price: 32500000,
      priceFormatted: "₹3,25,00,000",
      type: "Penthouse",
      status: "For Sale",
      featured: true,
      images: ["https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800"]
    },
  ];

  const priceRanges = [
    "All Prices",
    "Under ₹50L",
    "₹50L - ₹1Cr",
    "₹1Cr - ₹2Cr",
    "₹2Cr - ₹5Cr",
    "Over ₹5Cr"
  ];

  const locations = [
    "All Locations",
    "Gurgaon, Haryana",
    "Delhi, NCR",
    "Noida, UP",
    "Faridabad, Haryana",
    "Ghaziabad, UP"
  ];

  const propertyTypes = [
    "All Types",
    "House",
    "Apartment",
    "Villa",
    "Townhouse",
    "Loft",
    "Penthouse"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white hero-pattern py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 animate-slide-up">
              Find Your <span className="text-primary-600 animate-pulse-slow">Perfect Property</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover exceptional properties that match your lifestyle and budget in India's prime locations. 
              Use our advanced filters to find exactly what you're looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Search Bar */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="px-4 py-3">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(true)}
              className="px-3 py-2 border-primary-600 text-primary-600"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Search and Filter Section */}
      <section className="hidden lg:block py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border-0 animate-scale-in">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Search Input */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search properties..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                  >
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Search Button */}
                <div>
                  <Button className="w-full bg-primary-600 hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <Filter className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>

              {/* Additional Filters */}
              <div className="mt-4 pt-4 border-t border-gray-200 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center space-x-2">
                    <SlidersHorizontal className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Property Type:</span>
                  </div>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 hover:shadow-md"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl p-6 space-y-6 animate-slide-up max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <Button
                variant="ghost"
                onClick={() => setShowFilters(false)}
                className="p-2"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(false)}
                className="flex-1"
              >
                Clear All
              </Button>
              <Button
                onClick={() => setShowFilters(false)}
                className="flex-1 bg-primary-600 hover:bg-primary-700"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Properties Grid */}
      <section className="py-6 sm:py-8 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with View Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0 animate-fade-in">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Available Properties</h2>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">{properties.length} properties found</p>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end space-x-4">
              {/* View Mode Toggle - Hidden on mobile */}
              <div className="hidden sm:flex items-center space-x-2 bg-white rounded-lg p-1 border">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-primary-600 text-white' : ''}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-primary-600 text-white' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 hidden sm:inline">Sort by:</span>
                <select className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 hover:shadow-md bg-white">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Bedrooms</option>
                </select>
              </div>
            </div>
          </div>

          {/* Properties Grid/List */}
          <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {properties.map((property, index) => (
              <Card key={property.id} className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg overflow-hidden hover:-translate-y-1 animate-scale-in ${
                viewMode === 'list' ? 'sm:flex sm:flex-row' : ''
              }`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'sm:w-80 sm:flex-shrink-0' : ''
                }`}>
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                      viewMode === 'list' ? 'h-48 sm:h-full' : 'h-48 sm:h-56 lg:h-64'
                    }`}
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <Badge className="bg-primary-600 text-white text-xs animate-bounce-in">
                      {property.type}
                    </Badge>
                    {property.featured && (
                      <Badge variant="secondary" className="bg-white/90 text-gray-900 text-xs animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className={`p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1 ${
                  viewMode === 'list' ? 'flex flex-col justify-between' : ''
                }`}>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1 group-hover:text-primary-600 transition-colors duration-300 flex-shrink-0" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 sm:line-clamp-3">
                      {property.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center justify-center p-2 bg-gray-50 rounded-lg group-hover:text-primary-600 transition-colors duration-300">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="font-medium">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-gray-50 rounded-lg group-hover:text-primary-600 transition-colors duration-300">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="font-medium">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-gray-50 rounded-lg group-hover:text-primary-600 transition-colors duration-300">
                      <Square className="h-4 w-4 mr-1" />
                      <span className="font-medium text-xs">{property.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200">
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600">Price</p>
                      <p className="text-xl sm:text-2xl font-bold text-primary-600 animate-pulse-slow">{property.priceFormatted}</p>
                    </div>
                    <Link to={`/properties/${property.id}`}>
                      <Button className="bg-primary-600 hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg text-sm sm:text-base px-4 sm:px-6">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg" className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-in px-8 py-3" style={{ animationDelay: '0.8s' }}>
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our expert agents are here to help you find the perfect property that meets all your requirements in India's prime locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
                Contact an Agent
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
              Schedule a Viewing
            </Button>
          </div>
        </div>
        
        {/* Background Decorations */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </section>
    </div>
  );
};