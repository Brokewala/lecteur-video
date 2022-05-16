const jwt=require("jsonwebtoken");
const videoModel=require("../Models/Video-model");

// check user  if token already exist
module.exports.checkUser=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,async (err,decodedToken)=>{
            if(err){
                res.locals.user=null;
                res.cookie("jwt","",{maxAge:1});
                next();
            }else{
                let user=await videoModel.findById(decodedToken.id);
                res.locals.user=user;
                next();
            }
        })
    }else{
        res.locals.user=null;
        next();
    }

}

// require authentifiaction
module.exports.requireAuth=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,async (err,decodedToken)=>{
            if(err){
                res.status(200).json("no token err")
            }else{
                next();
            }
        })
    }else{
        console.log("no token");
    }
}