let needMod = require("../models/needModel.js");

function getNeeds (req, res) {
    let puppyId = req.query.puppyId;
    console.log('Puppy ID: '+puppyId);
    needMod.getNeeds(puppyId, function(results){
        res.json(results)
    });
}

function getAllNeeds(req, res){
    
    
    needMod.getAllNeeds(function(results){
        res.json(results)
    }); 
}

module.exports = {
getNeeds : getNeeds,
getAllNeeds : getAllNeeds
}