/*
const User = require("../schema/userSchema");



  async function findUser(parameters) {

        try{
          const response = await User.findOne({ ...parameters });
          return response;
        }catch(error){
          console.log(error);
        }
       
  }

  async function createUser(userDetails) {

        try{
            const response = await User.create(userDetails);
            return response;
        }catch(error) {
          console.log(error);
        }
       
  }

module.exports = {
  findUser,
  createUser
};
*/


const User = require('../schema/userSchema');
//const BadRequestError = require('../utils/badRequestError');
//const InternalServerError = require('../utils/internalServerError');

async function findUser(parameters) {
    try {
        const response = await User.findOne({ ...parameters });
        return response;
    } catch(error) {
        console.log(error);
    }
    
} 

async function createUser(userDetails) {
    try {
        const response = await User.create(userDetails);
        return response;
    } catch(error) {
      console.log(error);
    }
            
           
};
    
    


module.exports = {
    findUser,
    createUser
};

