var user = require('./../controllers/usercontrollers');

module.exports = function(app){
    app.post('/loginReg', function(req, res) {
        user.loginReg(req, res);
    }),
    app.get('/checkUser', function(req, res) {
        user.checkUser(req, res);
    }),
    app.get('/logout', function(req,res) {
        user.logout(req, res);
    })
}