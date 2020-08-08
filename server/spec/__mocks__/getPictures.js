const pictures = [
  {
    id: 1,
    url: 'https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/27.jpg',
    description_id: 1,
    description: 'Fuga est quibusdam molestias adipisci tenetur pariatur quis voluptas vitae maxime adipisci et voluptatem odit autem placeat id iste velit quam quibusdam cumque ipsam rerum iste fugit est molestias aut.',
  },
  {
    id: 1,
    url: 'https://mykea-main-title-pictures.s3.us-east-2.amazonaws.com/02.jpg',
    description_id: 1,
    description: 'Fuga est quibusdam molestias adipisci tenetur pariatur quis voluptas vitae maxime adipisci et voluptatem odit autem placeat id iste velit quam quibusdam cumque ipsam rerum iste fugit est molestias aut.',
  },
];

export default function getPictures(url) {
  return new Promise((resolve, reject) => {
    const pictureId = url;
    process.nextTick(() => {
      pictures[pictureId]
        ? resolve(pictures[pictureId])
        : reject({
          error: 'Picture ID not found',
        }),
    })
  });
}