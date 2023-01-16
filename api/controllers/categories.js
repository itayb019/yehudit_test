const getAllCategories = async (req, res) => {
    console.log('start getAllCategories');
    res.status(200).json({
        message: 'Get All Categories'
    })
};

const createCategory = async (req, res) => {
    res.status(200).json({
        message: 'Create a new Category'
    })
};

const updateCategory = async (req, res) => {
    const categoryId = req.params.categoryId

    res.status(200).json({
        message: `Update Category- ${categoryId}`
    })
};

const deleteCategory = async (req, res) => {
    // const categoryId = req.body.categoryId;
    const categoryId = 1;

    res.status(200).json({
        message: `Delete Category- ${categoryId}`
    })
};

export {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
};