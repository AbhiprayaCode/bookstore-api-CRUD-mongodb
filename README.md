# Bookstore API

A simple RESTful API for a Bookstore built with Express.js. This API allows you to retrieve information about books and their comments. It is designed for learning and demonstration purposes.

## Features
- List all books
- Get details of a specific book by ID
- Filter books by category
- Get comments for a specific book
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation
1. Clone this repository or download the source code.
2. Navigate to the `bookstore-api` directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
Start the server with:
```bash
node index.js
```
The server will run on [http://localhost:8080](http://localhost:8080).

## API Endpoints

### Get All Books
- **URL:** `/books`
- **Method:** `GET`
- **Response:** Array of all books

### Get Book by ID
- **URL:** `/books/:id`
- **Method:** `GET`
- **Response:** Book object with the specified ID

### Get Books by Category
- **URL:** `/books/category/:category`
- **Method:** `GET`
- **Response:** Array of books in the specified category

### Get Comments for a Book
- **URL:** `/books/:id/comments`
- **Method:** `GET`
- **Response:** Array of comments for the specified book

## Data Structure

### Book
```json
{
  "id": 1,
  "title": "Atomic Habits",
  "category": "self-help",
  "description": "A guide to building good habits and breaking bad ones by James Clear.",
  "rating": 4.8
}
```

### Comment
```json
{
  "id": 1,
  "name": "Alice",
  "message": "Absolutely loved this book, couldn't stop reading!",
  "bookId": 1
}
```

## Notes
- All data is stored in local JSON files (`books.json` and `comments.json`).
- This project is for educational purposes and does not include authentication or persistent storage.

## License
MIT
