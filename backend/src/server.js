const { checkUser, requireAuth } = require("./Middleware/Auth-middleware");
const fileUpload=require("express-fileupload");
const router = require("./Routes/video-router");
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const app=express();
require("dotenv").config();


// option
const corsOption={
    origin:process.env.CLIENT_URL,
    credentials:true,
    'allowedHeaders':['sessionId','Content-Type'],
    'exposedHeaders':['sessionId'],
    'methods':'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue':false

}
// mongoose
mongoose.connect(process.env.MONGODB_URL,()=>{console.log("Connect en base de donne!");})

// use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(cors(corsOption));
app.use(cookieParser());

// jwt
app.get("*",checkUser);
app.get("/jwtId",requireAuth,(req,res)=>{
    res.status(200).send(res.locals.user._id);
});
// router
app.use("/api",router);

app.listen(process.env.PORT,()=>{
    console.log(`Server localhost:${process.env.PORT}`);
})