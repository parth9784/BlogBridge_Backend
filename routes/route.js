const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/Auth');
const { Createblog } = require('../controllers/Createblog');
const { doLike } = require('../controllers/doLike');
const { doComment } = require('../controllers/doComment');
const { Authmid } = require('../middleware/Authmid');
const { GetAll } = require('../controllers/GetAll');
const { Blog_user } = require('../controllers/Blog_user');

router.post('/signup', signup);
router.post('/login', login);
router.post('/createblog',Authmid, Createblog);
router.post('/dolike',Authmid, doLike);
router.post('/docomment',Authmid, doComment);
router.get("/getall",GetAll)
router.get("/getuserblog",Authmid,Blog_user)

module.exports = router; // Export the router instance
