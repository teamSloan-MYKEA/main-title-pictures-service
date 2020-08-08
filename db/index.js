/* eslint-disable no-console */
const _ = require('underscore');
const faker = require('faker');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mykea_main_title_pictures',
  multipleStatements: true,
});

const seedText = () => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 100; i++) {
      const sentence = faker.lorem.sentence(30);
      const sql = 'INSERT INTO descriptions(description) VALUES(?)';
      connection.query(sql, [sentence], (err, results) => {
        if (err) {
          console.error(err.message);
          return reject(err);
        }
        console.log('Descriptions table seeded. Affected rows:', results.affectedRows);
        resolve(results);
      });
    }
  });
};

const seedPictures = () => {
  return new Promise((resolve, reject) => {
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

const getPictures = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM pictures WHERE
                description_id = ${id} LIMIT 6`;
    connection.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      console.log(results);
      resolve(results);
    });
  });
};

// Seed DB

seedText()
  .then(() => seedPictures())
  .then(() => connection.end())
  .catch((err) => console.log(err));
