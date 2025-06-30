import { Router } from "express";
import fs from 'fs';

const router = Router({mergeParams: true});

const comments = JSON.parse(fs.readFileSync('comments.json', 'utf-8'));



router.get('/', (req, res) => {
    const result = comments.filter((item, index) => {
        return item.bookId == parseInt(req.params.id)
    })

    res.json(result)
});

export default router