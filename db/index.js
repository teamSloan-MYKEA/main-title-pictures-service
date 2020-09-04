const { Client } = require('pg');
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password",
  database: "sdc_mykea"
});

client.connect();

//
// Probably need to refactor to pull out client.connect and have it up here
//

const getPictures = (id) => new Promise((resolve, reject) => {
  const sql = `SELECT description, picture1, picture2, picture3, picture4, picture5, picture6 FROM pictures_service WHERE id=${id}`;
  client.query(sql, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

// insert into table_name (cols) values (vals)
const addItem = (item) => new Promise((resolve, reject) => {
  const {
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    description
  } = item;

  const sql1 = `INSERT INTO pictures_service (
    description,
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6
  ) VALUES (${description},${picture1},${picture2},${picture3},${picture4},${picture5},${picture6})`;
  client.query(sql1, (err, results) => {
    if (err) {
      return reject(err);
    }
      return resolve(results);
  });

});

// update table_name set col=val where col=val
const updateItem = (item) => new Promise((resolve, reject) => {
  const {field, id, update} = item;
  const sql2 = `UPDATE pictures_service SET ${field}='${update}' WHERE id=${id}`;
  client.query(sql2, (err, results) => {
    if (err) {
      return reject(err);
    }
    return resolve(results);
  });
});

// update to delete from table_name where col=val
const deleteItem = (id) => new Promise((resolve, reject) => {
  const sql13 = `DELETE FROM pictures_service WHERE id=${id}`;
    client.query(sql3, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
});

module.exports.connection = client;
module.exports.getPictures = getPictures;
module.exports.addItem = addItem;
module.exports.updateItem = updateItem;
module.exports.deleteItem = deleteItem;
