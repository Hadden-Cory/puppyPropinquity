let puppyMod = require("../models/puppyModel.js");

function getMyPups(req, res) {
    console.log("Loading all the users K9s.");
    let personId = req.query.personId;
    puppyMod.getMyPupps(personId, function (results) {
        res.json(results)
    });
}

function getPup(req, res) {
    console.log("Loading all the users K9s.");
    let puppyId = req.query.puppyId;
    puppyMod.getPuppy(puppyId,function (results) {
        res.json(results)
    });
}

module.exports = {
    getMyPups: getMyPups,
    getPup: getPup
}