// Require Apps
const express           = require("express"),
      app               = express(),
      bodyParser        = require("body-parser"),
      mongoose          = require("mongoose"),
      flash             = require("connect-flash"),
      passport          = require("passport"),
      LocalStrategy     = require("passport-local"),
      methodOverride    = require("method-override"),
      Campground        = require("./models/campground"),
      Comment           = require("./models/comment"),
      User              = require("./models/user"),
      seedDB            = require("./seeds"),
      // Require Environment variables
      db                = require('dotenv').config(),
      
// Require routes
      commentRoutes    = require("./routes/comments"),
      campgroundRoutes = require("./routes/campgrounds"),
      indexRoutes      = require("./routes/index");

console.log(process.env.DATABASEURL);

mongoose.connect(process.env.DATABASEURL);
// mongoose.connect("mongodb://localhost:27017/yelp_camp_v13", {useNewUrlParser: true});
// mongoose.connect("mongodb+srv://lgehrig4:ReneeDBcode1!@cluster0-5yfak.mongodb.net/yelp_camp?retryWrites=true", {useNewUrlParser: true});


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname +"/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();   // seed the database

app.locals.moment = require("moment");

// PASSPORT CONFIGURATION
app.use(require("express-session")( {
    secret: "you shall not pass",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


// ==================================
// LISTEN ROUTE
// ==================================
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("We're Yelping!!"); 
});