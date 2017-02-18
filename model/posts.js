/**
 * Created by CMonk on 2/15/2017.
 */
const mongoose = require("mongoose");
const Promise = require("promise");

const PostsSchema = mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
});

const Posts = module.exports = mongoose.model("Posts", PostsSchema);

Posts.promiseToGetAllPosts = function() {
    return new Promise(function(fulfill, reject) {
        Posts.find(null, function(err, docs) {
            if (err) {reject(err)}
            fulfill(docs);
        });
    });
};