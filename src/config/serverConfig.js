const dotenv = require("dotenv");
dotenv.config(); 


module.exports = {
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL,
    JWT_SECRET : process.env.JWT_SECRET,
    JWT_EXPIRY : process.env.JWT_EXPIRY,
    CLOUDINARY_API_SECRET : process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_API_KEY : process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_CLOUD_NAME : process.env.CLOUDINARY_CLOUD_NAME,
    COOKIE_SECURE : process.env.COOKIE_SECURE,
    FRONTEND_URL: process.env.FRONTEND_URL,
}