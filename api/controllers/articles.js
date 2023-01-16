import {getAllArticlesModel, createArticleModel, updateArticleModel, deleteArticleModel, checkDepartmentsModel} from '../models/articles.js';

const getAllArticles = async (req, res) => {
    console.log('cccccccccccccccccccccccccccccccccccccccccccccccccccccccc')
    console.log('controller getAllArticles: ', req.body)
    try {
        const response = await getAllArticlesModel(req.body)
        if (response)
            res.status(200).json({
                message: 'get all articles'
            })
    } catch (err) {
        console.log('err ', err)
        res.status(200).json({
            message: err
        })
    }
};

const createArticle = async (req, res) => {
    console.log('controller createArticle: ', req.body)
    try {
        const response = await createArticleModel(req.body)
        if (response)
            res.status(200).json({
                message: 'create articles'
            })
    } catch (err) {
        console.log('err ', err)
        res.status(200).json({
            message: err
        })
    }
};

const updateArticle = async (req, res) => {
    console.log('controller updateArticle: ', req.body)
    try {
        const response = await updateArticleModel(req.body)
        if (response)
            res.status(200).json({
                message: 'update articles'
            })
    } catch (err) {
        console.log('err ', err)
        res.status(200).json({
            message: err
        })
    }
};

const deleteArticle = async (req, res) => {
    console.log('controller deleteArticle: ', req.body)
    try {
        const response = await deleteArticleModel(req.body)
        if (response)
            res.status(200).json({
                message: 'delete articles'
            })
    } catch (err) {
        console.log('err ', err)
        res.status(200).json({
            message: err
        })
    }
};

const checkDepartments = async (req, res) => {
    console.log('controller checkDepartments: ', req.body)
    try {
        const result = await checkDepartmentsModel(req.body)
        if (result) {
            console.log('result ', result)
            // res.send({message: 'Department exist', response: response})
            res.send({result})
        }
    } catch (err) {
        console.log('err ', err)
        res.status(200).json({
            message: err
        })
    }
};

export {
    getAllArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    checkDepartments,
};