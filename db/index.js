const _ = require('underscore');
const faker = require('faker');
const mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mykea_main_title_pictures',
  multipleStatements: true
});

const seedText = () => {
  for (let i = 0; i < 100; i++) {
    let sentence = faker.lorem.sentence(30);
    let sql = 'INSERT INTO descriptions(description) VALUES(?)';
    connection.query(sql, [sentence], (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Descriptions table seeded. Affected rows:', results.affectedRows);
    });
  }
  connection.end();
};

seedText();


// // Seed database with images
// const seedImages = function () {
//   // Array of urls
//   let urlString = 'https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/'
//   let urlsArray = _.range(1, 36).map(number => `${urlString}${String(number).padStart(2, '0')}.jpg`);

//   const sql = `INSERT INTO pictures(url,description_id)
//             VALUES(?,?)`;
// }
