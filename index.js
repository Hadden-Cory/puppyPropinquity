const express = require("express");
const path = require("path");
const offerCtrl = require("./controllers/offerController.js");
const needCtrl = require("./controllers/needController.js");
const puppyCtrl = require("./controllers/puppyController.js");
const personCtrl = require("./controllers/personController.js");
require('dotenv').config();
const PORT = process.env.PORT || 8800;


var app = express();
app.use(express.static(path.join(__dirname + "public")));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/allPuppies", puppyCtrl.getAllPups);
app.get("/myPuppies", puppyCtrl.getMyPups);
app.get("/puppysNeeds", needCtrl.getNeeds);
app.get("/myOffers", offerCtrl.getOffers);
app.get("/rateUsers", personCtrl.getRating);

app.listen(PORT, function () {
    console.log("Server listening on port " + PORT)
});