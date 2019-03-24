const express = require("express");
const PORT = process.env.PORT || 8800;

var app = express();

app.listen (PORT, function(){
    console.log("Server listening on port" + PORT)
});