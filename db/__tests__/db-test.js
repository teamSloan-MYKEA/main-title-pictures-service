const db = require('../index');

describe('DB URLs Retrieve', () => {
  test('DB should return an array', async () => {
    const response = await db.getPictures(1);
    expect(response).toBeInstanceOf(Array);
  });
  test('DB should return no more than 6 objects', async () => {
    const response = await db.getPictures(1);
    expect(response.length).toBeLessThanOrEqual(6);
  });
  test('DB should return items with the first property being id', async () => {
    const response = await db.getPictures(1);
    expect(Object.keys(response[0])[0]).toEqual('id');
  });
});
afterAll(() => {
  db.connection.end();
});
