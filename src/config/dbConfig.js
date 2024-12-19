const mongoose = require('mongoose');
const serverConfig = require("./serverConfig")

async function commectDB() {
    try {
          await mongoose.connect(serverConfig.DB_URL);
          console.log("successfully connected to the server");
    } catch (error) {
           console.log("Not able to connect the server");
           console.log(error);
    }    
};


module.exports = commectDB;