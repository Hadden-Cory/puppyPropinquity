const {Pool} = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url})

function getNeeds(puppy_puppy_id, callback) {
    
    let params =[puppy_puppy_id];
    let sql = 'SELECT need_type, need_is_reoccuring, need_is_for_hire, need_description FROM need WHERE puppy_puppy_id = $1::integer';
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

function getAllNeeds(callback){
    let sql="SELECT p.puppy_name, n.need_type, n.need_is_reoccuring, n.need_is_for_hire FROM puppy AS p RIGHT JOIN need AS n ON n.puppy_puppy_id = p.puppy_id;";

    pool.query(sql, function(err, db_results){
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
    getNeeds: getNeeds,
    getAllNeeds : getAllNeeds
}