import { Router } from "express";
import commentsRouter from "./comment.js";
import fs from 'fs';
const router = Router();


const dummyBooks = fs.readFileSync('books.json', 'utf-8');
const books = JSON.parse(dummyBooks);

router.get('/', (req, res) => {
        res.json(books);        
});

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