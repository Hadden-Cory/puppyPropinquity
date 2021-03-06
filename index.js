const express = require("express");
const path = require("path");
const offerCtrl = require("./controllers/offerController.js");
const needCtrl = require("./controllers/needController.js");
const puppyCtrl = require("./controllers/puppyController.js");
const personCtrl = require("./controllers/personController.js");
const PORT = process.env.PORT || 8800;

var app = express();
app.use(express.static(path.join(__dirname + "public")));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/myPuppies", puppyCtrl.getMyPups);
app.get("/Pup", puppyCtrl.getPup);
app.get("/puppysNeeds", needCtrl.getNeeds);
app.get("/needs", needCtrl.getAllNeeds);
app.get("/OffersMade", offerCtrl.getOffersMade);
app.get("/OffersRecieved", offerCtrl.getOffersRecieved);
app.get("/rateUsers", personCtrl.getRating);

app.listen(PORT, function () {
    console.log("Server listening on port " + PORT)
});