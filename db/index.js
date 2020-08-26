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
});

// below is just copied, but represents the post function
// needs to be switched to insert into table_name (cols) values (vals)
const addPicture = (id) => new Promise((resolve, reject) => {
  const sql = `SELECT * FROM pictures p INNER JOIN descriptions d
              ON p.description_id = ${id} AND
              p.description_id = d.id LIMIT 6`;
  connection.query(sql, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

// below is just copied, but represents the put function
// update table_name set col=val where col=val
const updatePicture = (id) => new Promise((resolve, reject) => {
  const sql = `SELECT * FROM pictures p INNER JOIN descriptions d
              ON p.description_id = ${id} AND
              p.description_id = d.id LIMIT 6`;
  connection.query(sql, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

// below is just copied, but represents the delete function
// update to delete from table_name where col=val
const deletePicture = (id) => new Promise((resolve, reject) => {
  const sql = `SELECT * FROM pictures p INNER JOIN descriptions d
              ON p.description_id = ${id} AND
              p.description_id = d.id LIMIT 6`;
  connection.query(sql, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

module.exports.connection = connection;
module.exports.getPictures = getPictures;
