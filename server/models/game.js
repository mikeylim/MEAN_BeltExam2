var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    name: String,
    score: Number,
    percentage: Number,
}, {timestamps: true, usePushEach: true})

mongoose.model("Game", GameSchema);