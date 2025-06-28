const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Mock Database - In-memory storage (replace with real database later)
let properties = [
  {
    id: 1,
    title: "Luxury Villa in DLF Phase 4",
    description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with modern amenities and premium finishes. This property features spacious rooms, a beautiful garden, and is located in one of Gurgaon's most prestigious areas.",
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
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    agent: {
      name: "Priya Sharma",
      phone: "+91 98765 43210",
      email: "priya@rentwala.com"
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Modern Apartment in Connaught Place",
    description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views in the heart of Delhi. Perfect for professionals and small families looking for a premium living experience in the capital.",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    location: "Delhi, NCR",
    city: "Delhi",
    state: "Delhi",
    pincode: "110001",
    price: 17500000,
    priceFormatted: "₹1,75,00,000",
    type: "Apartment",
    status: "For Sale",
    featured: true,
    amenities: ["Elevator", "Parking", "Security", "Power Backup", "Water Supply"],
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    agent: {
      name: "Rajesh Kumar",
      phone: "+91 87654 32109",
      email: "rajesh@rentwala.com"
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Premium Townhouse in Sector 62",
    description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community with world-class amenities. Located in Noida's prime sector with excellent connectivity and modern infrastructure.",
    bedrooms: 3,
    bathrooms: 3,
    area: "1,800 sq ft",
    location: "Noida, UP",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201309",
    price: 12500000,
    priceFormatted: "₹1,25,00,000",
    type: "Townhouse",
    status: "For Sale",
    featured: true,
    amenities: ["Club House", "Swimming Pool", "Gym", "Parking", "Security", "Garden"],
    images: [
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    agent: {
      name: "Anita Singh",
      phone: "+91 76543 21098",
      email: "anita@rentwala.com"
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 4,
    title: "Contemporary Loft in Cyber City",
    description: "Modern loft with industrial design elements and premium finishes in the business district of Gurgaon. Perfect for young professionals working in the IT sector.",
    bedrooms: 1,
    bathrooms: 1,
    area: "900 sq ft",
    location: "Gurgaon, Haryana",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122002",
    price: 8500000,
    priceFormatted: "₹85,00,000",
    type: "Loft",
    status: "For Sale",
    featured: false,
    amenities: ["Parking", "Security", "Power Backup", "Internet"],
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    agent: {
      name: "Vikram Gupta",
      phone: "+91 65432 10987",
      email: "vikram@rentwala.com"
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 5,
    title: "Spacious Family Home in Greater Kailash",
    description: "Spacious family home with large garden, perfect for growing families in one of Delhi's premium localities. Features traditional architecture with modern amenities.",
    bedrooms: 5,
    bathrooms: 4,
    area: "3,200 sq ft",
    location: "Delhi, NCR",
    city: "Delhi",
    state: "Delhi",
    pincode: "110048",
    price: 45000000,
    priceFormatted: "₹4,50,00,000",
    type: "House",
    status: "For Sale",
    featured: true,
    amenities: ["Garden", "Parking", "Security", "Power Backup", "Water Supply", "Servant Quarter"],
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    agent: {
      name: "Meera Joshi",
      phone: "+91 54321 09876",
      email: "meera@rentwala.com"
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 6,
    title: "Luxury Penthouse in Sector 50",
    description: "Exclusive penthouse with panoramic city views, premium amenities, and private terrace in Noida. The epitome of luxury living with world-class facilities.",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,100 sq ft",
    location: "Noida, UP",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
    price: 32500000,
    priceFormatted: "₹3,25,00,000",
    type: "Penthouse",
    status: "For Sale",
    featured: true,
    amenities: ["Private Terrace", "Elevator", "Parking", "Security", "Power Backup", "Gym", "Swimming Pool"],
    images: [
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    agent: {
      name: "Arjun Malhotra",
      phone: "+91 43210 98765",
      email: "arjun@rentwala.com"
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

let nextId = 7;

// Admin credentials (in production, use proper authentication)
const adminCredentials = {
  username: 'admin',
  password: 'admin123'
};

// API Routes

// Get all properties with filtering
app.get('/api/properties', (req, res) => {
  try {
    let filteredProperties = [...properties];
    
    // Filter by price range
    if (req.query.minPrice) {
      filteredProperties = filteredProperties.filter(p => p.price >= parseInt(req.query.minPrice));
    }
    if (req.query.maxPrice) {
      filteredProperties = filteredProperties.filter(p => p.price <= parseInt(req.query.maxPrice));
    }
    
    // Filter by location/city
    if (req.query.city) {
      filteredProperties = filteredProperties.filter(p => 
        p.city.toLowerCase().includes(req.query.city.toLowerCase())
      );
    }
    
    // Filter by property type
    if (req.query.type) {
      filteredProperties = filteredProperties.filter(p => 
        p.type.toLowerCase() === req.query.type.toLowerCase()
      );
    }
    
    // Filter by bedrooms
    if (req.query.bedrooms) {
      filteredProperties = filteredProperties.filter(p => p.bedrooms >= parseInt(req.query.bedrooms));
    }
    
    // Search by title or description
    if (req.query.search) {
      const searchTerm = req.query.search.toLowerCase();
      filteredProperties = filteredProperties.filter(p => 
        p.title.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.location.toLowerCase().includes(searchTerm)
      );
    }
    
    // Filter by featured
    if (req.query.featured === 'true') {
      filteredProperties = filteredProperties.filter(p => p.featured);
    }
    
    // Sort properties
    const sortBy = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.sortOrder || 'desc';
    
    filteredProperties.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'price') {
        aValue = parseInt(aValue);
        bValue = parseInt(bValue);
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    
    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const paginatedProperties = filteredProperties.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      data: paginatedProperties,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredProperties.length / limit),
        totalProperties: filteredProperties.length,
        hasNext: endIndex < filteredProperties.length,
        hasPrev: startIndex > 0
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching properties',
      error: error.message
    });
  }
});

// Get single property by ID
app.get('/api/properties/:id', (req, res) => {
  try {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    
    if (!property) {
      return res.status(404).json({
        success: false,
        message: 'Property not found'
      });
    }
    
    res.json({
      success: true,
      data: property
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching property',
      error: error.message
    });
  }
});

// Admin login
app.post('/api/admin/login', (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (username === adminCredentials.username && password === adminCredentials.password) {
      res.json({
        success: true,
        message: 'Login successful',
        token: 'admin-token-' + Date.now() // Simple token for demo
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Login error',
      error: error.message
    });
  }
});

// Admin: Get all properties
app.get('/api/admin/properties', (req, res) => {
  try {
    res.json({
      success: true,
      data: properties,
      total: properties.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching properties',
      error: error.message
    });
  }
});

// Admin: Create new property
app.post('/api/admin/properties', upload.array('images', 10), (req, res) => {
  try {
    const {
      title,
      description,
      bedrooms,
      bathrooms,
      area,
      city,
      state,
      pincode,
      price,
      type,
      status,
      featured,
      amenities,
      agentName,
      agentPhone,
      agentEmail
    } = req.body;
    
    // Process uploaded images
    const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];
    
    const newProperty = {
      id: nextId++,
      title,
      description,
      bedrooms: parseInt(bedrooms),
      bathrooms: parseInt(bathrooms),
      area,
      location: `${city}, ${state}`,
      city,
      state,
      pincode,
      price: parseInt(price),
      priceFormatted: `₹${parseInt(price).toLocaleString('en-IN')}`,
      type,
      status,
      featured: featured === 'true',
      amenities: typeof amenities === 'string' ? JSON.parse(amenities) : amenities,
      images,
      agent: {
        name: agentName,
        phone: agentPhone,
        email: agentEmail
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    properties.push(newProperty);
    
    res.status(201).json({
      success: true,
      message: 'Property created successfully',
      data: newProperty
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating property',
      error: error.message
    });
  }
});

// Admin: Update property
app.put('/api/admin/properties/:id', upload.array('images', 10), (req, res) => {
  try {
    const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
    
    if (propertyIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Property not found'
      });
    }
    
    const {
      title,
      description,
      bedrooms,
      bathrooms,
      area,
      city,
      state,
      pincode,
      price,
      type,
      status,
      featured,
      amenities,
      agentName,
      agentPhone,
      agentEmail,
      existingImages
    } = req.body;
    
    // Process uploaded images
    const newImages = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];
    const keepExistingImages = existingImages ? JSON.parse(existingImages) : [];
    const allImages = [...keepExistingImages, ...newImages];
    
    const updatedProperty = {
      ...properties[propertyIndex],
      title,
      description,
      bedrooms: parseInt(bedrooms),
      bathrooms: parseInt(bathrooms),
      area,
      location: `${city}, ${state}`,
      city,
      state,
      pincode,
      price: parseInt(price),
      priceFormatted: `₹${parseInt(price).toLocaleString('en-IN')}`,
      type,
      status,
      featured: featured === 'true',
      amenities: typeof amenities === 'string' ? JSON.parse(amenities) : amenities,
      images: allImages,
      agent: {
        name: agentName,
        phone: agentPhone,
        email: agentEmail
      },
      updatedAt: new Date().toISOString()
    };
    
    properties[propertyIndex] = updatedProperty;
    
    res.json({
      success: true,
      message: 'Property updated successfully',
      data: updatedProperty
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating property',
      error: error.message
    });
  }
});

// Admin: Delete property
app.delete('/api/admin/properties/:id', (req, res) => {
  try {
    const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
    
    if (propertyIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Property not found'
      });
    }
    
    const deletedProperty = properties.splice(propertyIndex, 1)[0];
    
    res.json({
      success: true,
      message: 'Property deleted successfully',
      data: deletedProperty
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting property',
      error: error.message
    });
  }
});

// Get property statistics
app.get('/api/admin/stats', (req, res) => {
  try {
    const stats = {
      totalProperties: properties.length,
      featuredProperties: properties.filter(p => p.featured).length,
      propertiesByType: {},
      propertiesByCity: {},
      averagePrice: 0,
      totalValue: 0
    };
    
    // Calculate statistics
    properties.forEach(property => {
      // By type
      stats.propertiesByType[property.type] = (stats.propertiesByType[property.type] || 0) + 1;
      
      // By city
      stats.propertiesByCity[property.city] = (stats.propertiesByCity[property.city] || 0) + 1;
      
      // Total value
      stats.totalValue += property.price;
    });
    
    stats.averagePrice = stats.totalProperties > 0 ? Math.round(stats.totalValue / stats.totalProperties) : 0;
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching statistics',
      error: error.message
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB.'
      });
    }
  }
  
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: error.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Admin credentials: username=admin, password=admin123');
});