import express from 'express';
const app = express();

import articlesRoutes from './api/routes/articles.js';
import categoriesRoutes from './api/routes/categories.js';
import usersRoutes from './api/routes/users.js';
import { checkAuth } from './api/middlewares/checkAuth.js';

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.use(express.json());

//Routes
app.use('/api/articles', checkAuth, articlesRoutes);
app.use('/api/categories', checkAuth, categoriesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

export default app;