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

const Seeder = require('mysql-db-seed').Seeder;
const seed = new Seeder(
  10,
  'localhost',
  'root',
  '',
  'mykea_main_title_pictures'
);

(async () => {
  await seed.seed(
    100,
    'descriptions',
    {
      description: faker.lorem.sentence(30)
    }
  )
  seed.exit();
  process.exit();
})();



// let questionMarks = '(?),'.repeat(100).slice(0, -1);

// // Seed database with descriptions
// const seedText = function () {
//   // Description length of 35 words
//   const sql = `INSERT INTO descriptions(description)
//   VALUES(?),${questionMarks}`;

//   let words = _.range(1, 101).map(number => number = faker.lorem.sentence(30));
//   console.log(questionMarks);

//   connection.query(sql, [words], (err, results, fields) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Descriptions table seeded. Affected rows:', results.affectedRows);
//   });

//   connection.end();
// }

// seedText();

// // Seed database with images
// const seedImages = function () {
//   // Array of urls
//   let urlString = 'https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/'
//   let urlsArray = _.range(1, 36).map(number => `${urlString}${String(number).padStart(2, '0')}.jpg`);

//   const sql = `INSERT INTO pictures(url,description_id)
//             VALUES(?,?)`;
// }
