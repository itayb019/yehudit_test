import {body} from 'express-validator';


function UserNameValidation(req, res) {
    return [
        body('firstName')
            .exists()
            .withMessage('firstName must be exists')
            .isString(),
        body('lastName')
            .exists()
            .withMessage('lastName must be exists')
            .isString(),
        body('phone')
            .exists()
            .withMessage('phone must be exists')
            .isNumeric()
            .withMessage('phone must be numeric'),
        body('city')
            .exists()
            .withMessage('city must be exists')
            .isString(),
        body('email')
            .exists()
            .withMessage('email must be exists')
            .isEmail(),];
}

function LogInValidation(req, res) {
    return [
        body('username')
            .exists()
            .withMessage('username must be exists')
            .isString(),
        body('password')
            .exists()
            .withMessage('password must be exists')
            .isLength({min: 8})
            .withMessage('password must be min 8 chars'),
    ];
}

export {
    UserNameValidation,
    LogInValidation
};