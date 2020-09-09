const { Client } = require('pg');
const client = new Client({
  host: "18.222.255.10",
  port: 5432,
  user: "postgres",
  password: "password",
  database: "sdc_mykea"
});
const redis = require('redis');
const redisClient = redis.createClient();
client.connect();

redis.debug = true;
redisClient.on('error', function(err) {
  console.log('error' + err);
});

//
// Probably need to refactor to pull out client.connect and have it up here
//

const getCachedPictures = (query, callback) => {
  redisClient.get(query, function(err, results) {
    if (err || !results) {
      return callback(err);
    }
    return callback(null, JSON.parse(results));
  });
};

const setCachedPictures = (query, data, callback) => {
  redisClient.set(query, data, (err, results) => {
    if (err) {
      return callback(err);
    }
    return callback(null, results);
  });
};

const getPictures = (id) => new Promise((resolve, reject) => {
  const sql = `SELECT description, picture1, picture2, picture3, picture4, picture5, picture6 FROM pictures_service WHERE id=${id}`;
  getCachedPictures(sql, function(err, results) {
    if (!err) {
      return client.query(sql, (err, queryResults) => {
        if (err) {
          return reject(err);
        }
        setCachedPictures(sql, JSON.stringify(queryResults.rows[0]), (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(queryResults);
        });
      });
    }
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
  client.query(sql1, queryArray, (err, results) => {
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
