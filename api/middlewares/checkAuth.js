import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
    console.log(req.headers.authorization)
    try{
        const token = req.headers.authorization.split(' ')[1];
        console.log(token)
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log('end try checkAuth');
        next();
    }catch(err){
        console.log(err)
        res.status(401).json({
            message: 'Auth failed',
            error: err.message
        })
    }
}

export {checkAuth};