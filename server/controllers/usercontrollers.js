var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var Game = mongoose.model('Game');

module.exports = {
    /**
     * if user is found from database, send that user's information as json object 
     * if user not found, create 
     */
    loginReg: function(req, res){
        User.find({name:req.body.name}, function(err, users){
            if(users.length < 1){
                User.create({name: req.body.name}, function(err, user){
                    req.session.user = user;
                    return res.json({user: req.session.user})
                })
            } else{
                req.session.user = users[0];
                return res.json({user: users[0]});
            }
        })
    },
    checkUser: function(req, res){
        if (!req.session.user) {
            return res.json({ user: null });
        } else {
            return res.json({ user: req.session.user });
        }
    },
    logout: function(req, res) {
        req.session.destroy();
        return res.redirect('/');
    },
    addQuestion: function(req, res) {
        Question.create({
            content: req.body.content,             
        }, function(err, question){
            Answer.create({
                correctAnswer: req.body.correctAnswer, 
                fakeAnswer1: req.body.fakeAnswer1, 
                fakeAnswer2: req.body.fakeAnswer2,
                _question: question._id }, function(err, answer){
                    // add that specific answer id to answers(answerArray)
                    question._answers.push(answer._id);
                    answer._question._id = question._id;
                    answer.save(function (err) {
                        question.save(function (err) {
                            return res.json(question);
                        })
                    })
                })
            }
        )
    },
    getAllQuestions: function(req, res) {
        Question.find({}).populate('_answers').exec(function(err, questions){    
            questions.forEach(a => {
            });            
            return res.json(questions);
        })
    },
    submitAnswers: function(req, res) {
        Game.create({name: req.body.name, score: req.body.score, percentage: req.body.percentage}, function(err, game){
            Game.find({}).sort("-percentage").exec(function(err, games) {                
                return res.json(games);
            })
        })
    },
    showAllGames: function(req, res) {
        Game.find({}).sort({percentage: -1, createdAt: -1}).exec(function(err, games) {
            return res.json(games);
        })
    }
}