const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

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
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Sample properties data (in a real app, this would be in a database)
let properties = [
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
    createdAt: new Date().toISOString()
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
    createdAt: new Date().toISOString()
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
    createdAt: new Date().toISOString()
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
    createdAt: new Date().toISOString()
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
    createdAt: new Date().toISOString()
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
    createdAt: new Date().toISOString()
  }
];

// Routes

// GET /api/properties - Get all properties with optional filtering
app.get('/api/properties', (req, res) => {
  try {
    let filteredProperties = [...properties];
    
    // Apply filters
    const { minPrice, maxPrice, location, bedrooms, type, page = 1, limit = 10 } = req.query;
    
    if (minPrice) {
      filteredProperties = filteredProperties.filter(p => p.price >= parseInt(minPrice));
    }
    
    if (maxPrice) {
      filteredProperties = filteredProperties.filter(p => p.price <= parseInt(maxPrice));
    }
    
    if (location) {
      filteredProperties = filteredProperties.filter(p => 
        p.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (bedrooms) {
      filteredProperties = filteredProperties.filter(p => p.bedrooms >= parseInt(bedrooms));
    }
    
    if (type) {
      filteredProperties = filteredProperties.filter(p => 
        p.type.toLowerCase().includes(type.toLowerCase())
      );
    }
    
    // Pagination
    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = startIndex + parseInt(limit);
    const paginatedProperties = filteredProperties.slice(startIndex, endIndex);
    
    res.json({
      properties: paginatedProperties,
      total: filteredProperties.length,
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages: Math.ceil(filteredProperties.length / parseInt(limit))
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/properties/:id - Get a single property by ID
app.get('/api/properties/:id', (req, res) => {
  try {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/properties - Create a new property
app.post('/api/properties', upload.single('image'), (req, res) => {
  try {
    const { title, description, price, location, bedrooms, bathrooms, type, area } = req.body;
    
    // Validation
    if (!title || !description || !price || !location || !bedrooms || !bathrooms || !type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const newProperty = {
      id: Math.max(...properties.map(p => p.id)) + 1,
      title,
      description,
      price: parseInt(price),
      location,
      bedrooms: parseInt(bedrooms),
      bathrooms: parseInt(bathrooms),
      type,
      area: area ? parseInt(area) : null,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      createdAt: new Date().toISOString()
    };
    
    properties.push(newProperty);
    
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/properties/:id - Update a property
app.put('/api/properties/:id', upload.single('image'), (req, res) => {
  try {
    const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
    
    if (propertyIndex === -1) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    const { title, description, price, location, bedrooms, bathrooms, type, area } = req.body;
    
    // Update property
    const updatedProperty = {
      ...properties[propertyIndex],
      ...(title && { title }),
      ...(description && { description }),
      ...(price && { price: parseInt(price) }),
      ...(location && { location }),
      ...(bedrooms && { bedrooms: parseInt(bedrooms) }),
      ...(bathrooms && { bathrooms: parseInt(bathrooms) }),
      ...(type && { type }),
      ...(area && { area: parseInt(area) }),
      ...(req.file && { image: `/uploads/${req.file.filename}` }),
      updatedAt: new Date().toISOString()
    };
    
    properties[propertyIndex] = updatedProperty;
    
    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/properties/:id - Delete a property
app.delete('/api/properties/:id', (req, res) => {
  try {
    const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
    
    if (propertyIndex === -1) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    // Remove image file if it exists
    const property = properties[propertyIndex];
    if (property.image && property.image.startsWith('/uploads/')) {
      const imagePath = path.join(__dirname, '..', property.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    
    properties.splice(propertyIndex, 1);
    
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/locations - Get all unique locations
app.get('/api/locations', (req, res) => {
  try {
    const locations = [...new Set(properties.map(p => p.location))];
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/property-types - Get all unique property types
app.get('/api/property-types', (req, res) => {
  try {
    const types = [...new Set(properties.map(p => p.type))];
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/stats - Get property statistics
app.get('/api/stats', (req, res) => {
  try {
    const stats = {
      totalProperties: properties.length,
      averagePrice: Math.round(properties.reduce((sum, p) => sum + p.price, 0) / properties.length),
      priceRange: {
        min: Math.min(...properties.map(p => p.price)),
        max: Math.max(...properties.map(p => p.price))
      },
      locationCount: [...new Set(properties.map(p => p.location))].length,
      typeCount: [...new Set(properties.map(p => p.type))].length
    };
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large' });
    }
  }
  
  res.status(500).json({ error: error.message });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api`);
});