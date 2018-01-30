var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    loginReg: function(req, res){
        User.find({name:req.body.name}, function(err, users){
            if(users.length < 1){
                User.create({name: req.body.name}, function(err, user){
                    req.session.user = user;
                    return res.json({user: user})
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
    logout: function (req, res) {
        req.session.destroy();
        return res.redirect('/');
    }
}