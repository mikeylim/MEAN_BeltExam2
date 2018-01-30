var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String    
}, {timestamps: true, usePushEach: true})

mongoose.model("User", UserSchema);