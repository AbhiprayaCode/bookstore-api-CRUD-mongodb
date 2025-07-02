import { Router } from "express";
import Comment from "../models/comments.model.js";

const router = Router({mergeParams: true});

router.get('/', async (req, res) => {
    const result = await Comment.find()
    res.json(result)
});

router.post('/', async (req, res) => {
    try {
        const { name, message } = req.body;
        const bookId = req.params.id;
        if (!bookId || !name || !message) {
            return res.status(400).json({ error: 'bookId (from URL), name, and message are required.' });
        }
        const createComment = await Comment.create({
            bookId,
            name,
            message
        });
        res.status(201).json(createComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router