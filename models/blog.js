/**
 * Created by apple on 7/30/15.
 */
var mongoose = require('mongoose');
var blogSchema = require('./model');
var Blog = mongoose.model('Blog', blogSchema);

var newblog = new Blog({
    title: "Mongoose",
    author: "Reg.Jay",
    body: "Document are instances of out model. Creating them add saving to the database is easy",
    hidden: false,
    meta: {
        votes: 100,
        favs: 99
    }
});

newblog.save(function(err) {
    if (err) handleError(err);
    console.log('Success');
});