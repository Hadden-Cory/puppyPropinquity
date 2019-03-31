let needMod = require("../models/needsModel.js");

function getNeeds (req, res) {
    
    needMod.getNeeds(function(results){
        res.json(results)});
    }

module.exports = {
getNeeds : getNeeds
}