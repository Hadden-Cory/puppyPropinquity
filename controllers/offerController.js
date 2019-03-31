let offerMod = require("../models/offerModel.js");

function getOffers (req, res) {
    offerMod.getOffers(function(results){
        res.json(results)});
    }

module.exports = {
getOffers : getOffers
}