const {Pool} = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url})


function getPuppy(callback, puppyId) {

    let results = {
        puppyId: "1",
        puppyName: "BlendTec",
        puppyType: "German Shepherd",
        puppyDescription: "BlendTec is really nice. Unless you are a bad guy, than he will eat you.",
        personId: "1"
    }

    callback(results);
}

function getAllPersonsPuppies(callback, personId) {

    let sql="SELECT p.puppy_name, n.need_type, n.need_is_reoccuring, n.need_is_for_hire FROM puppy AS p INNER JOIN need AS n ON n.puppy_puppy_id = p.puppy_id;"

    let results = {
        puppies: [{
            puppyId: "1",
            puppyName: "BlendTec",
            puppyType: "German Shepherd",
            puppyDescription: "BlendTec is really nice. Unless you are a bad guy, than he will eat you.",
            personId: "1"
        }, {
            puppyId: "2",
            puppyName: "Silver Bullet",
            puppyType: "German Shepherd",
            puppyDescription: "Bullet is a little protective, but if she see me accept you she will be very well behaved.",
            personId: "1"
        }]
    }

    callback(results);
}

function getAllPuppies(callback) {

    let results = {
        "puppies": [
          {
            "puppyId": "1",
            "puppyName": "BlendTec",
            "puppyType": "German Shepherd",
            "puppyDescription": "BlendTec is really nice. Unless you are a bad guy, than he will eat you.",
            "personId": "1"
          },
          {
            "puppyId": "2",
            "puppyName": "Silver Bullet",
            "puppyType": "German Shepherd",
            "puppyDescription": "Bullet is a little protective, but if she see me accept you she will be very well behaved.",
            "personId": "1"
          },
          {
            "puppyId": "3",
            "puppyName": "Snoopy",
            "puppyType": "Beagul",
            "puppyDescription": "Snoopy is mans best friend. sometimes.",
            "personId": "2"
          }
        ]
      }
      
    console.log("results: "+ results);
    callback(results);
}

module.exports = {
    getPuppy: getPuppy,
    getAllPersonsPuppies: getAllPersonsPuppies,
    getAllPuppies: getAllPuppies
}