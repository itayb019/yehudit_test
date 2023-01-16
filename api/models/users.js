import {run} from '../db/connect.js';
import 'dotenv/config';

const createUserModel = async (data) => {
    console.log('createUserModel ', data);
    const sql = `select * from bya.language_labels`;
    try {
        return await run(sql)
    } catch (err) {
        console.log('createUserModel err');
        console.log(err);
    }
    return true;
}

const logInModel = async (data) => {
    console.log('logInModel ', data)
    return true;
}

export {
    createUserModel,
    logInModel
};