const router=require("express").Router();
const authController=require("../Controllers/Auth-controller");
const videoController=require("../Controllers/Video-controller");

// auth router
router.post("/signup",authController.signup)
router.post("/login",authController.login)
router.post("/logout",authController.logout)

// token
router.post("/refreshToken",authController.refreshToken);

// user video router
router.get("/",videoController.AllUser);
router.get("/onUser/:id",videoController.OnlyUser);
router.delete("/DeleteUser",videoController.DeleteUser);
router.put("/UpdateUser",videoController.UpdateUser);

// video router
router.patch("/addVideo/:id",videoController.AddVideo);
router.patch("/LikeUser",videoController.LikeUser);
router.patch("/UnLikeUser",videoController.UnLikeUser);
router.patch("/Addcomment",videoController.Addcomment);
router.patch("/Deletecomment",videoController.Deletecomment);
router.patch("/Updatecomment",videoController.Updatecomment);

module.exports=router;