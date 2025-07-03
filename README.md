
# Bookstore API (MongoDB Version)

A simple RESTful API for a Bookstore built with Express.js and MongoDB (using Mongoose). This API allows you to manage books and comments, supporting CRUD operations and keyword search. Designed for learning and demonstration purposes.

## Features
- List all books
- Search books by keyword (title, category, or description)
- Get details of a specific book by ID
- Filter books by category
- Add, update, and delete books
- Get and add comments for a specific book
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm
- MongoDB (local or cloud, e.g. MongoDB Atlas)

### Installation
1. Clone this repository or download the source code.
2. Navigate to the `bookstore-api-mongodb` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your MongoDB connection string in a `.env` file or directly in the code (if required).

### Running the Server
Start the server with:
```bash
node app.js
```
The server will run on [http://localhost:8080](http://localhost:8080) by default.

## API Endpoints

### Get All Books / Search Books
- **URL:** `/books`
- **Method:** `GET`
- **Query Param (optional):** `keyword` (searches title, category, and description, case-insensitive)
- **Response:** Array of books

### Get Book by ID
- **URL:** `/books/:id`
- **Method:** `GET`
- **Response:** Book object with the specified ID

### Get Books by Category
- **URL:** `/books/category/:category`
- **Method:** `GET`
- **Response:** Array of books in the specified category

### Add a Book
- **URL:** `/books`
- **Method:** `POST`
- **Body:**
```json
{
  "title": "Book Title",
  "category": "Category",
  "description": "Book description"
}
```
- **Response:** Created book object

### Update a Book
- **URL:** `/books/:bookId`
- **Method:** `PUT`
- **Body:**
```json
{
  "title": "Updated Title",
  "category": "Updated Category",
  "description": "Updated description"
}
```
- **Response:** Updated book object

### Delete a Book
- **URL:** `/books/:bookId`
- **Method:** `DELETE`
- **Response:** Deleted book object (status 204)

### Get Comments for a Book
- **URL:** `/books/:id/comments`
- **Method:** `GET`
- **Response:** Array of comments for the specified book

### Add Comment to a Book
- **URL:** `/books/:id/comments`
- **Method:** `POST`
- **Body:**
```json
{
  "name": "Your Name",
  "message": "Your comment"
}
```
- **Response:** Created comment object

## Data Structure

### Book
```json
{
  "_id": "ObjectId",
  "title": "Book Title",
  "category": "Category",
  "description": "Book description"
}
```

### Comment
```json
{
  "_id": "ObjectId",
  "bookId": "Book ObjectId",
  "name": "Commenter Name",
  "message": "Comment text"
}
```

## Notes
- All data is stored in MongoDB using Mongoose models.
- This project is for educational purposes and does not include authentication or advanced error handling.

## License
MIT
