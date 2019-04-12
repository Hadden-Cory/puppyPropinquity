const {Pool} = require("pg");

const bd_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url})

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