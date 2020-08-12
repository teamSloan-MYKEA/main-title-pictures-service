const db = require('../index');

describe('DB Pictures Retrieve', () => {
  test('DB should return an array', async () => {
    const response = await db.getPictures(1);
    expect(response).toBeInstanceOf(Array);
  });
  test('DB should return no more than 6 objects', async () => {
    const response = await db.getPictures(1);
    expect(response.length).toBeLessThanOfEqual(6);
  });
});
