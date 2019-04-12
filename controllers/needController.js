let needMod = require("../models/needModel.js");

function getNeeds (req, res) {
    
    needMod.getNeeds(function(results){
        res.json(results)});
    }

module.exports = {
getNeeds : getNeeds
}