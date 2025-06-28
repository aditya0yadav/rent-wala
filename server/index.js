const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Import serializers
const {
  PropertySerializer,
  TestimonialSerializer,
  FAQSerializer,
  StatsSerializer
} = require('./models/serializers');

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

// Mock Database - In-memory storage
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
  }
];

let testimonials = [
  {
    id: 1,
    title: "Exceptional Service!",
    content: "Our experience with Rentwala was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    author: "Priya Sharma",
    location: "Gurgaon, Haryana",
    profileImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Efficient and Reliable",
    content: "Rentwala provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    author: "Rajesh Kumar",
    location: "Delhi, NCR",
    profileImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Trusted Advisors",
    content: "The Rentwala team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    author: "Amit Singh",
    location: "Noida, UP",
    profileImage: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

let faqs = [
  {
    id: 1,
    question: "How do I search for properties on Rentwala?",
    answer: "You can search for properties using our advanced search filters on the properties page. Filter by location, price range, property type, number of bedrooms, and more to find properties that match your criteria.",
    category: "Search",
    featured: true,
    order: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    question: "What documents do I need to sell my property through Rentwala?",
    answer: "To sell your property, you'll need: Property title deed, NOC from society/builder, Property tax receipts, Electricity and water bills, Identity proof, and Address proof. Our team will guide you through the complete documentation process.",
    category: "Selling",
    featured: true,
    order: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    question: "How can I contact a Rentwala agent?",
    answer: "You can contact our agents through multiple channels: Call our helpline, use the contact form on our website, chat with us online, or visit our offices in Gurgaon, Delhi, and Noida. Our agents are available 24/7 to assist you.",
    category: "Contact",
    featured: true,
    order: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 4,
    question: "What are the charges for Rentwala's services?",
    answer: "Our service charges vary based on the type of service. For buying, we charge 1% of property value. For selling, we charge 2% of the sale price. For rentals, we charge one month's rent. All charges are transparent with no hidden fees.",
    category: "Pricing",
    featured: false,
    order: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

let nextPropertyId = 3;
let nextTestimonialId = 4;
let nextFAQId = 5;

// Admin credentials
const adminCredentials = {
  username: 'admin',
  password: 'admin123'
};

// PROPERTY ROUTES

// Get all properties with filtering
app.get('/api/properties', (req, res) => {
  try {
    let filteredProperties = [...properties];
    
    // Apply filters
    if (req.query.minPrice) {
      filteredProperties = filteredProperties.filter(p => p.price >= parseInt(req.query.minPrice));
    }
    if (req.query.maxPrice) {
      filteredProperties = filteredProperties.filter(p => p.price <= parseInt(req.query.maxPrice));
    }
    if (req.query.city) {
      filteredProperties = filteredProperties.filter(p => 
        p.city.toLowerCase().includes(req.query.city.toLowerCase())
      );
    }
    if (req.query.type) {
      filteredProperties = filteredProperties.filter(p => 
        p.type.toLowerCase() === req.query.type.toLowerCase()
      );
    }
    if (req.query.bedrooms) {
      filteredProperties = filteredProperties.filter(p => p.bedrooms >= parseInt(req.query.bedrooms));
    }
    if (req.query.search) {
      const searchTerm = req.query.search.toLowerCase();
      filteredProperties = filteredProperties.filter(p => 
        p.title.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.location.toLowerCase().includes(searchTerm)
      );
    }
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
      data: PropertySerializer.serializeList(paginatedProperties),
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
      data: PropertySerializer.serialize(property)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching property',
      error: error.message
    });
  }
});

// TESTIMONIAL ROUTES

// Get all testimonials
app.get('/api/testimonials', (req, res) => {
  try {
    let filteredTestimonials = [...testimonials];
    
    if (req.query.featured === 'true') {
      filteredTestimonials = filteredTestimonials.filter(t => t.featured);
    }
    
    res.json({
      success: true,
      data: TestimonialSerializer.serializeList(filteredTestimonials)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching testimonials',
      error: error.message
    });
  }
});

// FAQ ROUTES

// Get all FAQs
app.get('/api/faqs', (req, res) => {
  try {
    let filteredFAQs = [...faqs];
    
    if (req.query.category) {
      filteredFAQs = filteredFAQs.filter(f => 
        f.category.toLowerCase() === req.query.category.toLowerCase()
      );
    }
    
    if (req.query.featured === 'true') {
      filteredFAQs = filteredFAQs.filter(f => f.featured);
    }
    
    // Sort by order
    filteredFAQs.sort((a, b) => a.order - b.order);
    
    res.json({
      success: true,
      data: filteredFAQs.map(faq => FAQSerializer.serialize(faq))
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching FAQs',
      error: error.message
    });
  }
});

// ADMIN ROUTES

// Admin login
app.post('/api/admin/login', (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (username === adminCredentials.username && password === adminCredentials.password) {
      res.json({
        success: true,
        message: 'Login successful',
        token: 'admin-token-' + Date.now()
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

// ADMIN PROPERTY ROUTES

// Get all properties for admin
app.get('/api/admin/properties', (req, res) => {
  try {
    res.json({
      success: true,
      data: PropertySerializer.serializeList(properties),
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

// Create new property
app.post('/api/admin/properties', upload.array('images', 10), (req, res) => {
  try {
    const images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];
    
    const propertyData = PropertySerializer.deserialize({
      ...req.body,
      images: images
    });
    
    const newProperty = {
      ...propertyData,
      id: nextPropertyId++
    };
    
    properties.push(newProperty);
    
    res.status(201).json({
      success: true,
      message: 'Property created successfully',
      data: PropertySerializer.serialize(newProperty)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating property',
      error: error.message
    });
  }
});

// Update property
app.put('/api/admin/properties/:id', upload.array('images', 10), (req, res) => {
  try {
    const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
    
    if (propertyIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Property not found'
      });
    }
    
    const newImages = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];
    const keepExistingImages = req.body.existingImages ? JSON.parse(req.body.existingImages) : [];
    const allImages = [...keepExistingImages, ...newImages];
    
    const updatedData = PropertySerializer.deserialize({
      ...req.body,
      images: allImages
    });
    
    const updatedProperty = {
      ...properties[propertyIndex],
      ...updatedData,
      id: properties[propertyIndex].id
    };
    
    properties[propertyIndex] = updatedProperty;
    
    res.json({
      success: true,
      message: 'Property updated successfully',
      data: PropertySerializer.serialize(updatedProperty)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating property',
      error: error.message
    });
  }
});

// Delete property
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
      data: PropertySerializer.serialize(deletedProperty)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting property',
      error: error.message
    });
  }
});

// ADMIN TESTIMONIAL ROUTES

// Get all testimonials for admin
app.get('/api/admin/testimonials', (req, res) => {
  try {
    res.json({
      success: true,
      data: TestimonialSerializer.serializeList(testimonials),
      total: testimonials.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching testimonials',
      error: error.message
    });
  }
});

// Create new testimonial
app.post('/api/admin/testimonials', upload.single('profileImage'), (req, res) => {
  try {
    const profileImage = req.file ? `/uploads/${req.file.filename}` : req.body.profileImage;
    
    const testimonialData = TestimonialSerializer.deserialize({
      ...req.body,
      profileImage: profileImage
    });
    
    const newTestimonial = {
      ...testimonialData,
      id: nextTestimonialId++
    };
    
    testimonials.push(newTestimonial);
    
    res.status(201).json({
      success: true,
      message: 'Testimonial created successfully',
      data: TestimonialSerializer.serialize(newTestimonial)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating testimonial',
      error: error.message
    });
  }
});

// Update testimonial
app.put('/api/admin/testimonials/:id', upload.single('profileImage'), (req, res) => {
  try {
    const testimonialIndex = testimonials.findIndex(t => t.id === parseInt(req.params.id));
    
    if (testimonialIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }
    
    const profileImage = req.file ? `/uploads/${req.file.filename}` : 
                        req.body.profileImage || testimonials[testimonialIndex].profileImage;
    
    const updatedData = TestimonialSerializer.deserialize({
      ...req.body,
      profileImage: profileImage
    });
    
    const updatedTestimonial = {
      ...testimonials[testimonialIndex],
      ...updatedData,
      id: testimonials[testimonialIndex].id
    };
    
    testimonials[testimonialIndex] = updatedTestimonial;
    
    res.json({
      success: true,
      message: 'Testimonial updated successfully',
      data: TestimonialSerializer.serialize(updatedTestimonial)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating testimonial',
      error: error.message
    });
  }
});

// Delete testimonial
app.delete('/api/admin/testimonials/:id', (req, res) => {
  try {
    const testimonialIndex = testimonials.findIndex(t => t.id === parseInt(req.params.id));
    
    if (testimonialIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      });
    }
    
    const deletedTestimonial = testimonials.splice(testimonialIndex, 1)[0];
    
    res.json({
      success: true,
      message: 'Testimonial deleted successfully',
      data: TestimonialSerializer.serialize(deletedTestimonial)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting testimonial',
      error: error.message
    });
  }
});

// ADMIN FAQ ROUTES

// Get all FAQs for admin
app.get('/api/admin/faqs', (req, res) => {
  try {
    res.json({
      success: true,
      data: faqs.map(faq => FAQSerializer.serialize(faq)),
      total: faqs.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching FAQs',
      error: error.message
    });
  }
});

// Create new FAQ
app.post('/api/admin/faqs', (req, res) => {
  try {
    const faqData = FAQSerializer.deserialize(req.body);
    
    const newFAQ = {
      ...faqData,
      id: nextFAQId++
    };
    
    faqs.push(newFAQ);
    
    res.status(201).json({
      success: true,
      message: 'FAQ created successfully',
      data: FAQSerializer.serialize(newFAQ)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating FAQ',
      error: error.message
    });
  }
});

// Update FAQ
app.put('/api/admin/faqs/:id', (req, res) => {
  try {
    const faqIndex = faqs.findIndex(f => f.id === parseInt(req.params.id));
    
    if (faqIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'FAQ not found'
      });
    }
    
    const updatedData = FAQSerializer.deserialize(req.body);
    
    const updatedFAQ = {
      ...faqs[faqIndex],
      ...updatedData,
      id: faqs[faqIndex].id
    };
    
    faqs[faqIndex] = updatedFAQ;
    
    res.json({
      success: true,
      message: 'FAQ updated successfully',
      data: FAQSerializer.serialize(updatedFAQ)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating FAQ',
      error: error.message
    });
  }
});

