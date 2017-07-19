var mongoose = require("mongoose");

var SeedSchema = new mongoose.Schema({
    type: String,
    price: Number,
    location: String,
    img: String,
    legendary: {type: Boolean, default: false}
});

module.exports = mongoose.model("Seed", SeedSchema);