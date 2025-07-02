import { Router } from "express";
import commentsRouter from "./comment.js";
import categoryRouter from "./category.js";
import Book from '../models/books.model.js'

const router = Router();

// READ
router.get('/', async (req, res) => {
    const { keyword } = req.query;
    if (!keyword) {
        return res.json(await Book.find());
    }

    const result = await Book.find({
        $or: [
            { title: { $regex: keyword, $options: 'i' } },
            { category: { $regex: keyword, $options: 'i' } }

            // Turn this comment off if you want to search by description
            // { description: { $regex: keyword, $options: 'i' } }
        ]
    });
    res.json(result);
});

// POST
router.post('/', async (req, res)=> {
    const {title, category, description} = req.body;

    const createBook = await Book.create({
        title,
        category,
        description
    })
    
    res.status(201).json(createBook);
})

// UPDATE
router.put('/:bookId', async (req, res)=> {
    const bookId = req.params.bookId;
    const {title, category, description} = req.body;

    const updatedBook = await Book.findByIdAndUpdate(bookId, {
        title,
        category,
        description
    }, {
        returnDocument: 'after'
    })

    res.json(updatedBook);
})

// DEELETE
router.delete("/:bookId", async (req, res)=> {
    const bookId = req.params.bookId;
    const deletedBook = await Book.findByIdAndDelete(bookId);
    res.status(204).json(deletedBook);
})

// Find by ID
router.get('/:id', async (req, res) => {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    res.json(book);
})

// Find by Category
router.get('/category/:category', async (req, res) => {
    const bookCategory = req.params.category;
    const book = await Book.find({category: bookCategory});
    res.json(book);
})

// Comments
router.use('/:id/comments', commentsRouter)

export default router