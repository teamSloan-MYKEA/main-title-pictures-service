const mysqlTest = require('mysql');

const connectionTest = mysqlTest.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mykea_main_title_pictures',
});

// xdescribe('DB Pictures Retrieve', () => {
//   test('DB should return an array', async () => {
//     const response = await db.getPictures(1);
//     expect(response).toBeInstanceOf(Array);
//   });
//   test('DB should return no more than 6 objects', async () => {
//     const response = await db.getPictures(1);
//     expect(response.length).toBeLessThanOrEqual(6);
//   });
//   test('DB should return objects with correct properties', async () => {
//     const response = await db.getPictures(1);
//     expect(response[0].id).toBeANumber();
//   });
// });
// afterAll(() => {
//   db.connection.end();
// });

// Mock DB

beforeEach(() => {
  const drop = 'DROP DATABASE IF EXISTS test_mykea_main_title_pictures_test';
  const createDB = 'CREATE DATABASE test_mykea_main_title_pictures_test';
  const use = 'USE test_mykea_main_title_pictures_test';
  const createDescriptions = `CREATE TABLE descriptions (
    id INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  )`;
  const createPictures = `CREATE TABLE pictures (
    id INT NOT NULL AUTO_INCREMENT,
    url TEXT,
    description_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (description_id) REFERENCES descriptions (id)
  )`;

  return new Promise((resolve, reject) => {
    connectionTest.query(drop, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    })
      .then(() => {
        connectionTest.query(createDB, (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        });
      })
      .then(() => {
        connectionTest.query(use, (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        });
      })
      .then(() => {
        connectionTest.query(createDescriptions, (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        });
      })
      .then(() => {
        connectionTest.query(createPictures, (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        });
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  });
});

describe('DB Pictures Retrieve', () => {
  test('DB should return an array', async () => {
    const response = await db.getPictures(1);
    expect(response).toBeInstanceOf(Array);
  });
  test('DB should return no more than 6 objects', async () => {
    const response = await db.getPictures(1);
    expect(response.length).toBeLessThanOrEqual(6);
  });
  test('DB should return objects with correct properties', async () => {
    const response = await db.getPictures(1);
    expect(response[0].id).toBeANumber();
  });
});
afterAll(() => {
  db.connection.end();
});
