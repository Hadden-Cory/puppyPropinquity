const {Pool} = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url})


function getOffersMade(personId, callback) {

    let params =[personId];
    let sql = 'SELECT offer_id, need_need_id, offer_comments FROM offer WHERE person_person_id = $1::integer;';
    pool.query(sql, params, function(err, db_results){
        if(err){
            throw err;
        } else {
            console.log('DB RESULTS in Model else: '+db_results);
            console.log(db_results);
            let results = {
                list:db_results.rows
            };
  
            callback(results); 
        }
    });
}

function getOffersRecieved(needId, callback) {

    let params =[needId];
    let sql = 'SELECT person_person_id, offer_comments FROM offer WHERE need_need_id = $1::integer;';
    pool.query(sql, params, function(err, db_results){
        if(err){
            throw err;
        } else {
            console.log('DB RESULTS in Model else: '+db_results);
            console.log(db_results);
            let results = {
                list:db_results.rows
            };
  
            callback(results); 
        }
    });
}


module.exports = {
    getOffersMade: getOffersMade,
    getOffersRecieved : getOffersRecieved
}