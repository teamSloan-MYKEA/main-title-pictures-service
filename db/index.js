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

// insert into table_name (cols) values (vals)
const addItem = (item) => new Promise((resolve, reject) => {
  const {picture1, picture2, picture3, picture4, picture5, picture6, description} = item;
  const pictureArray = [picture1, picture2, picture3, picture4, picture5, picture6];
  const sql1 = `INSERT INTO descriptions(description) VALUES(?)`;
  const sql15 = `SELECT LAST_INSERT_ID()`;
  const sql2 = `INSERT INTO pictures (url, description_id) VALUES (?, ?)`;
  connection.query(sql1, [description], (err, results) => {
    if (err) {
      return reject(err);
    }
    connection.query(sql15, (err, results) => {
      if (err) {
        return reject(err);
      }
      const lastInsertId = results[0]['LAST)_INSERT_ID()'];
      for (var i = 0; i < pictureArray.length - 1; i++) {
        connection.query(sql2, [pictureArray[i], results[0]['LAST_INSERT_ID()']], (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        });
      }
    });
  });
});

// update table_name set col=val where col=val
const updateItem = (item) => new Promise((resolve, reject) => {
  const {table, id, update} = item;
  const field = table === 'descriptions' ? 'description' : 'url';
  const sql1 = `UPDATE ${table} SET ${field}="${update}" WHERE id=${id}`;
  console.log(sql1);
  connection.query(sql1, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

// below is just copied, but represents the delete function
// update to delete from table_name where col=val
const deleteItem = (id) => new Promise((resolve, reject) => {
  const sql1 = `DELETE FROM descriptions WHERE id=${id}`;
  const sql2 = `DELETE FROM pictures WHERE description_id=${id}`;
  connection.query(sql2, (err, results) => {
    if (err) {
      return reject(err);
    }
    connection.query(sql1, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
});

module.exports.connection = connection;
module.exports.getPictures = getPictures;
module.exports.addItem = addItem;
module.exports.updateItem = updateItem;
module.exports.deleteItem = deleteItem;
