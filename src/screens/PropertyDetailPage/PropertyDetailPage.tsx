import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Home,
  Download,
  Eye,
  Phone, 
  Mail, 
  User,
  Calendar,
  Heart,
  Share2,
  ChevronLeft,
  MessageCircle,
  ChevronRight,
  Star,
  Menu,
  X
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

interface Property {
  id: number;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  location: string;
  city: string;
  state: string;
  pincode: string;
  price: number;
  priceFormatted: string;
  type: string;
  status: string;
  featured: boolean;
  amenities: string[];
  images: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const PropertyDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showMobileActions, setShowMobileActions] = useState(false);

  // Mock data - replace with actual API call
  const mockProperty: Property = {
    id: 1,
    title: "Luxury Villa in DLF Phase 4",
    description: "Experience luxury living at its finest in this stunning 4-bedroom villa located in the prestigious DLF Phase 4, Gurgaon. This meticulously designed property features spacious rooms with premium finishes, a beautiful landscaped garden, and modern amenities that cater to every need. The villa boasts high ceilings, large windows that flood the space with natural light, and an open-plan layout perfect for both family living and entertaining. Located in one of Gurgaon's most sought-after neighborhoods, this property offers the perfect blend of tranquility and connectivity to major business hubs.",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sq ft",
    location: "Gurgaon, Haryana",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122001",
    price: 25000000,
    priceFormatted: "₹2,50,00,000",
    type: "Villa",
    status: "For Sale",
    featured: true,
    amenities: [
      "Swimming Pool", "Gym & Fitness Center", "Landscaped Garden", "Covered Parking", 
      "24/7 Security", "Power Backup", "Water Supply", "Club House", 
      "Children's Play Area", "Jogging Track", "24/7 Maintenance", "High-Speed Elevator",
      "Wi-Fi Ready", "Intercom Facility", "CCTV Surveillance", "Fire Safety"
    ],
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    agent: {
      name: "Priya Sharma",
      phone: "+91 98765 43210",
      email: "priya@rentwala.com"
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  useEffect(() => {
    // Simulate API call
    const fetchProperty = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        setTimeout(() => {
          setProperty(mockProperty);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching property:', error);
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const nextImage = () => {
    if (property) {
      setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    }
  };

  const prevImage = () => {
    if (property) {
      setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const amenityIcons: { [key: string]: any } = {
    "Swimming Pool": "🏊‍♂️",
    "Gym & Fitness Center": "🏋️",
    "Landscaped Garden": "🌳",
    "Covered Parking": "🚗",
    "24/7 Security": "🛡️",
    "Power Backup": "⚡",
    "Water Supply": "💧",
    "Club House": "🏛️",
    "Children's Play Area": "🎪",
    "Jogging Track": "🏃‍♂️",
    "24/7 Maintenance": "🔧",
    "High-Speed Elevator": "🛗",
    "Wi-Fi Ready": "📶",
    "Intercom Facility": "📞",
    "CCTV Surveillance": "📹",
    "Fire Safety": "🚨"
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-base font-semibold text-gray-900 mb-2">Loading Property Details</h3>
          <p className="text-gray-600 text-sm">Please wait while we fetch the information...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="h-8 w-8 text-gray-400" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6 text-sm">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties">
            <Button className="bg-primary-600 hover:bg-primary-700 w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link to="/properties">
              <Button variant="outline" className="flex items-center space-x-2 hover:bg-gray-50 text-sm">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            </Link>
            
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsFavorite(!isFavorite)}
                className={`${isFavorite ? 'text-red-600 border-red-600 bg-red-50' : 'hover:bg-gray-50'} text-sm`}
              >
                <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                {isFavorite ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" className="hover:bg-gray-50 text-sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" className="hover:bg-gray-50 text-sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            {/* Mobile Actions Menu */}
            <div className="md:hidden">
              <Button
                variant="outline"
                onClick={() => setShowMobileActions(true)}
                className="p-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Actions Modal */}
      {showMobileActions && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl p-4 space-y-4 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900">Actions</h3>
              <Button
                variant="ghost"
                onClick={() => setShowMobileActions(false)}
                className="p-2"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <Button
                variant="outline"
                onClick={() => {
                  setIsFavorite(!isFavorite);
                  setShowMobileActions(false);
                }}
                className={`w-full justify-start text-sm ${isFavorite ? 'text-red-600 border-red-600 bg-red-50' : ''}`}
              >
                <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share Property
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm">
                <Download className="h-4 w-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Property Header */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-primary-600 text-white px-2 py-1 text-xs">
                    {property.type}
                  </Badge>
                  {property.featured && (
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs">
                      ⭐ Featured
                    </Badge>
                  )}
                  <Badge variant="outline" className="border-green-600 text-green-600 px-2 py-1 text-xs">
                    {property.status}
                  </Badge>
                </div>
                
                <div>
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                    {property.title}
                  </h1>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-primary-600 flex-shrink-0" />
                    <span className="text-sm">{property.location} - {property.pincode}</span>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                      {property.priceFormatted}
                    </div>
                    <div className="text-gray-600 text-sm">
                      <span>Price per sq ft: </span>
                      <span className="font-semibold">₹{Math.round(property.price / parseInt(property.area.replace(/[^\d]/g, '')))}</span>
                    </div>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                      <Bed className="h-5 w-5 text-primary-600" />
                    </div>
                    <p className="text-xl font-bold text-gray-900">{property.bedrooms}</p>
                    <p className="text-xs text-gray-600 font-medium">Bedrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                      <Bath className="h-5 w-5 text-primary-600" />
                    </div>
                    <p className="text-xl font-bold text-gray-900">{property.bathrooms}</p>
                    <p className="text-xs text-gray-600 font-medium">Bathrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                      <Square className="h-5 w-5 text-primary-600" />
                    </div>
                    <p className="text-xl font-bold text-gray-900">{property.area}</p>
                    <p className="text-xs text-gray-600 font-medium">Total Area</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div className="relative h-48 md:h-64 lg:h-96">
                  <img
                    src={property.images[currentImageIndex]}
                    alt={property.title}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setShowImageModal(true)}
                  />
                  
                  {/* Navigation Arrows */}
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </>
                  )}

                  {/* Image Counter & View All */}
                  <div className="absolute top-2 right-2 flex flex-col space-y-2">
                    <div className="bg-black/50 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                      {currentImageIndex + 1} / {property.images.length}
                    </div>
                    <button
                      onClick={() => setShowImageModal(true)}
                      className="bg-black/50 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm hover:bg-black/70 transition-colors duration-300 flex items-center justify-center space-x-1"
                    >
                      <Eye className="h-3 w-3" />
                      <span>View All</span>
                    </button>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Thumbnail Gallery */}
                {property.images.length > 1 && (
                  <div className="p-2 bg-gray-50">
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      {property.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'border-primary-600 shadow-lg scale-105' 
                              : 'border-gray-200 hover:border-gray-300 hover:scale-105'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${property.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Property Description</h2>
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Amenities & Features</h2>
              <div className="grid grid-cols-2 gap-2">
                {property.amenities.map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity];
                  return (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300 group">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300 flex-shrink-0">
                        {typeof IconComponent === 'string' ? (
                          <span className="text-sm">{IconComponent}</span>
                        ) : (
                          <IconComponent className="h-3 w-3 text-primary-600 group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-primary-700 transition-colors duration-300 text-xs">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Agent Contact Card */}
            {/* <Card className="border-0 shadow-md sticky top-16 bg-white">
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {property.agent.name}
                  </h3>
                  <p className="text-gray-600 text-xs">Property Specialist</p>
                  <div className="flex items-center justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-1 text-xs text-gray-600">(4.9)</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <Phone className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                    <Mail className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm break-all">{property.agent.email}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-primary-600 hover:bg-primary-700 py-2 text-sm font-semibold">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full py-2 text-sm font-semibold border-primary-600 text-primary-600 hover:bg-primary-50">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="w-full py-2 text-sm font-semibold">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Visit
                  </Button>
                </div>
              </CardContent>
            </Card> */}

            {/* Property Information */}
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-4">Property Details</h3>
                <div className="space-y-2">
                  {[
                    { label: "Property ID", value: `#RW${property.id.toString().padStart(4, '0')}` },
                    { label: "Property Type", value: property.type },
                    { label: "Status", value: property.status },
                    { label: "City", value: property.city },
                    { label: "State", value: property.state },
                    { label: "Pincode", value: property.pincode },
                    { label: "Listed On", value: new Date(property.createdAt).toLocaleDateString('en-IN') },
                    { label: "Last Updated", value: new Date(property.updatedAt).toLocaleDateString('en-IN') }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-600 text-xs">{item.label}:</span>
                      <span className="font-semibold text-gray-900 text-xs text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-md bg-gradient-to-br from-primary-600 to-primary-700 text-white">
              <CardContent className="p-4">
                <h3 className="text-base font-bold mb-3">Interested in this property?</h3>
                <p className="text-primary-100 mb-4 text-xs">
                  Get instant updates and exclusive offers on similar properties.
                </p>
                <div className="space-y-2">
                  <Button variant="secondary" className="w-full bg-white text-primary-600 hover:bg-gray-100 text-sm">
                    <Heart className="mr-2 h-4 w-4" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary-600 text-sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2">
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-2 right-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="relative">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
            
            <div className="flex justify-center mt-2 space-x-1">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};