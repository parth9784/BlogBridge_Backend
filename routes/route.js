const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/Auth');
const { Createblog } = require('../controllers/Createblog');
const { doLike } = require('../controllers/doLike');
const { doComment } = require('../controllers/doComment');
const { Authmid } = require('../middleware/Authmid');
const { GetAll } = require('../controllers/GetAll');
const { Blog_user } = require('../controllers/Blog_user');
const {getbyid}= require('../controllers/getbyid');
const { Updateblog } = require('../controllers/updateblog');
const { Forgotpassword } = require('../controllers/Forgotpassword');
const { Verifyotp } = require('../controllers/Verifyotp');
const { Passwordreset } = require('../controllers/Passwordreset');
const { Getuserinfo } = require('../controllers/Getuserinfo');
const { Fetchcomments } = require('../controllers/fetchcomments');
const { DeleteComment } = require('../controllers/Deletecomment');


router.post('/signup', signup);
router.post('/login', login);
router.post('/createblog',Authmid, Createblog);
router.post('/dolike',Authmid, doLike);
router.post('/docomment',Authmid, doComment);
router.get("/getall",GetAll)
router.post("/getuserblog",Authmid,Blog_user)
router.post("/getbyid",Authmid,getbyid)
router.put("/editblog",Authmid,Updateblog)
router.post("/forgotpassword",Forgotpassword)
router.post("/verifyotp",Verifyotp)
router.put("/passwordreset",Passwordreset)
router.get("/getuserinfo",Authmid,Getuserinfo);
router.get("/fetchcomments",Fetchcomments)
router.delete("/deletecomment",DeleteComment)



module.exports = router;
