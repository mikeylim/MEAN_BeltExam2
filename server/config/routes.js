var user = require('./../controllers/usercontrollers');

module.exports = function(app){
    app.post('/loginReg', function(req, res) {
        user.loginReg(req, res);
    }),
    app.get('/checkUser', function(req, res) {
        user.checkUser(req, res);
    }),
    app.get('/logout', function(req, res) {
        user.logout(req, res);
    }),
    app.post('/addQuestion', function(req, res) {
        user.addQuestion(req, res);
    }),
    app.get('/getAllQuestions', function(req, res) {
        user.getAllQuestions(req, res);
    })
    app.post('/submitAnswers', function(req, res) {
        user.submitAnswers(req, res);
    }),
    app.get('/showAllGames', function(req, res) {
        user.showAllGames(req, res);
    })
}