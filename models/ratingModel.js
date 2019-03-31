function getRating(personEmail, callback) {

    let results = {
        ratingId: "1",
        ratingOwner: "5",
        ratingHelper: "3",
    }

    callback(results);
}

module.exports = {
    getRating: getRating
}