import { Router } from "express";
import commentsRouter from "./comment.js";
import fs from 'fs';

const router = Router();

const dummyBooks = fs.readFileSync('books.json', 'utf-8');
let books = JSON.parse(dummyBooks);

router.get('/', (req, res) => {
    const {search} = req.query;
    let result = books

    if (search) {
        const lowerSearch = search.toLowerCase()
        result = books.filter(
            book => book.title.toLowerCase().includes(lowerSearch) || book.category.toLowerCase().includes(lowerSearch)
        )
    }

    res.json(result)     
});

// POST
router.post('/', (req, res)=> {
    const {title, category, description} = req.body;
    const id = books[books.length - 1].id + 1;
    const newBook = {
        id,
        title,
        category,
        description,
        rating : 0
    }
    books.push(newBook);
    res.status(201).json(newBook);
})

// UPDATE
router.put('/:bookId', (req, res)=> {
    const bookId = req.params.bookId;
    const {title, category, description} = req.body;
    const idx = books.findIndex((item)=> item.id==bookId);
    const book = books[idx];

    book.title = title;
    book.category = category;
    book.description = description;

    res.json(book);
})

// DEELETE
router.delete("/:bookId", (req, res)=> {
    const bookId = Number(req.params.bookId);
    books = books.filter((item, idx)=> {
        return item.id !== bookId;
    })
    res.status(204).json(books);
})

router.get('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.filter((item, index) => {
        return item.id == bookId
    })
    res.json(book);
})

router.get('/category/:category', (req, res) => {
    const bookCategory = req.params.category;
    const book = books.filter((item, index) => {
        return item.category == bookCategory
    });
    res.json(book);
})

router.use('/:id/comments', commentsRouter)



export default router