const {Pool} = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url})


function getPuppy(puppyId, callback) {

  let params =[puppyId];
  let sql = 'SELECT puppy_name, puppy_type, puppy_description FROM puppy WHERE puppy_id = $1::integer';
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

function getMyPuppies(personId, callback) {
  let params =[personId];
  let sql = 'SELECT puppy_name, puppy_type, puppy_description FROM puppy WHERE person_person_id = $1::integer';
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
    getPuppy: getPuppy,
    getMyPuppies: getMyPuppies,
}