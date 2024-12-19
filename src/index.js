const express = require("express");
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const ServerConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");
const User = require("./schema/userSchema");
const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");
const authRouter = require("./routes/authRoute");
const { isLoggedIn } = require("./validation/authValidator");
const uploader = require("./middlewares/multerMiddleware");
const cloudinary = require("./config/cloudinaryConfig");
const fs = require("fs/promises");
const productRouter = require("./routes/productRoute");
const orderRouter = require("./routes/orderRoute")




const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.use('/users',userRouter);
app.use('/carts',cartRouter);
app.use('/auth',authRouter);
app.use('/products',productRouter);
app.use('/orders',orderRouter);

app.get("/ping", isLoggedIn,(req,res)=>{ 
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message:"pong"});
});

app.post('/photo', uploader.single('incomingFile'), async (req,res)=>{
    console.log(req.file);
    const result = await cloudinary.uploader.upload( req.file.path);
    console.log("result from cloudinary", result);
    await fs.unlink(req.file.path);
    return res.json({message : 'ok'})
})

app.listen(ServerConfig.PORT,async()=>{
    await connectDB();
    console.log(`server started at port ${ServerConfig.PORT}..!!`);   

    /*
    const newUser = await User.create({
        email: "abcwerfg@gmail.com",
        password: "123456",
        firstName: "joned",
        lastName: "dowert",
        mobileNumber: "1234567890"
    });

    console.log("Created New User");
    console.log(newUser);
    */
});  


//  adeshmahajan613

//  zNBLAFEIGUCeDOKD

//  mongodb+srv://adeshmahajan613:zNBLAFEIGUCeDOKD@cluster0.rwobf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0