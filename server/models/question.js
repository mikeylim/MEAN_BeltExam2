var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    content: String,
    _answers: [{type: Schema.Types.ObjectId, ref: "Answer"}]
}, {timestamps: true, usePushEach: true})

mongoose.model("Question", QuestionSchema);