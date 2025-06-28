import React, { useState, useEffect } from "react";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Upload, 
  Save, 
  X,
  Home,
  TrendingUp,
  Users,
  DollarSign,
  Search,
  Filter,
  LogOut
} from "lucide-react";
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

interface Stats {
  totalProperties: number;
  featuredProperties: number;
  propertiesByType: Record<string, number>;
  propertiesByCity: Record<string, number>;
  averagePrice: number;
  totalValue: number;
}

export const AdminPage = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [properties, setProperties] = useState<Property[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [loading, setLoading] = useState(false);

  const [propertyForm, setPropertyForm] = useState({
    title: '',
    description: '',
    bedrooms: 1,
    bathrooms: 1,
    area: '',
    city: '',
    state: '',
    pincode: '',
    price: 0,
    type: 'Apartment',
    status: 'For Sale',
    featured: false,
    amenities: [] as string[],
    agentName: '',
    agentPhone: '',
    agentEmail: '',
    images: [] as File[]
  });

  const propertyTypes = ['Apartment', 'Villa', 'House', 'Townhouse', 'Penthouse', 'Loft'];
  const commonAmenities = [
    'Parking', 'Security', 'Power Backup', 'Water Supply', 'Elevator',
    'Swimming Pool', 'Gym', 'Garden', 'Club House', 'Internet'
  ];

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call - replace with actual API
      if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
        setIsLoggedIn(true);
        localStorage.setItem('adminToken', 'admin-token');
        await fetchProperties();
        await fetchStats();
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminToken');
    setProperties([]);
    setStats(null);
  };

  // Fetch properties
  const fetchProperties = async () => {
    try {
      // Simulate API call - replace with actual API
      const mockProperties: Property[] = [
        {
          id: 1,
          title: "Luxury Villa in DLF Phase 4",
          description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with modern amenities and premium finishes.",
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
          amenities: ["Swimming Pool", "Gym", "Garden", "Parking", "Security", "Power Backup"],
          images: ["https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400"],
          agent: {
            name: "Priya Sharma",
            phone: "+91 98765 43210",
            email: "priya@rentwala.com"
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
      setProperties(mockProperties);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  // Fetch statistics
  const fetchStats = async () => {
    try {
      // Simulate API call - replace with actual API
      const mockStats: Stats = {
        totalProperties: 25,
        featuredProperties: 8,
        propertiesByType: { 'Villa': 5, 'Apartment': 12, 'House': 8 },
        propertiesByCity: { 'Gurgaon': 10, 'Delhi': 8, 'Noida': 7 },
        averagePrice: 18500000,
        totalValue: 462500000
      };
      setStats(mockStats);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setPropertyForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  // Handle amenities change
  const handleAmenityChange = (amenity: string) => {
    setPropertyForm(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPropertyForm(prev => ({
        ...prev,
        images: Array.from(e.target.files || [])
      }));
    }
  };

  // Reset form
  const resetForm = () => {
    setPropertyForm({
      title: '',
      description: '',
      bedrooms: 1,
      bathrooms: 1,
      area: '',
      city: '',
      state: '',
      pincode: '',
      price: 0,
      type: 'Apartment',
      status: 'For Sale',
      featured: false,
      amenities: [],
      agentName: '',
      agentPhone: '',
      agentEmail: '',
      images: []
    });
    setShowAddForm(false);
    setEditingProperty(null);
  };

  // Handle property submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call - replace with actual API
      console.log('Submitting property:', propertyForm);
      
      if (editingProperty) {
        // Update existing property
        setProperties(prev => prev.map(p => 
          p.id === editingProperty.id 
            ? { ...p, ...propertyForm, updatedAt: new Date().toISOString() }
            : p
        ));
      } else {
        // Add new property
        const newProperty: Property = {
          id: Date.now(),
          ...propertyForm,
          location: `${propertyForm.city}, ${propertyForm.state}`,
          priceFormatted: `₹${propertyForm.price.toLocaleString('en-IN')}`,
          images: propertyForm.images.map(file => URL.createObjectURL(file)),
          agent: {
            name: propertyForm.agentName,
            phone: propertyForm.agentPhone,
            email: propertyForm.agentEmail
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        setProperties(prev => [newProperty, ...prev]);
      }
      
      resetForm();
      await fetchStats();
      alert(editingProperty ? 'Property updated successfully!' : 'Property added successfully!');
    } catch (error) {
      console.error('Error submitting property:', error);
      alert('Error submitting property');
    } finally {
      setLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setPropertyForm({
      title: property.title,
      description: property.description,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      area: property.area,
      city: property.city,
      state: property.state,
      pincode: property.pincode,
      price: property.price,
      type: property.type,
      status: property.status,
      featured: property.featured,
      amenities: property.amenities,
      agentName: property.agent.name,
      agentPhone: property.agent.phone,
      agentEmail: property.agent.email,
      images: []
    });
    setShowAddForm(true);
  };

  // Handle delete
  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        // Simulate API call - replace with actual API
        setProperties(prev => prev.filter(p => p.id !== id));
        await fetchStats();
        alert('Property deleted successfully!');
      } catch (error) {
        console.error('Error deleting property:', error);
        alert('Error deleting property');
      }
    }
  };

  // Filter properties
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !filterType || property.type === filterType;
    return matchesSearch && matchesType;
  });

  // Check if user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsLoggedIn(true);
      fetchProperties();
      fetchStats();
    }
  }, []);

  // Login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white hero-pattern flex items-center justify-center">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
              <p className="text-gray-600 mt-2">Access Rentwala Admin Panel</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <Input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                  placeholder="Enter username"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <Input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Enter password"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              Demo credentials: admin / admin123
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Rentwala Admin</h1>
                <p className="text-sm text-gray-600">Property Management System</p>
              </div>
            </div>
            
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Properties</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalProperties}</p>
                  </div>
                  <Home className="h-8 w-8 text-primary-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Featured Properties</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.featuredProperties}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Average Price</p>
                    <p className="text-2xl font-bold text-gray-900">₹{(stats.averagePrice / 10000000).toFixed(1)}Cr</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-primary-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Value</p>
                    <p className="text-2xl font-bold text-gray-900">₹{(stats.totalValue / 10000000).toFixed(0)}Cr</p>
                  </div>
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">All Types</option>
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <Button 
            onClick={() => setShowAddForm(true)}
            className="bg-primary-600 hover:bg-primary-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Property
          </Button>
        </div>

        {/* Properties Table */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProperties.map((property) => (
                    <tr key={property.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={property.images[0] || '/placeholder-property.jpg'}
                            alt={property.title}
                            className="w-12 h-12 rounded-lg object-cover mr-4"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{property.title}</div>
                            <div className="text-sm text-gray-500">{property.bedrooms}BR • {property.bathrooms}BA • {property.area}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                          {property.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {property.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {property.priceFormatted}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          property.featured 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {property.featured ? 'Featured' : 'Regular'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(property)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(property.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add/Edit Property Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingProperty ? 'Edit Property' : 'Add New Property'}
                </h2>
                <Button variant="outline" onClick={resetForm}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <Input
                      name="title"
                      value={propertyForm.title}
                      onChange={handleInputChange}
                      placeholder="Property title"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                    <select
                      name="type"
                      value={propertyForm.type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    >
                      {propertyTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    name="description"
                    value={propertyForm.description}
                    onChange={handleInputChange}
                    placeholder="Property description"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms *</label>
                    <Input
                      type="number"
                      name="bedrooms"
                      value={propertyForm.bedrooms}
                      onChange={handleInputChange}
                      min="1"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms *</label>
                    <Input
                      type="number"
                      name="bathrooms"
                      value={propertyForm.bathrooms}
                      onChange={handleInputChange}
                      min="1"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area *</label>
                    <Input
                      name="area"
                      value={propertyForm.area}
                      onChange={handleInputChange}
                      placeholder="e.g., 1200 sq ft"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹) *</label>
                    <Input
                      type="number"
                      name="price"
                      value={propertyForm.price}
                      onChange={handleInputChange}
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <Input
                      name="city"
                      value={propertyForm.city}
                      onChange={handleInputChange}
                      placeholder="e.g., Gurgaon"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <Input
                      name="state"
                      value={propertyForm.state}
                      onChange={handleInputChange}
                      placeholder="e.g., Haryana"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                    <Input
                      name="pincode"
                      value={propertyForm.pincode}
                      onChange={handleInputChange}
                      placeholder="e.g., 122001"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {commonAmenities.map(amenity => (
                      <label key={amenity} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={propertyForm.amenities.includes(amenity)}
                          onChange={() => handleAmenityChange(amenity)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Agent Name *</label>
                    <Input
                      name="agentName"
                      value={propertyForm.agentName}
                      onChange={handleInputChange}
                      placeholder="Agent name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Agent Phone *</label>
                    <Input
                      name="agentPhone"
                      value={propertyForm.agentPhone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Agent Email *</label>
                    <Input
                      type="email"
                      name="agentEmail"
                      value={propertyForm.agentEmail}
                      onChange={handleInputChange}
                      placeholder="agent@rentwala.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Images</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <span className="text-sm text-gray-600">Click to upload images</span>
                    </label>
                    {propertyForm.images.length > 0 && (
                      <p className="text-sm text-green-600 mt-2">
                        {propertyForm.images.length} image(s) selected
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={propertyForm.featured}
                      onChange={handleInputChange}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">Featured Property</span>
                  </label>
                </div>

                <div className="flex items-center justify-end space-x-4 pt-6 border-t">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-primary-600 hover:bg-primary-700"
                    disabled={loading}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {loading ? 'Saving...' : editingProperty ? 'Update Property' : 'Add Property'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};