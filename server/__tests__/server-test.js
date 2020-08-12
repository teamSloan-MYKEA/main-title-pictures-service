const axios = require('axios');
const app = require('../../client/src/app.jsx');

jest.mock('axios');
// beforeEach(() => {
//   const dbItems = db.getPictures(1);
//   return dbItems;
// });
const dbItem = [
  {
    "id": 1,
    "url": "https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/27.jpg",
    "description_id": 1,
    "description": "Fuga est quibusdam molestias adipisci tenetur pariatur quis voluptas vitae maxime adipisci et voluptatem odit autem placeat id iste velit quam quibusdam cumque ipsam rerum iste fugit est molestias aut."
  },
  {
    "id": 1,
    "url": "https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/02.jpg",
    "description_id": 1,
    "description": "Fuga est quibusdam molestias adipisci tenetur pariatur quis voluptas vitae maxime adipisci et voluptatem odit autem placeat id iste velit quam quibusdam cumque ipsam rerum iste fugit est molestias aut."
  },
  {
    "id": 1,
    "url": "https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/05.jpg",
    "description_id": 1,
    "description": "Fuga est quibusdam molestias adipisci tenetur pariatur quis voluptas vitae maxime adipisci et voluptatem odit autem placeat id iste velit quam quibusdam cumque ipsam rerum iste fugit est molestias aut."
  },
  {
    "id": 1,
    "url": "https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/21.jpg",
    "description_id": 1,
    "description": "Fuga est quibusdam molestias adipisci tenetur pariatur quis voluptas vitae maxime adipisci et voluptatem odit autem placeat id iste velit quam quibusdam cumque ipsam rerum iste fugit est molestias aut."
  },
  {
    "id": 1,
    "url": "https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/11.jpg",
    "description_id": 1,
    "description": "Fuga est quibusdam molestias adipisci tenetur pariatur quis voluptas vitae maxime adipisci et voluptatem odit autem placeat id iste velit quam quibusdam cumque ipsam rerum iste fugit est molestias aut."
  },
];

describe('Server methods', () => {
  test('Should return items from DB', async () => {
    axios.get.mockResolvedValue({
      data: dbItem,
    });

    const returnedItems = await app.getImages(1);
    expect(returnedItems[0].url).toEqual("https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/27.jpg");
  });
});
