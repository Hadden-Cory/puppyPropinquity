function getOffers(callback, needId) {

    let results = {
        offers: [{
                offerId: "1",
                offerComments: "I want to play tennis with a dog.",
                offerPersonId: "4",
                needId: "3"
            },
            {
                offerId: "2",
                offerComments: "I would love to break into the writing scene. Honestly music has been a bit of a drag recently. Time for something new. And I hate cats.",
                offerPersonId: "3",
                needId: "4"
            }
        ]
    }

    callback(results);
}

module.exports = {
    getOffers: getOffers
}