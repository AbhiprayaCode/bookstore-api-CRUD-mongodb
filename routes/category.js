import { Router } from "express";
import Category from "../models/categories.model.js";

const router = Router();

router.get('/', async (req, res) => {
    const {keyword} = req.query

    if (!keyword) {
        return res.json(await Category.find());
    }

    const result = await Category.find({
        name: { $regex: keyword, $options: 'i' }
    });
    res.json(result);
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    const createCategory = await Category.create({
        name
    })
    res.status(201).json(createCategory)
})

export default router