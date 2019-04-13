const {Pool} = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url})

function getAllNeeds(callback, db_results){
    let sql="SELECT p.puppy_name, n.need_type, n.need_is_reoccuring, n.need_is_for_hire FROM puppy AS p RIGHT JOIN need AS n ON n.puppy_puppy_id = p.puppy_id;";

    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
        } else {
            console.log(db_results);
            let results = {
                list:db_results.rows
            };
            callback(null, results); 
        }
    });
}

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
    getNeeds: getNeeds,
    getAllNeeds : getAllNeeds
}