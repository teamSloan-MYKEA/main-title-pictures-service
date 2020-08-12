const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mykea_main_title_pictures',
});

const getPictures = (id) => new Promise((resolve, reject) => {
  const sql = `SELECT * FROM pictures p INNER JOIN descriptions d
              ON p.description_id = ${id} AND
              p.description_id = d.id LIMIT 6`;
  connection.query(sql, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
  connection.end();
});

module.exports.getPictures = getPictures;
