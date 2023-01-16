import jwt from 'jsonwebtoken';
import {createUserModel} from '../models/users.js';
import 'dotenv/config.js';

const signup = async (req, res) => {

};

const login = async (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    console.log('start login ', req.body.username, req.body.password);
    console.log(process.env.ACCESS_TOKEN_SECRET);
    let token = '';
    try {
        console.log('start try jwt');
        token = jwt.sign({
                username: req.body.username,
                password: req.body.password,
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "1D"
            });
        console.log('end try');
    } catch (err) {
        console.log('err');
        console.log(err);
    }
    console.log('start send res');
    res.send({
        message: 'Login',
        token: token,
        user: req.body,
    });
};

const createUser = async (req, res) => {
    console.log('createUser controller');
    try {
        const response = await createUserModel(req.body)
        if (response)
            res.send({message: 'user created', response: response})
    } catch (error) {
        console.log('createUser error ', error);
    }
};

export {
    signup,
    login,
    createUser,
};
