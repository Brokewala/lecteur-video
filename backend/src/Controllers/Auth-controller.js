const videoModel=require("../Models/Video-model");
const jwt=require("jsonwebtoken");

// token
const maxAge=3*24*60*60*1000;//durre du cookier

// creation de token
const createToken=(id)=>{//creation de token
    return jwt.sign({id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'3d'});
}

// login
module.exports.login=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    videoModel.login(email,password).then((result) => {
        const token=createToken(result);
        res.cookie("jwt",token,{httpOnly:true,maxAge:maxAge})
        res.status(201).json({
            token:token
        });
    }).catch((err) => {
        res.status(200).json(err);
    });
}

// signup
module.exports.signup=async (req,res)=>{
    const nom=req.body.nom;
    const prenom=req.body.prenom;
    const email=req.body.email;
    const password=req.body.password;

    const newVideoModel=new videoModel({
        nom,
        prenom,
        email,
        password
    });
    newVideoModel.save();
    res.status(200).json({msg:"successfull"})
}

// logout
module.exports.logout=async ()=>{}


// refresh token
module.exports.refreshToken= async (req,res)=>{
    const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(" ")[1];//Bearer token
    if(!token){
        res.sendStatus(401);
    }
    
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err){
           res.sendStatus(401);
        }
        // check en BDD que le user a toujour les droit et qu 'il exit toujour
        delete user.iat;
        delete user.exp;

        const refreshhedToken=createToken(user);
        res.send({
            accessToken:refreshhedToken
        })
    })
}
