let personMod = require("../models/personModel.js");
let ratingMod = require("../models/ratingModel.js");

//Best example
function getRating (req, res) {
    let personEmail = req.query.personEmail;
    ratingMod.getRating( personEmail, function(results) {
    res.json(results)});
}

function getAllPersons(){
   personMod.getAllPersons(function(results){
    res.json(results)});
}


function getPerson(){
    personMod.getPersons(function(results){
        res.json(results)});
    }

module.exports = {
    getRating : getRating,
    getPerson: getPerson,
    getAllPersons: getAllPersons
}