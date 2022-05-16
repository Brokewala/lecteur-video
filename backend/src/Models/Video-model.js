const mongoose=require("mongoose");
const {isEmail}=require("validator");
const bcrypt=require("bcrypt");

const schemaVideo=mongoose.Schema({
    nom:{
        type:String,
        require:true,
        trim:true
    },
    prenom:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        validator:[isEmail],
        trim:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
    ,
    img:{
        type:String,
        trim:true
    },
    videos:{
        type:[
            {
                videoLegend:{
                    type:String,
                    trim:true
                },
                video:{
                    type:String,
                    trim:true
                }
            }
        ]
    }
},{
    timestamps:true
});

// crypt le password
schemaVideo.pre("save",async function(next){
    const hash=await bcrypt.hashSync(this.password,10);
    this.password=hash;
    next();
})

// login
schemaVideo.statics.login=async function(email,password){
    const user=await this.findOne({email:email});
    if(user){
        const auth=await bcrypt.compareSync(password,user.password);
        if(auth){
            return user._id;
        }
         throw Error("incorect password")
    }
    throw Error("incorect email")
}

module.exports=mongoose.model("video",schemaVideo)