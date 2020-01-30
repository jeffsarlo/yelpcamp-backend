Yelp Camp is the final project to Colt Steele's Web Developer's bootcamp. We built and deployed this "yelp like" site geared towards campgrounds. You have to create an account and log in to post. You can search for previously posted campgrounds and comment on the posts.

must set up .env file and include the following variables
CLOUDINARY_NAME = your usernam
GMAILUN = your email address
GMAILPW = your email password

CLOUDINARY_API_KEY = cloudinary api key
CLOUDINARY_API_SECRET = cloudinary api secret

DATABASEURL = url of your database

***************** #V1 ******************************
#Yelp Camp
* Add landing page
* Add campground page that lists all campgrounds

Each campground has:
* Name
* Image

#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

#Creating New Campgrounds
* Setup new Campground POST route
* Add in body-parser
* Setup route to sho form
* Add basic unstyled form

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all the templates
* Style the new campground form

******************** #V2 **********************************

#Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

#Show Page
* Review the Restful routes we've seen so far
* Add description to our campground model
* Show db.collections.drop()
* Add a show route/template

REST a mapping between HTTP routes and CRUD

C - CREATE
R - READ
U - UPDATE
D - DESTROY

RESTFUL ROUTES
name       url            verb     CRUD    description
=================================================================
INDEX     /dogs           GET       R      List all dogs
NEW       /dogs/new       GET       C      Show a new dog form
CREATE    /dogs           POST      C      Create a new dog, then redirect somewhere
SHOW      /dogs/:id       GET       R      Shows info about one specific dog
EDIT      /dogs/:id/edit  GET       U      Show edit form for one dog
UPDATE    /dogs/:id       PUT       U      Update a particular dog, then redirect somewhere
DESTROY   /dogs/:id       DELETE    D      Detete a particular dog, then redirect somewhere



********************** #V3 *************************************

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly


#Add Seeds file
* Add seeds.js file
* Run the seeds file every time the server starts


#Add the Comment model
* Mke our errors go away
* Display comments on campground show page


************************ #V4 **********************************

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

NEW      campgrounds/:id/comments/new   GET
CREATE   campgrounds/:id/comments       POST


************************ # V5 **********************************

#Style Show Page
* Add sidebar to show page
* Display comments nicely

#Finishing Styling Show Page
* Add public directory
* Add custom stylesheet

*********************** # V6 ************************************

#Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model

#Auth Pt. 2 - Register
* Configure passport
* Add register routes
* Add register template

#Auth Pt. 3 - Login
* Add login routes
* Add login template

#Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

#Auth Pt. 5 - Show/Hide links
* Show/hide auth links in navbar correctly


********************* # V7 *******************************

#Refactor the Routes
* Use Express Router to reorganize all routes


********************* # V8 *******************************

#Users + Comments
* Associate users and comments
* Save author's name to a comment automatically


********************* # V9 *******************************

#Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground


********************* # V10 *******************************

#Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

#Deleting Campgrounds
* Add Destroy Route
* Add Delete Button

#Authorization
* User can only edit his campgrounds
* User can only delete his campgrounds
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit Route for comments
* Add Edit button
* Add Update route

Campground edit route: <!-- /campgrounds/:id/edit -->
Comment edit route:    <!-- /campgrounds/:id/comments/:comment_id/edit -->

#Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route:  <!-- /campgrounds/:id/ -->
Comment Destroy Route:     <!-- /campgrounds/:id/comments/comment_id -->


#Authorization Part 2: Comments
* User can only edit his comments
* User can only delete his comments
* Hide/Show edit and delete buttons
* Refactor Middleware

#Adding in Flash
* Demo working version
* Add bootstrap alerts to header

********************* # V11 **************************

********************* # V12 **************************

********************* # V12.1 **************************

#UI Improvements
* login and signup
* Nav-bar
* Registration Flash message

#Pricing Feature
* Replace hard coded with dynamic pricing

#Time Since Created
* Moment.js

#Admin Role
* Secret phrase
* Admin registration
* Admin permissions

#User Profile
* First & Last name
* Campgrounds Created
* About me (currently hard coded)
* Avatar

#Password Reset
* Install/Require Nodemailer
* Install/Require Async
* Require Crypto (don't have to install this)

#Image Upload
* Install/Require Cloudinary
* Install/Require Multer

#Fuzzy Search

#Migrating to Bootstrap 4

#Refactor callbacks in seed.js to use Async/Await
* installed latest node version 11.14.0


********************* # V13 **************************
#Implement Changes on slide 367 & add my own

#Finish Search (367)
* footer.ejs - script tag
* search.js - in public/scripts
* rewatch 'How to Create Fuzzy Search with Express JS and Mongoose'

#Add Google Map (367)
* or use MAPBOX

#Ratings and Reviews (367)

#Comments on Show Page (367)
* Improve upon existing comment format

#Pagination on Campgrounds page(367)
