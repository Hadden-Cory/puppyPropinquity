const {Pool} = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url})

function getRating(personEmail, callback) {

    let params =[personEmail];
    let sql = 'SELECT r.rating_owner_rating, r.rating_helper_rating FROM rating AS r INNER JOIN person AS p ON p.rating_rating_id = r.rating_id WHERE p.person_email = $1::text';
    pool.query(sql, params, function(err, db_results){
        if(err){
            throw err;
        } else {

            let results = {
                list:db_results.rows
            };
  
            callback(results); 
        }
    });
}

module.exports = {
    getRating: getRating
}