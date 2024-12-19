/*
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [2, "First name must be minimum 2 character"],
        lowercase: true,
        trim: true,
        maxlength: [20, "First name should be less than or equal to 20 charecter"],
    },

    lastName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [2, "First name must be minimum 2 character"],
        lowercase: true,
        trim: true,
        maxlength: [20, "First name should be less than or equal to 20 charecter"],
    },

    mobileNumber: {
        type: String,
        trim: true,
        unique: [true, "phone number is alrady used"],
        required: [true, "phone number should be provided"],
        maxlength: [10, "Mobile Number should be equal to 20 charecter"],
        minlength: [10, "Mobile Number must be 10 character"],
    },

    email: {
        type: String,
        trim: true,
        required: [true, "email should be provided"],
        unique: [true, "email number is alrady used"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },

    password: { 
    type: String, 
    required: [true, "password should be provided"],
    minlength: [6, "Password must be minimum 2 character"],
},


},
{
    timestamps: true,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
*/


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({ 
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [5, "First name must be atleast 5 character long"],
        lowercase: true,
        trim: true, // if the user gives extra spaces then it will automatically remove it
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },

    lastName: {
        type: String,
        minlength: [5, "First name must be atleast 5 character long"],
        lowercase: true,
        trim: true, // if the user gives extra spaces then it will automatically remove it
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },

    mobileNumber: {
        type: String,
        trim: true,
        maxlength: [10, "Phone number should be of length 10"],
        minlength: [10, "Phone number should be of length 10"],
        unique: [true, "Phone number is already in use"],
        required: [true, "Phone number should be provided"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email should be provoided"],
        unique: [true, "Email is already in use"],
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password should be provided"],
        minlength: [6, "Password should be minimum 6 character long"]
    },

    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },

    address: {
        type: String
    }
   
}, {
    timestamps: true
});

userSchema.pre('save', async function () {
    // here u can modify your user before it is ssaved in mongodb
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
});

const User = mongoose.model("User", userSchema); // collection

module.exports = User;



