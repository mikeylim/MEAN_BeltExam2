var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    correctAnswer: String,
    fakeAnswer1: String,
    fakeAnswer2: String,
    _question: {type: Schema.Types.ObjectId, ref: "Question"}
}, {timestamps: true, usePushEach: true})

mongoose.model("Answer", AnswerSchema);