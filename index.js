import express from 'express';
import cors from 'cors';
import booksRouter from './routes/books.js';
const Bookstore = booksRouter;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Bookstore API');
});

app.use('/books', Bookstore);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});