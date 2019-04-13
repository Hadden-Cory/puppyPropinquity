let offerMod = require("../models/offerModel.js");

function getOffersMade (req, res) {
    let personId = req.query.personId;
    offerMod.getOffersMade(personId, function (results){
        res.json(results)});
    }

function getOffersRecieved (req, res) {
    let needId = req.query.needId;
offerMod.getOffersRecieved(needId, function (results){
    res.json(results)});
}
module.exports = {
getOffersMade : getOffersMade,
getOffersRecieved : getOffersRecieved
}