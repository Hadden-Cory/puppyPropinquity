const {Pool} = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url})


function getPerson(callback, personId) {

    results = {
        personId: "1",
        personName: "Liz Scott",
        personPasswordHash: "F25739EDA259266008C89B48CC87923885CF3858654F9614A78B2F315086638478CB57B2235378765AD53FCE26394528F3272A54AEF286D9B6075471AFDB0AD2",
        personEmail: "ilovelucy@Cmail.com",
        ratingId: "3"
    }

    callback(results);

}

function getAllPersons(callback) {

    results = {
        persons: [

            {
                personId: "1",
                personName: "Liz Scott",
                personPasswordHash: "F25739EDA259266008C89B48CC87923885CF3858654F9614A78B2F315086638478CB57B2235378765AD53FCE26394528F3272A54AEF286D9B6075471AFDB0AD2",
                personEmail: "ilovelucy@Cmail.com",
                ratingId: "3"
            },
            {
                personId: "2",
                personName: "Charlie Brown",
                personPasswordHash: "CF6F09BB31D864E66280B45EF8B469AEDAAF6E9B41D276EDCF2488F4E18FF2EF663338A8955D0DC8FDDDE28E4E516FC7BBF109A7A76722A191DF00A774905ADE",
                personEmail: "roundheadedkid@Cmail.com",
                ratingId: "2"
            }

        ]
    }

    callback(results);
}

module.exports = {
    getPerson: getPerson,
    getAllPersons: getAllPersons
}