const express = require("express");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");

//muletr middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.filename +"_"+ Date.now() +"_"+ file.originalname);
    },
});
let uploads = multer({
    storage: storage,
}).single("image");

router.get("/", API.fetchAllPost);
router.get("/:id", API.fetchAllPostByID);
router.post("/",uploads, API.createPost);
router.patch("/:id",uploads, API.updatePost);
router.delete("/:id", API.deletePost);
module.exports = router;