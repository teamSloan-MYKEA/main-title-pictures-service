const { Client } = require('pg');
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password",
  database: "sdc_mykea"
});

const getPictures = (id) => new Promise((resolve, reject) => {
  const sql = `SELECT picture1, picture2, picture3, picture4, picture5, picture6 FROM pictures_service WHERE id=${id}`;
  client.connect().then(() => {
    client.query(sql, (err, results) => {
      if (err) {
        client.end();
        return reject(err);
      }
      client.end();
      return resolve(results);
    });
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
  const queryArray = [
    description,
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6
  ];
  const sql1 = `INSERT INTO pictures_service (
    description,
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6
  ) VALUES (?)`;
  client.connect().then(() => {
    client.query(sql1, queryArray, (err, results) => {
      if (err) {
        client.end();
        return reject(err);
      }
        client.end();
        return resolve(results);
    });
  });
});

// update table_name set col=val where col=val
const updateItem = (item) => new Promise((resolve, reject) => {
  const {field, id, update} = item;
  const sql2 = `UPDATE pictures_service SET ${field}='${update}' WHERE id=${id}`;
  client.connect().then(() => {
    client.query(sql2, (err, results) => {
      if (err) {
        client.end();
        return reject(err);
      }
      client.end();
      return resolve(results);
    });
  });
});

// update to delete from table_name where col=val
const deleteItem = (id) => new Promise((resolve, reject) => {
  const sql13 = `DELETE FROM pictures_service WHERE id=${id}`;
  client.connect().then(() => {
    client.query(sql3, (err, results) => {
      if (err) {
        client.end();
        return reject(err);
      }
      client.end();
      return resolve(results);
    });
  });
});

module.exports.connection = connection;
module.exports.getPictures = getPictures;
module.exports.addItem = addItem;
module.exports.updateItem = updateItem;
module.exports.deleteItem = deleteItem;
