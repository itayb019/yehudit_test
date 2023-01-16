import express from 'express';
const router = express.Router();

import {getAllArticles, createArticle, updateArticle, deleteArticle, checkDepartments} from '../controllers/articles.js';
import {LogInValidation, UserNameValidation} from "../middlewares/users.js";
import {validationResult} from "express-validator";
import {createUser, login} from "../controllers/users.js";
import {checkAuth} from "../middlewares/checkAuth.js";

router.post('/getAllArticles', getAllArticles);

router.post('/', createArticle);
router.patch('/:articleId', updateArticle);
router.delete('/:articleId', deleteArticle);

router.post('/checkDepartments', (req, res) => {checkDepartments(req, res);})

export default router;