// Delete FAQ
app.delete('/api/admin/faqs/:id', (req, res) => {
  try {
    const faqIndex = faqs.findIndex(f => f.id === parseInt(req.params.id));
    
    if (faqIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'FAQ not found'
      });
    }
    
    const deletedFAQ = faqs.splice(faqIndex, 1)[0];
    
    res.json({
      success: true,
      message: 'FAQ deleted successfully',
      data: FAQSerializer.serialize(deletedFAQ)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting FAQ',
      error: error.message
    });
  }
});

// Get statistics
app.get('/api/admin/stats', (req, res) => {
  try {
    const stats = {
      totalProperties: properties.length,
      featuredProperties: properties.filter(p => p.featured).length,
      totalTestimonials: testimonials.length,
      totalFAQs: faqs.length,
      propertiesByType: {},
      propertiesByCity: {},
      averagePrice: 0,
      totalValue: 0
    };
    
    // Calculate statistics
    properties.forEach(property => {
      stats.propertiesByType[property.type] = (stats.propertiesByType[property.type] || 0) + 1;
      stats.propertiesByCity[property.city] = (stats.propertiesByCity[property.city] || 0) + 1;
      stats.totalValue += property.price;
    });
    
    stats.averagePrice = stats.totalProperties > 0 ? Math.round(stats.totalValue / stats.totalProperties) : 0;
    
    res.json({
      success: true,
      data: StatsSerializer.serialize(stats)
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