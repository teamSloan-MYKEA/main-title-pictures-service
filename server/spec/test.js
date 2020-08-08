const db = require('../index.js');

describe('DB', () => {
  test('DB should return an object from the query', () => db.getPictures(1)
    .then((data) => {
      expect(data).toBeDefined();
    }));
});
