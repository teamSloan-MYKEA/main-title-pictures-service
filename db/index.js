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
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < 100; i++) {
      let sentence = faker.lorem.sentence(30);
      let sql = 'INSERT INTO descriptions(description) VALUES(?)';
      connection.query(sql, [sentence], (err, results, fields) => {
        if (err) {
          console.error(err.message);
          return reject(err);
        }
        console.log('Descriptions table seeded. Affected rows:', results.affectedRows);
        resolve(results);
      });
    }
    // connection.end();
  });
};

// seedText();

const seedPictures = () => {
  let promise = [];
  new Promise(function (resolve, reject) {
    // Array of urls
    let urlString = 'https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/';
    let urlsArray = _.range(1, 36).map(number => `${urlString}${String(number).padStart(2, '0')}.jpg`);

    // Add 600 picture urls randomly to table
    for (let i = 1; i < 601; i++) {
      let sql = 'INSERT INTO pictures(url, description_id) VALUES(?, ?)';
      let randomURL = urlsArray[Math.floor(Math.random() * urlsArray.length)];

      // Gives number between 1 and 6
      let descriptionCounter = Math.floor((Math.random() * 100) + 1);

      connection.query(sql, [randomURL, descriptionCounter], (err, results) => {
        if (err) {
          return console.error(err.message);
          return reject(err);
        }
        console.log('Pictures table seeded. Affected rows: ', results.affectedRows);
        resolve(results);
      });
    }
  });
};

seedText()
  .then(results => seedPictures())
  .then(results => connection.end())
  .catch(err => console.log(err));