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

const seedText = () => new Promise((resolve, reject) => {
  for (let i = 0; i < 100; i += 1) {
    const sentence = faker.lorem.sentence(30);
    const sql = 'INSERT INTO descriptions(description) VALUES(?)';
    connection.query(sql, [sentence], (err, results) => {
      if (err) {
        console.error(err.message);
        return reject(err);
      }
      console.log('Descriptions table seeded. Affected rows:', results.affectedRows);
      return resolve(results);
    });
  }
});

const seedPictures = () => new Promise((resolve, reject) => {
  // Array of urls
  const urlString = 'https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/';
  const urlsArray = _.range(1, 36).map((number) => `${urlString}${String(number).padStart(2, '0')}.jpg`);

  // Add 600 picture urls randomly to table
  for (let i = 1; i < 601; i += 1) {
    const sql = 'INSERT INTO pictures(url, description_id) VALUES(?, ?)';
    const randomURL = urlsArray[Math.floor(Math.random() * urlsArray.length)];

    // Gives number between 1 and 6
    const descriptionCounter = Math.floor((Math.random() * 100) + 1);

    connection.query(sql, [randomURL, descriptionCounter], (err, results) => {
      if (err) {
        return reject(err);
      }
      console.log('Pictures table seeded. Affected rows: ', results.affectedRows);
      return resolve(results);
    });
  }
});

// Seed DB

seedText()
  .then(() => seedPictures())
  .then(() => connection.end())
  .catch((err) => console.log(err));
