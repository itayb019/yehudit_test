import {run} from "../db/connect.js";
import {LogInValidation} from "../middlewares/users.js";

const getAllArticlesModel = async (data) => {
    return true;
}

const createArticleModel = async (data) => {
    return true;
}

const updateArticleModel = async (data) => {
    return true;
}

const deleteArticleModel = async (data) => {
    return true;
}

const checkDepartmentsModel = async (data) => {
    const departments = `(${data.toString()})`
    const bind = [departments];
    // const sql = `// select label_id from bya.language_labels where rownum=1`;
    const sql = `select * from bya.company_departments where department_id in:departments`;
    try {
        const response = await run(sql, bind)
        return ({message: 'Department exist', response: response})
    } catch (err) {
        console.log('createUserModel err ',err);
        return false;
    }
}

// const checkDepartmentsModel = async (data) => {
//     console.log('data ',data)
//     console.log('data ',data.toString())
//     const departments = `(${data.toString()})`
//     console.log('departments ',departments)
//     const bind = [departments];
//     const sql = `select * from bya.company_departments where department_id in $departments`;
//     try {
//         return await run(sql, data)
//     } catch (err) {
//         console.log('createUserModel err');
//         console.log(err);
//         return false;
//     }
// }

export {
    getAllArticlesModel,
    createArticleModel,
    updateArticleModel,
    deleteArticleModel,
    checkDepartmentsModel,
};