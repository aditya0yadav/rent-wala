# Real Estate API Server

This is a Node.js/Express API server for managing real estate properties.

## Features

- **CRUD Operations**: Create, Read, Update, Delete properties
- **Image Upload**: Support for property image uploads
- **Filtering**: Filter properties by price, location, bedrooms, type
- **Pagination**: Paginated property listings
- **Statistics**: Get property statistics and insights

## API Endpoints

### Properties

- `GET /api/properties` - Get all properties with optional filtering and pagination
  - Query parameters:
    - `minPrice` - Minimum price filter
    - `maxPrice` - Maximum price filter
    - `location` - Location filter (partial match)
    - `bedrooms` - Minimum bedrooms filter
    - `type` - Property type filter (partial match)
    - `page` - Page number (default: 1)
    - `limit` - Items per page (default: 10)

- `GET /api/properties/:id` - Get a single property by ID

- `POST /api/properties` - Create a new property
  - Body (form-data):
    - `title` (required)
    - `description` (required)
    - `price` (required)
    - `location` (required)
    - `bedrooms` (required)
    - `bathrooms` (required)
    - `type` (required)
    - `area` (optional)
    - `image` (optional file upload)

- `PUT /api/properties/:id` - Update a property
  - Same body parameters as POST (all optional)

- `DELETE /api/properties/:id` - Delete a property

### Utility Endpoints

- `GET /api/locations` - Get all unique locations
- `GET /api/property-types` - Get all unique property types
- `GET /api/stats` - Get property statistics

## Running the Server

```bash
npm run server
```

The server will start on port 3001 by default.

## File Uploads

Images are uploaded to the `uploads/` directory and served statically at `/uploads/filename`.

## Data Storage

Currently uses in-memory storage. In production, you would replace this with a proper database like PostgreSQL, MongoDB, etc.