# REST API - MVC Learning Project

A RESTful API built with Node.js, Express, and MongoDB demonstrating the Model-View-Controller (MVC) pattern for managing subscribers.


## Overview

This is an educational project designed to practice building a complete REST API using the MVC architectural pattern. The API handles CRUD operations for a subscriber management system with proper separation of concerns.

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB & Mongoose** - Database and ODM
- **Dotenv** - Environment variables management
- **Nodemon** - Development auto-reload

## Project Structure

```
Rest_API/
├── app.js                    # Main application entry point
├── package.json              # Dependencies configuration
├── .env                      # Environment variables (DATABASE_URL)
├── request.rest              # API test requests
├── models/
│   └── subscriber.js         # Subscriber schema (MODEL)
├── controller/
│   └── subscribersControl.js # Business logic (CONTROLLER)
└── routes/
    └── subscribers.js        # API endpoints (VIEW/ROUTER)
```

## MVC Architecture

### Model (`models/subscriber.js`)
Defines the data structure for subscribers:
- `name` (String, required) - Subscriber name
- `subscribedToChannel` (String, required) - Channel subscription
- `subscriberDate` (Date, required) - Subscription date (auto-set to current date)

### Controller (`controller/subscribersControl.js`)
Contains all business logic for handling requests:
- `getAllSubscriber()` - Fetch all subscribers
- `getOneSubscriber()` - Fetch single subscriber
- `createOneSubscriber()` - Create new subscriber
- `updateOneSubscriber()` - Update subscriber details (PATCH)
- `deleteOneSubscriber()` - Delete subscriber
- `getSubscriber()` - Middleware to fetch subscriber by ID

### View/Routes (`routes/subscribers.js`)
API endpoints that expose controller functions:
- `GET /subscribers` - Get all subscribers
- `POST /subscribers` - Create new subscriber
- `GET /subscribers/:id` - Get specific subscriber
- `PATCH /subscribers/:id` - Update subscriber (partial)
- `DELETE /subscribers/:id` - Delete subscriber

## Installation

1. Navigate to the project directory:
```bash
cd Rest_API
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your MongoDB connection:
```
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/database-name
```

## Usage

### Start the Server

Development mode (with auto-reload):
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Get All Subscribers
```
GET /subscribers
```
**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "subscribedToChannel": "Tech Channel",
    "subscriberDate": "2024-01-15T10:30:00.000Z"
  }
]
```

### Create Subscriber
```
POST /subscribers
Content-Type: application/json

{
  "name": "Jane Smith",
  "channel": "Learning Channel"
}
```
**Response:** (Status 201)
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "name": "Jane Smith",
  "subscribedToChannel": "Learning Channel",
  "subscriberDate": "2024-01-16T14:20:00.000Z"
}
```

### Get Single Subscriber
```
GET /subscribers/:id
```
**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "subscribedToChannel": "Tech Channel",
  "subscriberDate": "2024-01-15T10:30:00.000Z"
}
```

### Update Subscriber (PATCH)
```
PATCH /subscribers/:id
Content-Type: application/json

{
  "name": "John Updated",
  "channel": "New Channel"
}
```
**Note:** PATCH only updates provided fields, not the entire document.

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Updated",
  "subscribedToChannel": "New Channel",
  "subscriberDate": "2024-01-15T10:30:00.000Z"
}
```

### Delete Subscriber
```
DELETE /subscribers/:id
```
**Response:**
```json
{
  "message": "Subscriber deleted successefully"
}
```

## Key Learning Points

1. **MVC Pattern** - Clear separation between Models (data), Controllers (logic), and Routes (endpoints)
2. **Middleware** - Using `getSubscriber()` as middleware to fetch and attach subscriber to response object
3. **HTTP Methods**:
   - GET - Retrieve data
   - POST - Create new resource
   - PATCH - Partial update (only specified fields)
   - DELETE - Remove resource
4. **Error Handling** - Try-catch blocks with appropriate HTTP status codes
5. **Mongoose Integration** - Schema definition and CRUD operations
6. **Async/Await** - Modern async patterns for database operations
7. **Environment Variables** - Sensitive data management with `.env`

## HTTP Status Codes Used

- `200 OK` - Successful GET request
- `201 Created` - Successful POST request
- `400 Bad Request` - Invalid data submitted
- `404 Not Found` - Resource doesn't exist
- `500 Internal Server Error` - Server error

## Testing

Use the included `request.rest` file with REST Client extensions (VS Code) or tools like Postman/curl to test endpoints.

Example with curl:
```bash
# Get all subscribers
curl http://localhost:5000/subscribers

# Create subscriber
curl -X POST http://localhost:5000/subscribers \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","channel":"Test Channel"}'

# Get specific subscriber
curl http://localhost:5000/subscribers/507f1f77bcf86cd799439011

# Update subscriber
curl -X PATCH http://localhost:5000/subscribers/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name"}'

# Delete subscriber
curl -X DELETE http://localhost:5000/subscribers/507f1f77bcf86cd799439011
```

## Next Steps for Learning

- Add authentication (JWT tokens)
- Implement request validation middleware
- Add pagination and filtering
- Create unit tests
- Implement caching strategies
- Add API documentation (Swagger/OpenAPI)
- Deploy to cloud platform (Heroku, AWS, etc.)

# Note
This project is meant for learning and demonstration purposes. It is not production-ready and should be enhanced with proper security, validation, and error handling for real-world applications.

## License

Apache-2.0 License
