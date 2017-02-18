/**
 * Created by CMonk on 2/15/2017.
 */
const express = require("express");
const router = express.Router();
const posts = require("../model/posts");

router.get("/", function(req, res, next) {
    res.end("Posts holder 234234");
});

router.get("/all", function(req, res, next) {
     posts.promiseToGetAllPosts()
         .then(function(result){
             res.end(result.toString());
         })
         .catch(function(error){
             console.log(error);
         });
});

module.exports = router;