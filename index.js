const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8800;
let userZIP = 00000;
let userName = "Millenial College Kid";

var app = express();
app.use(express.static(path.join(__dirname + "public")));

app.get("/allPuppies", function (req, res) {
    //TODO: Query all active puppies in the users zip code, sorted by something.
    console.log("Loading all them dogos for zip code: " + userZIP);

    let result = {
        allPups : [
            {
            name: "Spot",
            type: "beagul",
            userRating: 4.8
            },{
            name: "Lassy",
            type: "collie",
            userRating: 4.8
            },
         ]

    }

    res.json(result);
});

app.get("/myPuppies", function (req, res) {
    //TODO: Query all puppy owned sorted by something.
    console.log("Loading all of " + userName + "'s K9s.");

    let result = {
        myPups: [{
                name: "spot",
                type: "beagul",
                description: "Loves to pretend he's a target model. Good with kids.",
                needs: []
            },
            {
                name: "Lassy",
                type: "collie",
                description: "Helps when kids fall down wells",
                needs: []
            }
        ]
    };

    res.json(result);
});
app.get("/myOffers", function (req, res) {
    //TODO: Query all offers made and made to sorted by something.
    console.log("Loading all of " + userName + "'s offers.");
    console.log("Loading all offers for " + userName + "'s pups.");

    res.json(result);
});
app.get("/rateUsers", function (req, res) {
    console.log("Waiting for an email address.");

    //TODO: Ask for a email adress and then Query user with that email.
});

app.listen(PORT, function () {
    console.log("Server listening on port " + PORT)
});