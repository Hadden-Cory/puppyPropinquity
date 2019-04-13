let puppyMod = require("../models/puppyModel.js");

function getAllPups(req, res) {
    console.log("Loading all them dogos");

    puppyMod.getAllPuppies(function (results) {
        res.json(results) });
}

function getMyPups(req, res) {
    console.log("Loading all the users K9s.");
    puppyMod.getAllPersonsPuppies(function (results) {
        res.json(results)
    });
}

function getPup(req, res) {
    console.log("Loading all the users K9s.");
    puppyMod.getPuppy(function (results) {
        res.json(results)
    });
}

module.exports = {
    getAllPups: getAllPups,
    getMyPups: getMyPups,
    getPup: getPup
}