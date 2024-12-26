const cloudinary = require('../config/cloudinaryConfig');
const ProductRespository = require('../repository/productRepository');
const fs = require('fs/promises');
const NotFoundError = require('../utils/notFoundError');
const InternalServerError = require('../utils/internalServerError');

async function createProduct(productDetails) {

    const imagePath = productDetails.imagePath;
    if(imagePath) {

        try {
            const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
            var productImage = cloudinaryResponse.secure_url;
            await fs.unlink(process.cwd() + "/" + imagePath);
        } catch(error){
            console.log(error);
            throw new InternalServerError;
        }
       
    }


    const product = await ProductRespository.createProduct({
        ...productDetails,
        productImage: productImage
    })
    
    return product;
   
    
}

async function getProductById(productId) {
    const response = await ProductRespository.getProductById(productId);
    if(!response) {
        throw new NotFoundError('Product');
    }
    return response;
}

async function getAllProductsData() {
    const response = await ProductRespository.getAllProducts();
    if(!response) {
        throw new NotFoundError('Product');
    }
    return response;
}

async function deleteProductById(productId) {
    const response = await ProductRespository.deleteProductById(productId);
    if(!response) {
        throw new NotFoundError('Product');
    }
    return response;
}



module.exports = {
    createProduct,
    getProductById,
    getAllProductsData,
    deleteProductById,
}