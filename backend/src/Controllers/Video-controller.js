// user controller
const videoModel=require("../Models/Video-model");

// get only user
module.exports.OnlyUser=async (req,res)=>{
    const id=req.params.id;
    await videoModel.findById({_id:id})
    .select("-password")
    .then(docs=>{
            res.status(201).json(docs);
        }).catch(err=>{
            console.log("no only user");
        })
}

// add video
module.exports.AddVideo=async (req,res)=>{
   
    if(req.files===null)
        return res.status(400).send({msg:"no file set"})
      
    const id=req.params.id
    const legend=req.body.legend;
    const video=req.files.video;
    const videoName=new Date().getTime()+video.name;
    const dataName=`/uploads/videos/${videoName}`

    await videoModel.findByIdAndUpdate(
        {_id:id},
        {
            $addToSet:{
                videos:{
                    videoLegend:legend,
                    video:dataName
                }
            }
        },
        {new:true,setDefaultsOnInsert:true,upsert:true}
    ).then(docs=>{
        if(docs){
            video.mv(`${__dirname}../../../../public/uploads/videos/${videoName}`,(err)=>{
                if(err){
                    console.log(err);
                    return res.status(400).send({msg:"no file set video"})
                }
                res.status(201).json(docs)
            })
        }
    }).catch(err=>{
        console.log(err);
    })
}

// get all user
module.exports.AllUser=async (req,res)=>{
    await videoModel.find()
        .select("-password")
        .select("-email")
        .select("-_id")
        .then(docs=>{
            res.status(201).json(docs);
        }).catch(err=>{
            res.status(200).json(err);
        })
}

// delete only user
module.exports.DeleteUser=async (req,res)=>{}

// update only user
module.exports.UpdateUser=async (req,res)=>{}

// Like user
module.exports.LikeUser=async (req,res)=>{}

// UnLike user
module.exports.UnLikeUser=async (req,res)=>{}

// comment user
module.exports.Addcomment=async (req,res)=>{}

// Deletecomment user
module.exports.Deletecomment=async (req,res)=>{}

// Deletecomment user
module.exports.Updatecomment=async (req,res)=>{}
