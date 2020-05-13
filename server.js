var express = require('express');



var PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var hbs = require('express-handlebars');

app.engine("handlebars", hbs({layout: "main"}));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller.js");

app.use(router);

app.listen(PORT,function(){
    console.log("Server listening on: http://localhost:" + PORT);
});
