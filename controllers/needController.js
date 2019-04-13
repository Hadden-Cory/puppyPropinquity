let needMod = require("../models/needModel.js");

function getNeeds (req, res) {
    
    needMod.getNeeds(function(results){
        res.json(results)
    });
}

function getAllNeeds(){
    needMod.getAllNeeds(function(results){
        res.json(results)
    }); 
}

module.exports = {
getNeeds : getNeeds,
getAllNeeds : getAllNeeds
}