const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mykea_main_title_pictures',
  multipleStatements: true,
});

const getPictures = (id) => new Promise((resolve, reject) => {
  const sql = `SELECT * FROM pictures WHERE
              description_id = ${id} LIMIT 6`;
  connection.query(sql, (err, results) => {
    if (err) {
      return reject(err);
    }
    resolve(results);
  });
});

module.exports.getPictures = getPictures;
