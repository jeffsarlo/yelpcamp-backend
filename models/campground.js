const mongoose = require("mongoose");
const Comment  = require("./comment");

// // Deletes comments from DB when campground is deleted (requires NODE js V8 or newer)
// campgroundSchema.pre('remove', async function() {
// 	await Comment.remove({
// 		_id: {
// 			$in: this.comments
// 		}
// 	});
// });

// SCHEMA SETUP
const campgroundSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    location: String,
    description: String,
    createdAt: {type: Date, default: Date.now},
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    username: String
    },
    comments: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Comment"
        }
    ],
});

module.exports = mongoose.model("Campground", campgroundSchema);