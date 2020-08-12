const db = require('../index');

describe('DB Pictures', () => {
  test('DB should return an object', async () => {
    const response = await db.getPictures(1);
    expect(response.length).toBeGreaterThan(0);
  });
});
