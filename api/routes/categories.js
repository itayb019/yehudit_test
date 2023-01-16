import express from 'express';
const router = express.Router();

import {getAllCategories, createCategory, updateCategory, deleteCategory} from '../controllers/categories.js';

router.get('/', getAllCategories);
router.post('/', createCategory);
router.patch('/:categoryId', updateCategory);
router.delete('/:categoryId', deleteCategory);

export default router;