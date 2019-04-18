const Campground    = require("../models/campground");
const Comment       = require("../models/comment");

// all the middleware goes here
const middlewareObj = {};

// Check Campground Ownership
middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    // is user logged in
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground) {
        if (err || !foundCampground) {
            req.flash("error", "Campground not found!"); 
            res.redirect("/campgrounds");
        } else {
            // does user own the campground?                    or is user an admin
            if (foundCampground.author.id.equals(req.user._id) || req.user.isAdmin) {
                next();
            } else {
                req.flash("error", "You don't have permission to do that"); 
                res.redirect("/campgrounds");
            }
          }
        });  
    } else {
        req.flash("error", "You must log in first before you can perform that function!"); 
        res.redirect("back");
    }    
}

// Check Comment ownership
middlewareObj.checkCommentOwnership = function(req, res, next) {
    // is user logged in
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, foundComment) {
        if (err || !foundComment) {
            req.flash("error", "Comment not found!"); 
            res.redirect("/campgrounds");
        } else {
            // does user own the comment?                   or is user an admin
            if (foundComment.author.id.equals(req.user._id) || req.user.isAdmin) {
                next();
            } else {
                req.flash("error", "You don't have permission to do that!");
                res.redirect("back");
                }
            }
        });  
    } else {
        req.flash("error", "You must log in first before you can perform that function!"); 
        res.redirect("/campgrounds");
    }
}

// Check if Logged In
middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You must log in first before you can perform that function!"); 
    res.redirect("/login");
}

module.exports = middlewareObj;