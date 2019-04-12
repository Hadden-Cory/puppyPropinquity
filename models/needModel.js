// const {Pool} = require("pg");

// const db_url = process.env.DATABASE_URL;

// console.log("DB URL:"+db_url)
// const pool = new Pool({connectionString: db_url})

function getNeeds(callback, puppyId) {

    let results = {
        needId: "1",
        needDescription: "BlendTec and Silver bullet need a someone to feed and run them while we are gone on vacation",
        needType: "Babysitting",
        needIsForHire: "true",
        needIsReoccuring: "false",
        puppyId: "1"
    }

    callback(results);
}

module.exports = {
    getNeeds: getNeeds
}