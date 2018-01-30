var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var port = 8000;

app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(session({secret:"codingdojo",
                 resave: true,
                 saveUninitialized: true
                }
));
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);


app.listen(port, function(){
    console.log("Listening in server.js");
})