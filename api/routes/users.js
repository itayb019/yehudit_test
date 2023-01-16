import express from 'express';
import {validationResult} from 'express-validator';
import {checkAuth} from '../middlewares/checkAuth.js';
import {createUser, login} from '../controllers/users.js';
import {UserNameValidation, LogInValidation} from '../middlewares/users.js';

const router = express.Router();

router.post('/login', LogInValidation(), (req, res) => {
    console.log('start users/login');
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty())res.send(errors);
    else
        login(req, res);
});

router.post('/createUser', checkAuth, UserNameValidation(), (req, res) => {
    // console.log('start users/createUser');
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) res.send(errors);
    // else createUser(req, res);
    createUser(req, res);
})
router.use(express.json());

export default router;